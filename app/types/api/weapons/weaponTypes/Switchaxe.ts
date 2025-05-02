import { WeaponDamage } from "../Weapon";

enum SwitchAxePhial {
    power,
    element,
    dragon,
    exhaust,
    paralyze,
    poison,
}

interface Phial {
    kind: SwitchAxePhial;
    damage: WeaponDamage;
}

export interface SwitchAxe {
    kind: 'switch-axe';
    phial: Phial;
}