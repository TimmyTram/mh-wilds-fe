import { RewardConditionKind } from "../MonsterData";

/**
 * This is used to map gameIds of armor sets to their respective monster.
 * This is used to render the image of the monster in the armor set page. 
 */
const armorMappings: [string, number[]][] = [
    ["Congalala", [-2117203456, -1456507776, 672494016]],
    ["Quematrice", [-2109565568, -647496960, 307878816]],
    ["Gore_Magala", [-2086657152, 1956132992]],
    ["Blangonga", [-2058671360, 458233920]],
    ["Vespoid", [-2040662912, -1823673856, 744512064]],
    ["Hirabami", [-1916391168, -1118126720, 951292800]],
    ["Rathalos", [-1853781504, 1769659776]],
    ["Chatacabra", [-1843265280, 297911136, 1204277120]],
    ["Doshaguma", [-1727218944, 130302384, 884421248]],
    ["GRathalos", [-1699202560, -1309878016, -309477024]],
    ["Rathian", [-1581546752, -1376663552]],
    ["Comaqchi", [-1569704320, 417054528, 2048560000]],
    ["GSeikret", [-1564879104, -355167712, 253715744]],
    ["Nerscylla", [-1535116544, 690915648, 1116493056]],
    ["Gypceros", [-1400394880, -805142080]],
    ["GArkveld", [-1346586880, 238882304, 955926336]],
    ["Jin_Dahaad", [-1332061952, -59351948]],
    ["Uth_Duna", [-1314912640, -1116023296, -282994240]],
    ["Rey_Dau", [-1311785984, -972610496, 598400000]],
    ["Kranodath", [-1284130432, -1253492608, 1349287168]],
    ["GDoshaguma", [-1158391424, 29897828, 472240160]],
    ["Talioth", [-1128792192, 11, 1122640768]],
    ["Piragill", [139617472, 303232896, 1766304512]],
    ["Balahara", [-932860800, 12330399, 1699065088]],
    ["Xu_Wu", [-796412032, -520738208, 1827374976]],
    ["Yian_Kut_Ku", [-636732672, 459951104]],
    ["Lala_Barina", [-631500928, -24830612, 3249367]],
    ["Arkveld", [-605699072, 1693966848]],
    ["Gravios", [-436938720, -295012384]],
    ["Bulaqchi", [12, 790327424, 1719980800]],
    ["GEbony", [124521752, 608781568, 1552524288]],
    ["Nu_Udra", [327345216, 1044071680, 1178166400]],
    ["Rompopolo", [1064459456, 2045212544, 2113410944]],
    ["Ajarakan", [1254402048, 1354790272, 1905422464]],
    ["GFulgur", [1493203456, 1725739136]],
    ["Zoh_Shia", [30569, 22297]],
    ["Mizutsune", [30086, 12183]],
];

export const armorSetsMap = new Map<number, string>(
    armorMappings.flatMap(([name, ids]) => ids.map(id => [id, name]))
);


/**
 * Maps below here, are used to map game Ids to their respective image filenames.
 * We do this because if we used the names of the monsters to access the images,
 * it would fail in other languages.
 * So we use the game Ids to access the images.
 */
// Game ID to Monster Name mapping
export const monsterMap = new Map<number, string>([
    [-2003468672, "Zoh_Shia"],
    [-1916429696, "GDoshaguma"],
    [-1547364608, "Rey_Dau"],
    [-1528962176, "Lala_Barina"],
    [-1440201088, "Congalala"],
    [-1363370496, "Nerscylla"],
    [-758250816, "Gore_Magala"],
    [-535078400, "Gravios"],
    [-283654400, "GArkveld"],
    [-34937520, "Quematrice"],
    [15, "Doshaguma"],
    [16, "Balahara"],
    [26, "Rathian"],
    [33, "Chatacabra"],
    [32634, "Mizutsune"],
    [107194928, "GFulgur"],
    [222933952, "Hirabami"],
    [402056736, "Yian_Kut_Ku"],
    [567628288, "Rompopolo"],
    [746996864, "Arkveld"],
    [777460864, "Ajarakan"],
    [1049705664, "Gypceros"],
    [1401863296, "Xu_Wu"],
    [1411933184, "GRathalos"],
    [1467998976, "Uth_Duna"],
    [1553456768, "Jin_Dahaad"],
    [1657778432, "Nu_Udra"],
    [1663995904, "GEbony"],
    [1965232896, "Rathalos"],
    [2129596800, "Blangonga"],
]);

export const locationsMap = new Map<number, string>([
    [-1251081216, "oilwell_basin"],
    [-1226157568, "windward_plains"],
    [-859829056, "scarlet_forest"],
    [327401792, "ruins_of_wyveria"],
    [1182228864, "iceshard_cliffs"],
]);

export const RewardConditionDisplayMap: Record<RewardConditionKind, string> = {
    [RewardConditionKind.Carve]: "Carve",
    [RewardConditionKind.BrokenPart]: "Broken Part",
    [RewardConditionKind.CarveRottenSevered]: "Carve Severed Monster Part (Rotten)",
    [RewardConditionKind.CarveSevered]: "Carve Severed Monster Part",
    [RewardConditionKind.WoundDestroyed]: "Wound Destroyed",
    [RewardConditionKind.TemperedWoundDestroyed]: "Tempered Wound Destroyed",
    [RewardConditionKind.EndemicCapture]: "Endemic Life Capture",
    [RewardConditionKind.CarveRotten]: "Carve Monster Carcass (Rotten)",
    [RewardConditionKind.CarveCrystallized]: "Carve Crystallized Monster Carcass",
    [RewardConditionKind.TargetReward]: "Target Reward",
    [RewardConditionKind.SlingerGather]: "Slinger Gather",
};

