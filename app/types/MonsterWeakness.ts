export type Element = "fire" | "water" | "thunder" | "ice" | "dragon" | "blast";
export type Status = "sleep" | "poison" | "paralysis" | "stun";
export type Effect = "noise" | "flash" | "stun" | "exhaust";

export type WeaknessKind = "element" | "status" | "effect";

interface BaseWeakness {
  id: number;
  level: number;
  condition: string | null;
}

export interface ElementWeakness extends BaseWeakness {
  kind: "element";
  element: Element;
}

export interface StatusWeakness extends BaseWeakness {
  kind: "status";
  status: Status;
}

export interface EffectWeakness extends BaseWeakness {
  kind: "effect";
  effect: Effect;
}

// The discriminated union type
export type MonsterWeakness = ElementWeakness | StatusWeakness | EffectWeakness;