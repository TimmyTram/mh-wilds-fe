import { Material } from "../materials/MaterialData";
import { Item } from "../items/ItemData";

export interface BaseCrafting {
    materials: Material[];
    zennyCost: number;
    id: number;
}

export interface CraftingCost {
    quantity: number;
    item: Item;
}