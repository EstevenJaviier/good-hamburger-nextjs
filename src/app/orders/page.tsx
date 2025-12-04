"use client";

import { OrderState, useOrderStore } from "@/src/stores/useOrder.store";
import { formatCurrency } from "@/src/utils/currency.util";
import Link from "next/link";

export default function OrdersList({}) {
  const order = useOrderStore((state: OrderState) => state);

  return (
    <>
      <div className="max-w-3xl mt-10">
        <h2 className="text-3xl font-semibold mb-6">Órdenes enviadas</h2>

        {!order.getOrders().length ? (
          <div className="text-center py-16 bg-white border border-gray-200 rounded-xl shadow">
            <div className="text-gray-400 text-6xl mb-4">🧾</div>

            <p className="text-lg text-gray-700 font-medium">
              No hay órdenes registradas aún
            </p>

            <p className="text-gray-500 mt-1">
              Realiza tu primer pedido desde el menú
            </p>

            <Link
              href="/"
              className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Ir al menú
            </Link>
          </div>
        ) : (
          order.getOrders().map((order) => (
            <div
              key={order.id}
              className="border border-gray-200 rounded-xl p-4 mb-4 shadow bg-white"
            >
              <div className="flex justify-between">
                <h3 className="font-semibold">Orden #{order.id}</h3>
                <span className="text-gray-500 text-sm">{order.timestamp}</span>
              </div>

              <p className="text-gray-700 mt-2">
                <strong>Cliente:</strong> {order.customer}
              </p>

              <ul className="mt-2 text-gray-600">
                {order.items.map((item) => (
                  <li key={item.id}>
                    - {item.name} ({formatCurrency(item.price)})
                  </li>
                ))}
              </ul>

              <p className="mt-3">
                <strong>Total:</strong> {formatCurrency(order.total)}
                {order.discountApplied > 0 && (
                  <span className="text-sm text-green-600 ml-2">
                    ({order.discountApplied * 100}% off)
                  </span>
                )}
              </p>
            </div>
          ))
        )}
      </div>
    </>
  );
}
