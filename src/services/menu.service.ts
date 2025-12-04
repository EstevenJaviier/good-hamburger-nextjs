import { Item } from "../models/item.model";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getMenu(): Promise<Item[]> {
  await delay(1000);

  const res = await fetch("/menu.json");

  if (!res.ok) {
    throw new Error("Error cargando el menú");
  }

  return res.json();
}
