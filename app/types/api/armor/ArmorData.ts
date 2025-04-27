import { SkillRank } from "../skills/SkillData";
import { BaseCrafting } from "../crafting/Crafting";


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

export interface ArmorCrafting extends BaseCrafting {
    armor: {
        id: number;
    };
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
    skills: SkillRank[];
    slots: number[];
    armorSet: {
        id: number;
    };
    crafting: ArmorCrafting;
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