import { Material } from "../materials/MaterialData";

export interface BaseCrafting {
    materials: Material[];
    zennyCost: number;
    id: number;
}