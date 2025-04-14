export interface SkillRank {
    id: number;
    name: string;
    description: string;
    level: number;

    skill: {
        id: number;
        name: string;
    }
}

export enum SkillKind {
    armor,
    weapon,
    set,
    group
}

export interface Skill {
    id: number;
    name: string;
    description: string;
    ranks: SkillRank[];
    kind: SkillKind;
}