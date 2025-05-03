import Link from "next/link";
import { FaSteam } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa";


interface PlatformListingProps {
    className?: string;
}

const PlatformListing = ({ className }: PlatformListingProps) => {
    return (
        <div className={className}>
            <Link href="https://store.steampowered.com/app/2246340/Monster_Hunter_Wilds/" target="_blank" rel="noopener noreferrer">
                <FaSteam className="text-6xl light:text-[#171a21] dark:text-[#FFFFFF]" />
            </Link>
            <Link href="https://www.xbox.com/en-US/games/store/monster-hunter-wilds/9NMT6XFN0LVD" target="_blank" rel="noopener noreferrer">
                <FaXbox className="text-6xl text-[#0C7A1F]" />
            </Link>
            <Link href="https://store.playstation.com/en-us/concept/10005176" target="_blank" rel="noopener noreferrer">
                <FaPlaystation className="text-6xl text-[#006FCD]" />
            </Link>
        </div>
    );
}

export default PlatformListing;