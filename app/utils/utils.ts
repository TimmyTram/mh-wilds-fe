import { ISO639_1 } from "../types/ISO639-1";
import { ArmorSet } from "../types/ArmorData";
import { Monster } from "../types/MonsterData";

/**
 * 
 * @param lang The language code to convert
 * @returns the converted language code
 */
export const convertISO639_1ToLanguageCode = (lang: string): string => {
    const key = Object.keys(ISO639_1).find((key) => ISO639_1[key] === lang);
    if (key) {
        return key;
    }
    return "Unknown";
};

/**
 * 
 * @param data List of monsters, charms, ArmorSets, etc.
 * @param language Need to sort data by name on a per language basis
 * @param getName helper function to get the name of the item
 * @returns the sorted data
 */
export const sortByName = <T>(
    data: T[],
    language: string,
    getName: (item: T) => string | undefined
): T[] => {
    const locale = ISO639_1[language] || 'en';

    return data.sort((a, b) => {
        const nameA = getName(a) || "";
        const nameB = getName(b) || "";

        return nameA.localeCompare(nameB, locale, { sensitivity: 'accent' });
    });
};

/**
 * 
 * @param data Individual monster or armorset data
 * @param map The map that contains the association between gameId and image name
 * @returns The path to the image
 */
export const getImage = (data: Monster | ArmorSet, map: Map<number, string>): string => {
    const PATH_TO_MONSTER_ASSET = '/assets/MonsterImages/';
    const imgName = map.get(data.gameId);
    if (imgName === undefined) return `${PATH_TO_MONSTER_ASSET}Unknown.webp`;
    return `${PATH_TO_MONSTER_ASSET}${imgName}.webp`;
}