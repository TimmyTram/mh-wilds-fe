import { Skill } from "./SkillData";

// Basic types
export interface Resistances {
    fire: number;
    water: number;
    ice: number;
    thunder: number;
    dragon: number;
}

export interface Defense {
    base: number;
    max: number;
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

export interface Material {
    item: Item;
    quantity: number;
    id: number;
}

export interface Crafting {
    armor: {
        id: number;
    };
    materials: Material[];
    zennyCost: number;
    id: number;
}


export interface BonusRank {
    bonus: {
        id: number;
    };
    pieces: number;
    skill: {
        id: number;
        skill: {
            id: number;
        };
        level: number;
        description: string;
    };
    id: number;
}

export interface Bonus {
    id: number;
    skill: {
        id: number;
        name: string;
    };
    ranks: BonusRank[];
}

// Armor piece type
type ArmorKind = "head" | "chest" | "arms" | "waist" | "legs";

// Individual armor piece
export interface ArmorPiece {
    kind: ArmorKind;
    name: string;
    description: string;
    rank: string;
    rarity: number;
    resistances: Resistances;
    defense: Defense;
    skills: Skill[];
    slots: number[];
    armorSet: {
        id: number;
    };
    crafting: Crafting;
    id: number;
}

// Complete armor set
export interface ArmorSet {
    name: string;
    pieces: ArmorPiece[];
    bonus: Bonus;
    groupBonus: Bonus;
    id: number;
    gameId: number;
}