import { AmmoKind } from '../AmmoKind';
import { Weapon } from '../Weapon';

export interface HeavyBowgunAmmo {
    kind: AmmoKind;
    level: number;
    capacity: number;
}

export interface HeavyBowgun extends Weapon {
    ammo: HeavyBowgunAmmo[];
}