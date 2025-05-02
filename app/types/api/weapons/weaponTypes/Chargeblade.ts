import { Weapon } from '../Weapon';

export enum ChargeBladePhial {
    element,
    impact,
}

export interface ChargeBlade extends Weapon {
    phial: ChargeBladePhial;
}