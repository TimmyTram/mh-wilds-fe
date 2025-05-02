import { AmmoKind } from '../AmmoKind';
import { Weapon } from '../Weapon';

export enum LightBowgunSpecialAmmo {
    wyvernblast,
    adhesive,
}

export interface LightBowgunAmmo {
    kind: AmmoKind;
    level: number;
    capacity: number;
    rapid: boolean;
}

export interface LightBowgun extends Weapon {
    ammo: LightBowgunAmmo[];
    specialAmmo: LightBowgunSpecialAmmo;
}