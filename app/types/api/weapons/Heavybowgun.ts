import { AmmoKind } from './AmmoKind';

interface HeavyBowgunAmmo {
    kind: AmmoKind;
    level: number;
    capacity: number;
}

export interface HeavyBowgun {
    kind: 'heavy-bowgun';
    ammo: HeavyBowgunAmmo[];
}