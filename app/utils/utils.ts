import { ISO639_1 } from "../types/ISO639-1";
import { ArmorSet } from "../types/ArmorData";
import { CharmSet } from "../types/CharmData";
import { Monster } from "../types/MonsterData";

export const convertISO639_1ToLanguageCode = (lang: string): string => {
    const key = Object.keys(ISO639_1).find((key) => ISO639_1[key] === lang);
    if (key) {
        return key;
    }
    return "Unknown";
};


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