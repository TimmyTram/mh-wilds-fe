import { ISO639_1 } from "../types/ISO639-1";
import { ArmorSet } from "../types/ArmorData";

export const convertISO639_1ToLanguageCode = (lang: string): string => {
    const key = Object.keys(ISO639_1).find((key) => ISO639_1[key] === lang);
    if (key) {
        return key;
    }
    return "Unknown";
};

export const sortArmorDataByName = (data: ArmorSet[], language: string) => {
    const locale = ISO639_1[language] || 'en'; // Default to 'en' if the language is not found
    
    return data.sort((a, b) => {
        // have to safeguard because for some reason other languages besides english do not
        // have the name property in the armor set object
        // Safeguard against null or undefined names
        const nameA = a.name || "";  // Default to empty string if name is missing
        const nameB = b.name || "";  // Default to empty string if name is missing
        
        return nameA.localeCompare(nameB, locale, { sensitivity: 'accent' });
    });
};

