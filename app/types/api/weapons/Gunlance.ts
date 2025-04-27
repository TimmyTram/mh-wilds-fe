enum GunlanceShell {
    normal,
    wide,
    long,
}

export interface Gunlance {
    kind: 'gunlance';
    shell: GunlanceShell;
    shellLevel: number;
}