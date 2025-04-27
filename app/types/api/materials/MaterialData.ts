import { Item } from '../items/ItemData';

export interface Material {
    item: Item;
    quantity: number;
    id: number;
}