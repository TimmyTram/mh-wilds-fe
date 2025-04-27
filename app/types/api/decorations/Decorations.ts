import { SkillRank } from "../skills/SkillData";

export enum DecorationKind {
    weapon,
    armor,
}

export interface Decoration {
    id: number;
    gameId: number;
    name: string;
    description: string;
    slot: number;
    rarity: number;
    kind: DecorationKind;
    skills: SkillRank[];

    value: number;
}