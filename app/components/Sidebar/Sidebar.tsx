import SidebarItem from "./SidebarItems/SidebarItem";

const Sidebar = () => {
    return (
        <div className="flex flex-col gap-2 sticky top-24 bg-[#75b7ea] p-4 rounded-lg shadow-md overflow-y-auto break-words">
            <h2>Navigation Resources</h2>
            <ul>
                <SidebarItem resourceName="Armor" link="/armor" />
                <SidebarItem resourceName="Weapons" link="/weapons" />
                <SidebarItem resourceName="Items" link="/items" />
                WIP
            </ul>
        </div>
    );
}

export default Sidebar;