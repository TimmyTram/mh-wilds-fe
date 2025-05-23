import Link from "next/link";

interface SidebarItemProps {
    resourceName: string;
    link: string;
}

const SidebarItem = ({ resourceName, link }: SidebarItemProps) => {
    return (
        <Link href={link} className="flex items-center p-2 rounded-lg hover:bg-sidebarHover tranisition-colors duration-200 ease-in-out">
            {resourceName}
        </Link>
    );
}

export default SidebarItem;