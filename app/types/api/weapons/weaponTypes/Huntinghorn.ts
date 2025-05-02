import { Weapon } from '../Weapon';

export enum HuntingHornNote {
    purple,
    red,
    orange,
    yellow,
    green,
    blue,
    aqua,
    white,
}

export enum HuntingHornBubbleKind {
    evasion = 'Evasion & Movement Speed Up',
    regen = 'Health Regeneration',
    stamina = 'Stamina Regeneration',
    damage = 'Attack & Affinity Up',
    defense = 'Defense & Elemental Res Up',
    immunity = 'Ailments/Blights Negated',
}

export enum HuntingHornWaveKind {
    blunt,
    slash,
    fire,
    water,
    thunder,
    ice,
    dragon,
    poison,
    paralyze,
    sleep,
    blast,
}

export interface HuntingHornSong {
    id: number;
    effectId: number;
    sequence: HuntingHornNote[];
    name: string;
}

export interface HuntingHornMelody {
    id: number;
    gameId: number;
    notes: HuntingHornNote[];
    songs: HuntingHornSong[];
}

export interface HuntingHornBubble {
    id: number;
    gameId: number;
    kind: HuntingHornBubbleKind;
    name: string;
}

export interface HuntingHornWave {
    id: number;
    gameId: number;
    kind: HuntingHornWaveKind;
    name: string;
}

export interface HuntingHorn extends Weapon {
    melody: HuntingHornMelody;
    echoBubble: HuntingHornBubble;
    echoWave: HuntingHornWave;
}