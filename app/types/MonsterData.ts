import { Item } from "./MaterialData";
import { Rank } from "./Rank";
import { MonsterWeakness } from "./MonsterWeakness";
import { MonsterResistances } from "./MonsterResistances";
import { Location } from "./Location";

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
    Carve = "carve",
    BrokenPart = "broken-part",
    CarveRottenSevered = "carve-rotten-severed",
    CarveSevered = "carve-severed",
    WoundDestroyed = "wound-destroyed",
    TemperedWoundDestroyed = "tempered-wound-destroyed",
    EndemicCapture = "endemic-capture",
    CarveRotten = "carve-rotten",
    CarveCrystallized = "carve-crystallized",
    TargetReward = "target-reward",
    SlingerGather = "slinger-gather",
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