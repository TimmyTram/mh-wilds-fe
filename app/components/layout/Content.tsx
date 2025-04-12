'use client';

import { useState, useEffect } from "react";
import Sidebar from "../UI/Sidebar/Sidebar";
import Navbar from "../UI/Navbar/Navbar";

interface ContentProps {
    children: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
    const [showSidebar, setShowSidebar] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    
    // Check if the viewport is mobile-sized
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768); // 768px is standard md breakpoint
        };
        
        // Set initial value
        checkIfMobile();
        
        // Add event listener for window resize
        window.addEventListener('resize', checkIfMobile);
        
        // Clean up
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);
    
    // On mobile, hide sidebar by default
    useEffect(() => {
        if (isMobile) {
            setShowSidebar(false);
        } else {
            setShowSidebar(true);
        }
    }, [isMobile]);

    return (
        <>
            <Navbar toggleSidebar={() => setShowSidebar(!showSidebar)} />
            
            {/* Mobile Sidebar (Overlay) */}
            {isMobile && showSidebar && (
                <div 
                    className="fixed inset-0 z-30" 
                    onClick={() => setShowSidebar(false)}
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
                >
                    <div 
                        className="fixed left-0 top-0 h-full w-64 z-40 p-4 shadow-lg transform transition-transform duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Sidebar />
                    </div>
                </div>
            )}
            
            {/* Main Content Grid */}
            <div className="grid grid-cols-8 gap-4 p-4">
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
        </>
    );
}

export default Content;