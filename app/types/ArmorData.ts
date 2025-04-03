
// Basic types
interface Resistances {
    fire: number;
    water: number;
    ice: number;
    thunder: number;
    dragon: number;
}

interface Defense {
    base: number;
    max: number;
}

interface Item {
    id: number;
    gameId: number;
    rarity: number;
    name: string;
    description: string;
    value: number;
    carryLimit: number;
    recipes: any[]; // This appears to be empty in the data
}

interface Material {
    item: Item;
    quantity: number;
    id: number;
}

interface Crafting {
    armor: {
        id: number;
    };
    materials: Material[];
    zennyCost: number;
    id: number;
}

interface SkillRank {
    id: number;
    level?: number;
    description?: string;
    skill?: {
        id: number;
    };
}

interface Skill {
    skill: {
        id: number;
        gameId?: number;
        name: string;
        ranks: SkillRank[];
        description: string;
        kind: string;
    };
    level: number;
    description: string;
    id: number;
}

interface BonusRank {
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

interface Bonus {
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
interface ArmorPiece {
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