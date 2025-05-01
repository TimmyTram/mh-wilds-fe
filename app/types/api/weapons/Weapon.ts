import { CraftingCost } from "../crafting/Crafting";
import { SkillRank } from "../skills/SkillData";
import { WeaponKindSubtype } from "./WeaponKind";

export enum Element {
    fire,
    water,
    ice,
    thunder,
    dragon,
    blast,
}

export enum Status {
    poison,
    sleep,
    paralysis,
    stun,
}

export enum Elderseal {
    low,
    average,
    high,
}

export interface WeaponSpecialBase {
    id: number;
    damage: WeaponDamage;
    hidden: boolean;
}

export interface WeaponSpecialElement extends WeaponSpecialBase {
    kind: 'element';
    element: Element;
}

export interface WeaponSpecialStatus extends WeaponSpecialBase {
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
    name: string;
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

    description: string;
}