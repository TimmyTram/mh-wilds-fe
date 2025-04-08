export interface SkillRank {
    id: number;
    level?: number;
    description?: string;
    skill?: {
        id: number;
    };
}

export interface Skill {
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