import Sidebar from "../Sidebar/Sidebar";

interface ContentProps {
    children: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
    // This component serves as a layout wrapper for the main content of the application.
    // It includes a sidebar and a main content area.
    // The sidebar will take up 1/8 of the width, while the main content will take up 7/8.
    // on mobile devices the sidebar takes 3/8 of the width and the main content takes 5/8.
    // The sidebar is always visible, while the main content is scrollable.
    return (
        <div className="grid grid-cols-8 gap-4 p-4">
            <div className="col-span-3 md:col-span-2 lg:col-span-1">
                <Sidebar />
            </div>
            <div className="col-span-5 md:col-span-6 lg:col-span-7 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md break-words">
                {children}
            </div>
        </div>
    );
}

export default Content;