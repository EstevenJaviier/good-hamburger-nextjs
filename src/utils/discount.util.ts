import { Item } from "../models/item.model";

export function calculateDiscount(items: Item[]): number {
  const hasSandwich = items.some((i) => i.type === "sandwich");
  const hasFries = items.some((i) => i.name === "Fries");
  const hasDrink = items.some((i) => i.name === "Soft drink");

  if (hasSandwich && hasFries && hasDrink) return 0.2;
  if (hasSandwich && hasDrink) return 0.15;
  if (hasSandwich && hasFries) return 0.1;
  return 0;
}
