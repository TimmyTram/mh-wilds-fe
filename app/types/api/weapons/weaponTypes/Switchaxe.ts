import { Weapon, WeaponDamage } from "../Weapon";

export enum SwitchAxePhial {
    power,
    element,
    dragon,
    exhaust,
    paralyze,
    poison,
}

export interface Phial {
    kind: SwitchAxePhial;
    damage: WeaponDamage;
}

export interface SwitchAxe extends Weapon {
    phial: Phial;
}