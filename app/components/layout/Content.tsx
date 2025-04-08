'use client';

import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

interface ContentProps {
    children: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
    const [showSidebar, setShowSidebar] = useState(true);

    // This component serves as a layout wrapper for the main content of the application.
    // It includes a sidebar and a main content area.
    // The sidebar will take up 1/8 of the width, while the main content will take up 7/8.
    // on mobile devices the sidebar takes 3/8 of the width and the main content takes 5/8.
    // The sidebar is always visible, while the main content is scrollable.
    return (
        <>
        <Navbar toggleSidebar={() => setShowSidebar(!showSidebar)}/>
        <div className="grid grid-cols-8 gap-4 p-4">
                {showSidebar && (
                    <div className="col-span-3 md:col-span-2 lg:col-span-1">
                        <Sidebar />
                    </div>
                )}
                <div className={`p-4 break-words ${showSidebar ? 'col-span-5 md:col-span-6 lg:col-span-7' : 'col-span-8'}`}>
                    {children}
                </div>
            </div>
        </>
    );
}

export default Content;