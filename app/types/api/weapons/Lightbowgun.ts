import { AmmoKind } from './AmmoKind';

enum LightBowgunSpecialAmmo {
    wyvernblast,
    adhesive,
}

interface LightBowgunAmmo {
    kind: AmmoKind;
    level: number;
    capacity: number;
    rapid: boolean;
}

export interface LightBowgun {
    kind: 'light-bowgun';
    ammo: LightBowgunAmmo[];
    specialAmmo: LightBowgunSpecialAmmo;
}