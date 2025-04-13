import { Item } from "./MaterialData";
import { Rank } from "./Rank";
import { MonsterWeakness } from "./MonsterWeakness";
import { MonsterResistances } from "./MonsterResistances";

enum MonsterKind {
    small = 'small',
    large = 'large',
}

export enum Species {
    FlyingWyvern = "flying-wyvern",
    Fish = "fish",
    Herbivore = "herbivore",
    Lynian = "lynian",
    Neopteron = "neopteron",
    Carapaceon = "carapaceon",
    FangedBeast = "fanged-beast",
    BirdWyvern = "bird-wyvern",
    PiscineWyvern = "piscine-wyvern",
    Leviathan = "leviathan",
    BruteWyvern = "brute-wyvern",
    FangedWyvern = "fanged-wyvern",
    Amphibian = "amphibian",
    Temnoceran = "temnoceran",
    SnakeWyvern = "snake-wyvern",
    ElderDragon = "elder-dragon",
    Cephalopod = "cephalopod",
    Construct = "construct",
    Wingdrake = "wingdrake",
    DemiElder = "demi-elder",
  }
  

export interface MonsterSize {
    base: number;
    mini: number;
    silver: number;
    gold: number;
}

export interface MonsterReward {
    item: Item;
    conditions: RewardCondition[];
}

export interface RewardCondition {
    kind: RewardConditionKind;
    rank: Rank;
    quantity: number;
    chance: number;
    part: string; // Enum-Like according to api docs | https://docs.wilds.mhdb.io/#enum-like
}

export enum RewardConditionKind {
    carve,
    broken_part,
    carve_rotten_severed,
    carve_severed,
    wound_destroyed,
    tempered_wound_destroyed,
    endemic_capture,
    carve_rotten,
    carve_crystallized,
    target_reward,
    slinger_gather,
}

// NOTE: This interface is not labeled in the API docs yet
// https://docs.wilds.mhdb.io/#monsters-properties
export interface MonsterPart {
    part: string;
    name: string;
}

export interface Monster {
    id: number;
    gameId: number;
    kind: MonsterKind;
    species: Species;
    name: string;
    size: MonsterSize;
    description: string;
    features: string;
    tips: string;
    baseHealth: number;
    locations: Location[];
    resistances: MonsterResistances[];
    weaknesses: MonsterWeakness[];
    rewards: MonsterReward[];
    breakableParts: MonsterPart[];
}