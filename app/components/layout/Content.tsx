'use client';

import { useState, useEffect } from "react";
import Sidebar from "../UI/Sidebar/Sidebar";
import Navbar from "../UI/Navbar/Navbar";
import { useIsMobile } from "@/app/hooks/frontend/useIsMobile"; 
import Footer from "../UI/Footer/Footer";

interface ContentProps {
    children: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
    const isMobile = useIsMobile(1536);
    const [showSidebar, setShowSidebar] = useState(true);

    useEffect(() => {
        if (isMobile) {
            setShowSidebar(false);
        } else {
            setShowSidebar(true);
        }
    }, [isMobile]);

    return (
        <main className="flex flex-col min-h-screen">
            <Navbar toggleSidebar={() => setShowSidebar(!showSidebar)} />
            
            {/* Mobile Sidebar (Overlay) */}
            {isMobile && showSidebar && (
                <div 
                    className="fixed inset-0 z-30" 
                    onClick={() => setShowSidebar(false)}
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
                >
                    <div 
                        className="fixed left-0 top-0 h-full w-64 z-40 shadow-lg transform transition-transform duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Sidebar />
                    </div>
                </div>
            )}
            
            {/* Main Content Grid */}
            <div className="grid grid-cols-8 gap-4 flex-1">
                {/* Desktop Sidebar (Part of Grid) */}
                {!isMobile && showSidebar && (
                    <div className="col-span-3 md:col-span-2 lg:col-span-1">
                        <Sidebar />
                    </div>
                )}
                
                {/* Content Area */}
                <div className={`p-4 break-words ${!isMobile && showSidebar ? 'col-span-5 md:col-span-6 lg:col-span-7' : 'col-span-8'}`}>
                    {children}
                </div>
            </div>

            <Footer />
        </main>
    );
}

export default Content;