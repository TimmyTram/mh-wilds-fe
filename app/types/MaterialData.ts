export interface Material {
    item: Item;
    quantity: number;
    id: number;
}

export interface Item {
    id: number;
    gameId: number;
    rarity: number;
    name: string;
    description: string;
    value: number;
    carryLimit: number;
    recipes: any[]; // This appears to be empty in the data
}