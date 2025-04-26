export enum ItemIconKind {
    ammo_basic = "ammo-basic",
    ammo_heavy = "ammo-heavy",
    ammo_slug = "ammo-slug",
    ammo_special = "ammo-special",
    ammo_utility = "ammo-utility",
    armor_sphere = "armor-sphere",
    barrel = "barrel",
    binoculars = "binoculars",
    bone = "bone",
    bug = "bug",
    camping_kit = "camping-kit",
    capture_net = "capture-net",
    certificate = "certificate",
    claw = "claw",
    coin = "coin",
    cooking_cheese = "cooking-cheese",
    cooking_egg = "cooking-egg",
    cooking_garlic = "cooking-garlic",
    cooking_mushroom = "cooking-mushroom",
    cooking_shellfish = "cooking-shellfish",
    crystal = "crystal",
    curative = "curative",
    drug = "drug",
    egg = "egg",
    extract = "extract",
    fishing_rod = "fishing-rod",
    fish = "fish",
    gem = "gem",
    grill = "grill",
    hide = "hide",
    honey = "honey",
    mantle = "mantle",
    meat = "meat",
    medulla = "medulla",
    mushroom = "mushroom",
    mystery_artian = "mystery-artian",
    mystery_decoration = "mystery-decoration",
    mystery_material = "mystery-material",
    nut = "nut",
    ore = "ore",
    phial = "phial",
    pill = "pill",
    plant = "plant",
    plate = "plate",
    poop = "poop",
    potion = "potion",
    powder = "powder",
    question = "question",
    scale = "scale",
    seed = "seed",
    shell = "shell",
    skull = "skull",
    slinger_ammo = "slinger-ammo",
    smoke = "smoke",
    sprout = "sprout",
    tail = "tail",
    trap = "trap",
    trap_tool = "trap-tool",
    voucher = "voucher",
    web = "web",
    whetstone = "whetstone",
    wing = "wing",
    knife = "knife",
}


export enum Color {
    white = "white",
    gray = "gray",
    rose = "rose",
    pink = "pink",
    red = "red",
    vermilion = "vermilion",
    orange = "orange",
    brown = "brown",
    ivory = "ivory",
    yellow = "yellow",
    lemon = "lemon",
    sage_green = "sage-green",
    moss_green = "moss-green",
    green = "green",
    emerald = "emerald",
    sky = "sky",
    blue = "blue",
    ultramarine = "ultramarine",
    blue_purple = "blue-purple",
    purple = "purple",
    dark_purple = "dark-purple",
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