import SidebarItem from "./SidebarItems/SidebarItem";

const Sidebar = () => {
    return (
        <div className="bg-sidebar flex flex-col gap-2 sticky top-24 p-4 rounded-lg shadow-md overflow-y-auto break-words">
            
            <h2>Navigation Resources</h2>
            <ul>
                <SidebarItem resourceName="Monsters" link="/monsters" />
                <SidebarItem resourceName="Armor" link="/armor" />
                <SidebarItem resourceName="Weapons" link="/weapons" />
                <SidebarItem resourceName="Charms" link="/charms" />
                <SidebarItem resourceName="Items" link="/items" />
            </ul>
        </div>
    );
}

export default Sidebar;