import Link from "next/link";
import DarkModeBtn from "../Buttons/DarkMode";
import LanguageDropDown from "../Dropdown/LanguageDropDown";
import { FiSidebar } from "react-icons/fi";

interface NavbarProps {
    toggleSidebar: () => void;
};

const Navbar = ({ toggleSidebar }: NavbarProps) => {
    return (
        <div className="text-white sticky top-0 z-50 p-4 border-b-4 border-gray-500 flex flex-row justify-between items-center backdrop-blur-md">
            <nav className="flex items-center gap-4">
                <button
                    className="cursor-pointer"
                    onClick={toggleSidebar}>
                    <FiSidebar className="text-xl text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-500"/>
                </button>
                
                <Link
                    className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-500 transition-colors duration-300"
                    href="/">
                    Monster Hunter Wilds
                </Link>
            </nav>
            <div className="flex flex-row gap-8 items-center">
                <LanguageDropDown />
                <DarkModeBtn />
            </div>
        </div>
    );
}

export default Navbar;