import { Item } from './item.model';

export interface IOrder {
  id: number;
  customer: string;
  items: Item[];
  total: number;
  discountApplied: number;
  timestamp: string;
}
