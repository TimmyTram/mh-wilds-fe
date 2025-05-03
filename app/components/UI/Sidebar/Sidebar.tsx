import { sidebarItems } from "@/app/constants/constants";
import SidebarItem from "./SidebarItems/SidebarItem";

const Sidebar = () => {
    return (
        <div className="bg-sidebar flex flex-col gap-2 sticky top-20 p-4 rounded-sm shadow-md overflow-y-auto break-words h-[85vh]">
            <h2>Navigation Resources</h2>
            <ul>
                {Array.from(sidebarItems).map(([key, value]) => (
                    <SidebarItem key={key} resourceName={key} link={value} />
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;