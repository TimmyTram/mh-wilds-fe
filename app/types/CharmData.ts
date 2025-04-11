import { Skill } from './SkillData';
import { BaseCrafting } from './Crafting';

export interface CharmSet {
    id: number;
    gameId: number;
    ranks: CharmRank[];
}

export interface CharmRank {
    id: number;
    level: number;
    name: string;
    rarity: number;
    skills: Skill[];
    description: string;
    crafting: BaseCrafting;
};