import { Weapon } from '../Weapon';

export enum GunlanceShell {
    normal,
    wide,
    long,
}

export interface Gunlance extends Weapon {
    shell: GunlanceShell;
    shellLevel: number;
}