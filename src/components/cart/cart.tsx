import { useOrderStore } from "@/src/stores/useOrder.store";
import { useCartStore } from "@/src/stores/useCartStore";
import { formatCurrency } from "@/src/utils/currency.util";
import { calculateDiscount } from "@/src/utils/discount.util";
import { useState } from "react";

export default function Cart() {
  const [customerName, setCustomerName] = useState("");
  const [showErrors, setShowErrors] = useState(false);

  const cart = useCartStore((state) => state);
  const order = useOrderStore((state) => state);

  const handleSubmitOrder = () => {
    if (!customerName || !cart.getItems().length) {
      setShowErrors(true);
      return;
    }

    order.submitOrder(
      customerName,
      cart.getItems(),
      finalPrice(),
      discountPercent()
    );

    setCustomerName("");
    cart.clear();
    setShowErrors(false);
  };

  function total(): number {
    return cart.getItems().reduce((sum, item) => sum + item.price, 0);
  }

  function discountPercent(): number {
    return calculateDiscount(cart.getItems());
  }

  function finalPrice(): number {
    return total() - total() * discountPercent();
  }

  return (
    <>
      <div className="bottom-0 left-0 w-full bg-white shadow-lg p-4 sm:static sm:w-80 sm:ml-auto sm:mt-10 border border-gray-200 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Cart</h2>

        {cart.error && <div className="text-red-500 mb-2">{cart.error}</div>}

        {cart.getItems().map((item, index) => (
          <div key={index} className="flex justify-between py-1 border-b">
            <span>{item.name}</span>
            <span>{formatCurrency(item.price)}</span>
          </div>
        ))}

        <div className="mt-4">
          <p className="text-gray-600">Subtotal: {formatCurrency(total())}</p>

          {discountPercent() > 0 && (
            <p className="text-gray-600">
              Discount: {(discountPercent() * 100).toFixed(0)}%
            </p>
          )}

          <p className="font-bold text-lg mt-2">
            Total: {formatCurrency(finalPrice())}
          </p>
        </div>

        <input
          value={customerName}
          onChange={(event) => setCustomerName(event.target.value)}
          type="text"
          placeholder="Nombre cliente"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-4"
        />

        {showErrors && !customerName && (
          <div className="text-red-500 text-sm mt-1">
            The customer's name is required.
          </div>
        )}

        <button
          onClick={handleSubmitOrder}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 w-full mt-3"
        >
          Submit Order
        </button>

        {showErrors && !cart.getItems().length && (
          <div className="text-red-600 text-sm mt-1">
            You must add at least one product to the cart.
          </div>
        )}
      </div>
    </>
  );
}
