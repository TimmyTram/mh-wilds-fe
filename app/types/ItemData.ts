export enum ItemIconKind {
    ammo_basic,
    ammo_heavy,
    ammo_slug,
    ammo_special,
    ammo_utility,
    armor_sphere,
    barrel,
    binoculars,
    bone,
    bug,
    camping_kit,
    capture_net,
    certificate,
    claw,
    coin,
    cooking_cheese,
    cooking_egg,
    cooking_garlic,
    cooking_mushroom,
    cooking_shellfish,
    crystal,
    curative,
    drug,
    egg,
    extract,
    fishing_rod,
    fish,
    gem,
    grill,
    hide,
    honey,
    mantle,
    meat,
    medulla,
    mushroom,
    mystery_artian,
    mystery_decoration,
    mystery_material,
    nut,
    ore,
    phial,
    pill,
    plant,
    plate,
    poop,
    potion,
    powder,
    question,
    scale,
    seed,
    shell,
    skull,
    slinger_ammo,
    smoke,
    sprout,
    tail,
    trap,
    trap_tool,
    voucher,
    web,
    whetstone,
    wing,
    knife,
}

export enum Color {
    white,
    gray,
    rose,
    pink,
    red,
    vermilion,
    orange,
    brown,
    ivory,
    yellow,
    lemon,
    sage_green,
    moss_green,
    green,
    emerald,
    sky,
    blue,
    ultramarine,
    blue_purple,
    purple,
    dark_purple,
}

export interface ItemIcon {
    id: number;
    kind: ItemIconKind;
    colorId: number;
    color: Color;
}

export interface ItemRecipe {
    id: number;
    amount: number;
    inputs: Item[];
}

export interface Item {
    id: number;
    gameId: number;
    name: string;
    description: string;
    rarity: string;
    carryLimit: number;
    value: number;
    recipes: ItemRecipe[];
    icon: ItemIcon;
}