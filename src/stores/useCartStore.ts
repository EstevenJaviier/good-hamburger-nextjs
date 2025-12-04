import { create } from "zustand";
import { Item } from "../models/item.model";

export interface CartState {
  items: Item[];
  error: string | null;

  addItem: (item: Item) => void;
  getItems: () => Item[];
  clear: () => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  error: null,

  addItem: (item) => {
    const items = get().items;

    if (item.type === "sandwich" && items.some((i) => i.type === "sandwich")) {
      set({ error: "You can only add one (1) sandwich" });
      return;
    }

    if (item.name === "Fries" && items.some((i) => i.name === "Fries")) {
      set({ error: "You can only add one portion of fries" });
      return;
    }

    if (
      item.name === "Soft drink" &&
      items.some((i) => i.name === "Soft drink")
    ) {
      set({ error: "You can only add one drink" });
      return;
    }

    set({ items: [...items, item], error: null });
  },

  getItems: () => {
    return [...get().items];
  },

  clear: () => {
    set({ items: [], error: null });
  },
}));
