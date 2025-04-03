import DarkModeBtn from "../Buttons/DarkMode";


const Navbar = () => {
    return (
        <div className="text-white sticky top-0 z-50 p-4 border-b-1 border-gray-500 flex flex-row justify-between items-center">
            <nav>
                <a
                    className="text-gray-500 hover:text-white transition-colors duration-300"
                    href="/">
                    Monster Hunter Wilds
                </a>
            </nav>
            <DarkModeBtn />
        </div>
    )
}

export default Navbar;