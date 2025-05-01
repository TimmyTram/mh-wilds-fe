import { CraftingCost } from '../crafting/Crafting';
import { SkillRank } from '../skills/SkillData';

export interface CharmSet {
    id: number;
    gameId: number;
    ranks: CharmRank[];
}

export interface CharmRankCrafting {
    craftable: boolean;
    zennyCost: number;
    materials: CraftingCost[];
}

export interface CharmRank {
    id: number;
    level: number;
    name: string;
    rarity: number;
    skills: SkillRank[];
    description: string;
    crafting: CharmRankCrafting;

    charm?: Charm; // not listed in api docs, but api response differs here
};

export interface Charm {
    id: number;
}