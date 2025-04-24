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

export enum SkillIconKind {
    affinity,
    attack,
    defense,
    element,
    gathering,
    group,
    handicraft,
    health,
    item,
    offense,
    ranged,
    set,
    stamina,
    utility,
}

export interface SkillIcon {
    id: number;
    kind: SkillIconKind;
}

export interface Skill {
    id: number;
    name: string;
    description: string;
    ranks: SkillRank[];
    kind: SkillKind;
    icon: SkillIcon;
}