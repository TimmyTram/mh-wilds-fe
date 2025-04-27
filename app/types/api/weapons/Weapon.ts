import { Item } from "../items/ItemData";
import { SkillRank } from "../skills/SkillData";
import { WeaponKindSubtype } from "./WeaponKind";

enum Element {
    fire,
    water,
    ice,
    thunder,
    dragon,
    blast,
}

enum Status {
    poison,
    sleep,
    paralysis,
    stun,
}

enum Elderseal {
    low,
    average,
    high,
}

interface WeaponSpecialBase {
    id: number;
    damage: WeaponDamage;
    hidden: boolean;
}

interface WeaponSpecialElement extends WeaponSpecialBase {
    kind: 'element';
    element: Element;
}

interface WeaponSpecialStatus extends WeaponSpecialBase {
    kind: 'status';
    status: Status;
}

export type WeaponSpecial = WeaponSpecialElement | WeaponSpecialStatus;

export interface Sharpness {
    red: number;
    orange: number;
    yellow: number;
    green: number;
    blue: number;
    white: number;
    purple: number;
}

interface CraftingCost {
    quantity: number;
    item: Item;
}

export interface WeaponCrafting {
    id: number;
    craftable: boolean;
    previous: Weapon;
    branches: Weapon[];
    craftingZennyCost: number;
    craftingMaterials: CraftingCost[];
    upgradeZennyCost: number;
    upgradeMaterials: CraftingCost[];
    row: number;
    column: number;
}

export interface WeaponDamage {
    raw: number; // TRUE RAW DAMAGE
    display: number; // THE BLOATED DAMAGE VALUE
}

export interface WeaponSeries {
    id: number;
    gameId: number;
}

export interface Weapon {
    id: number;
    gameId: number;
    kind: WeaponKindSubtype;
    name: string;
    rarity: number;
    damage: WeaponDamage;
    specials: WeaponSpecial[];
    sharpness: Sharpness;
    handicraft: number[];
    skills: SkillRank[];
    defenseBonus: number;
    elderseal: Elderseal;
    affinity: number; // A percentage value
    slots: number[]; // each index represents a slot.
    // The value of the slot is the highest level of decoration that can fit in that slot.
    crafting: WeaponCrafting;
    series: WeaponSeries;
}