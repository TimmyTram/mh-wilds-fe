import { ISO639_1 } from "../types/ISO639-1";
import { ArmorSet } from "../types/ArmorData";
import { Monster, RewardConditionKind, Species } from "../types/MonsterData";
import { locationsMap, MonsterSpeciesMap, RewardConditionDisplayMap } from "../types/Associations/Associations";

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
 * @param gameId gameid of the monster or armor set
 * @param map The map that contains the association between gameId and image name
 * @returns The path to the image
 */
export const getImage = (gameId: number, map: Map<number, string>): string => {
    const PATH_TO_MONSTER_ASSET = '/assets/MonsterImages/';
    const imgName = map.get(gameId);
    if (imgName === undefined) return `${PATH_TO_MONSTER_ASSET}Unknown.webp`;
    return `${PATH_TO_MONSTER_ASSET}${imgName}.webp`;
}

/**
 * @param kind The kind of armor piece (head, chest, arms, waist, legs)
 * @returns the path to the armor kind image
 */
export const getArmorKindImage = (kind: string) => `/assets/ArmorIcons/${kind}_piece.png`;

/**
 * @param element The element to get the image for
 * @returns the path to the element image
 */
export const getElementImage = (element: string) => `/assets/ElementIcons/${element}.png`;

/**
 * 
 * @param status The status to get the image for
 * @returns the path to the status image
 */
export const getStatusImage = (status: string) => `/assets/StatusIcons/${status}.png`;

/**
 * 
 * @param effect The effect to get the image for
 * @returns the path to the effect image
 */
export const getEffectImage = (effect: string) => `/assets/EffectIcons/${effect}.png`;

/**
 * 
 * @param size The size of the crown (large, silver, small)
 * @returns the path to the crown image
 */
export const getCrownImage = (size: 'large' | 'silver' | 'small') => `/assets/CrownIcons/${size}_crown.png`;

/**
 * @param gameId The game ID of the location
 * @return The path to the location thumbnail image
 */
export const getLocationThumbnailImage = (gameId: number) => `/assets/Thumbnails/Locations/${locationsMap.get(gameId)}.jpg`;



/**
 * We are receiving some enums as strings that use - as a separator.
 * Therefore, we need to convert them to a more readable format.
 * @param kind The kind of reward condition
 * @returns A formatted string representing the reward condition
 */
export const formatRewardCondition = (kind: RewardConditionKind): string => {
    if (kind in RewardConditionDisplayMap) {
        return RewardConditionDisplayMap[kind];
    }
    
    // Otherwise: fallback to a generic formatter (Title Case and replace dashes)
    return kind
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

/**
 * 
 * @param species The species of the monster
 * @returns the formatted species name
 */
export const formatMonsterSpecies = (species: Species): string => {
    if (species in MonsterSpeciesMap) {
        return MonsterSpeciesMap[species];
    }

    // Otherwise: fallback to a generic formatter (Title Case and replace dashes)
    return species
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

/**
 * 
 * @param name The name of the charm, which is in the format "CharmName I"
 * @returns the formatted charm set name, which is in the format "CharmName"
 */
export const formatCharmSetName = (name: string): string => {
    return name.substring(0, name.length - 1);
}