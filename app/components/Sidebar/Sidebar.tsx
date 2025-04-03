import SidebarItem from "./SidebarItems/SidebarItem";

const Sidebar = () => {
    return (
        <div className="sticky top-24 bg-[#75b7ea] p-4 rounded-lg shadow-md overflow-y-auto break-words">
            <h2>Navigation Resources</h2>
            <ul>
                <SidebarItem resourceName="Armor" link="/armor" />
            </ul>
        </div>
    );
}

export default Sidebar;