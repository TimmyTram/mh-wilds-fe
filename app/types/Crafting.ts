import { Material } from "./MaterialData";

export interface BaseCrafting {
    materials: Material[];
    zennyCost: number;
    id: number;
}