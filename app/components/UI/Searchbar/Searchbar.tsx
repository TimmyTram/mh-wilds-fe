'use client';

import { memo } from 'react';
import { CiSearch } from 'react-icons/ci';

interface SearchbarProps {
    value: string;
    onChange: (value: string) => void;
}

const Searchbar = memo(({ value, onChange }: SearchbarProps) => {
    return (
        <div className="mb-6 relative">
            <div className="relative">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Search items..."
                    className="w-full p-3 pl-10 pr-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
                <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            {value && (
                <button
                    onClick={() => onChange('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                    Clear
                </button>

            )}
        </div>
    );
})

Searchbar.displayName = 'Searchbar';

export default Searchbar;