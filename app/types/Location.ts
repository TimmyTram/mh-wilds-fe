export interface Location {
    id: number;
    gameId: number;
    name: string;
    zoneCount: number;
    camps: Camp[];
}

export interface Camp {
    id: number;
    name: string;
    zone: number;
    floot: number; // this might be a typo in the api docs
    risk: Risk;
}

enum Risk {
    safe,
    insecure,
    dangerous,
}