enum HuntingHornNote {
    purple,
    red,
    orange,
    yellow,
    green,
    blue,
    aqua,
    white,
}

enum HuntingHornBubbleKind {
    evasion = 'Evasion & Movement Speed Up',
    regen = 'Health Regeneration',
    stamina = 'Stamina Regeneration',
    damage = 'Attack & Affinity Up',
    defense = 'Defense & Elemental Res Up',
    immunity = 'Ailments/Blights Negated',
}

enum HuntingHornWaveKind {
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

interface HuntingHornSong {
    id: number;
    effectId: number;
    sequence: HuntingHornNote[];
    name: string;
}

interface HuntingHornMelody {
    id: number;
    gameId: number;
    notes: HuntingHornNote[];
    songs: HuntingHornSong[];
}

interface HuntingHornBubble {
    id: number;
    gameId: number;
    kind: HuntingHornBubbleKind;
    name: string;
}

interface HuntingHornWave {
    id: number;
    gameId: number;
    kind: HuntingHornWaveKind;
    name: string;
}

export interface HuntingHorn {
    kind: 'hunting-horn';
    melody: HuntingHornMelody;
    echoBubble: HuntingHornBubble;
    echoWave: HuntingHornWave;
}