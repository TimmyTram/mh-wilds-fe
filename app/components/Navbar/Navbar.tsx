import Link from "next/link";
import DarkModeBtn from "../Buttons/DarkMode";
import LanguageDropDown from "../Dropdown/LanguageDropDown";

const Navbar = () => {
    return (
        <div className="text-white sticky top-0 z-50 p-4 border-b-1 border-gray-500 flex flex-row justify-between items-center">
            <nav>
                <Link
                    className="text-gray-500 hover:text-white transition-colors duration-300"
                    href="/">
                    Monster Hunter Wilds
                </Link>
            </nav>
            <div className="flex flex-row gap-8 items-center">
                <LanguageDropDown />
                <DarkModeBtn />
            </div>
        </div>
    )
}

export default Navbar;