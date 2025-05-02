import { Weapon } from '../Weapon';

export enum BowCoating {
    close_range = 'close-range',
    power = 'power',
    pierce = 'pierce',
    paralysis = 'paralysis',
    poison = 'poison',
    sleep = 'sleep',
    blast = 'blast',
    exhaust = 'exhaust',
}

export interface Bow extends Weapon {
    coatings: BowCoating[];
}