import { Item } from "../models/item.model";
import { calculateDiscount } from "./discount.util";

describe("Discount Utils", () => {
  it("should apply 20% for sandwich + fries + drink", () => {
    const items: Item[] = [
      { type: "sandwich", name: "Burger", id: 1, price: 5.0 },
      { name: "Fries", id: 2, price: 2.0, type: "extra" },
      { name: "Soft drink", id: 3, price: 2.5, type: "extra" },
    ];
    expect(calculateDiscount(items)).toBe(0.2);
  });

  it("should apply 15% for sandwich + drink", () => {
    const items: Item[] = [
      { type: "sandwich", name: "Burger", id: 1, price: 5.0 },
      { name: "Soft drink", id: 2, price: 2.5, type: "extra" },
    ];
    expect(calculateDiscount(items)).toBe(0.15);
  });

  it("should apply 10% for sandwich + fries", () => {
    const items: Item[] = [
      { type: "sandwich", name: "Burger", id: 1, price: 5.0 },
      { name: "Fries", id: 2, price: 2.0, type: "extra" },
    ];
    expect(calculateDiscount(items)).toBe(0.1);
  });

  it("should return 0 for no discount", () => {
    const items: Item[] = [{ type: "extra", name: "Fries", id: 1, price: 2.0 }];
    expect(calculateDiscount(items)).toBe(0);
  });
});
