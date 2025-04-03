'use client';
import { useState, useEffect, useRef } from "react";
import { useLanguageContext } from "@/app/Context/LanguageProvider";
import { ISO639_1 } from "@/app/types/ISO639-1";
import { convertISO639_1ToLanguageCode } from "@/app/utils/utils";

const LanguageDropDown = () => {
    const { language, changeLanguage } = useLanguageContext();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const selectLanguage = (lang: string) => {
        changeLanguage(lang);
        setIsOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className="relative inline-block text-left">
            <button
                onClick={toggleDropdown}
                className="bg-blue-500 text-black dark:text-white p-2 rounded-md w-32 text-center"
            >
                {convertISO639_1ToLanguageCode(language)}
            </button>

            {isOpen && (
                <ul className="absolute mt-2 w-32 bg-blue-900 rounded-md shadow-lg z-10">
                    {Object.values(ISO639_1).map((lang) => (
                        <li
                            key={lang}
                            className="px-4 py-2 text-white hover:bg-blue-700 cursor-pointer"
                            onClick={() => selectLanguage(lang)}
                        >
                            {convertISO639_1ToLanguageCode(lang)}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default LanguageDropDown;