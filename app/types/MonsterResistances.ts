import { Element, Status, Effect } from "./MonsterWeakness";


interface BaseResistance {
    id: number;
    condition: string | null;
}

export interface ElementResistance extends BaseResistance {
    kind: "element";
    element: Element;
}

export interface StatusResistance extends BaseResistance {
    kind: "status";
    status: Status;
}

export interface EffectResistance extends BaseResistance {
    kind: "effect";
    effect: Effect;
}

// The discriminated union type
export type MonsterResistances = ElementResistance | StatusResistance | EffectResistance;