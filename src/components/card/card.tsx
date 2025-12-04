import { useCartStore, CartState } from "@/src/stores/useCartStore";
import { Item } from "../../models/item.model";
import { formatCurrency } from "@/src/utils/currency.util";

export default function Card({ item }: { item: Item }) {
  const addToCart = useCartStore((state: CartState) => state.addItem);

  return (
    <>
      <div className="bg-white shadow-sm border border-gray-200 p-3 rounded-lg">
        <div className="mb-3">
          <p className="text-xs font-medium text-gray-400 mb-1 uppercase">
            Name:
          </p>
          <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
        </div>

        <div className="mb-4">
          <p className="text-xs font-medium text-gray-400 mb-1 uppercase">
            Price:
            <span className="text-lg font-bold text-green-600">
              {formatCurrency(item.price)}
            </span>
          </p>
        </div>

        <button
          onClick={() => addToCart(item)}
          className="w-full bg-blue-600 text-white py-2 rounded-xl font-medium hover:bg-blue-700 cursor-pointer"
        >
          Add to cart
        </button>
      </div>
    </>
  );
}
