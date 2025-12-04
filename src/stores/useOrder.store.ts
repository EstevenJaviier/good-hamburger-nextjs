import { create } from "zustand";
import { IOrder } from "../models/order.model";
import { Item } from "../models/item.model";

export interface OrderState {
  orders: IOrder[];
  idCounter: number;

  submitOrder: (
    customer: string,
    items: Item[],
    total: number,
    discount: number
  ) => void;

  getOrders: () => IOrder[];
}

export const useOrderStore = create<OrderState>((set, get) => ({
  orders: [],
  idCounter: 1,

  submitOrder: (customer, items, total, discount) => {
    const { idCounter, orders } = get();

    const order: IOrder = {
      id: idCounter,
      customer,
      items,
      total,
      discountApplied: discount,
      timestamp: new Date().toISOString(),
    };

    set({
      orders: [...orders, order],
      idCounter: idCounter + 1,
    });
  },

  getOrders: () => {
    return [...get().orders];
  },
}));
