'use client';
import { useLanguageContext } from "@/app/Context/LanguageProvider";

const LanguageDropDown = () => {
    const { language, changeLanguage } = useLanguageContext();
    
    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log("Language changed to:", event.target.value);
        changeLanguage(event.target.value);
    };

    return (
        <select value={language} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="ja">Japanese</option>
        </select>
    );
}

export default LanguageDropDown;