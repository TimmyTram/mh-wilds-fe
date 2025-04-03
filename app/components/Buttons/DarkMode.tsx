'use client';

import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const DarkModeBtn = () => {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    // Ensure component is mounted before using resolvedTheme
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-9 h-9 bg-gray-300 rounded-full animate-pulse"></div>; // Placeholder while loading
    }

    return resolvedTheme === 'dark' ? (
        <FiSun onClick={() => setTheme('light')} className="cursor-pointer text-yellow-500" />
    ) : (
        <FiMoon onClick={() => setTheme('dark')} className="cursor-pointer text-gray-700" />
    );
};

export default DarkModeBtn;
