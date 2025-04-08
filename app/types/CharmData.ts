import { Skill } from './SkillData';

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
};