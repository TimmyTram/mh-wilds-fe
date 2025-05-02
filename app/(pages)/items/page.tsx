'use client';

import { useState, useMemo, useCallback, useDeferredValue } from 'react';
import useFetchAllMhData from '@/app/hooks/fetchAllMhData';
import { useLanguageContext } from '@/app/Context/LanguageProvider';
import { Item } from '@/app/types/api/items/ItemData';
import Searchbar from '@/app/components/UI/Searchbar/Searchbar';
import ItemList from '@/app/components/MonsterHunter/Items/ItemList';
import Loading from '@/app/components/UI/Loading/Loading';
import Error from '@/app/components/UI/Error/Error';

const Page = () => {
    const [searchTerm, setSearchTerm] = useState('');
    // Create a deferred version of the search term that won't block UI
    const deferredSearchTerm = useDeferredValue(searchTerm);

    const { language, isLanguageLoaded } = useLanguageContext();
    
    // fetching all item data at once
    const { data, loading, error } = useFetchAllMhData<Item>(
        `items?p={"id": true, "name": true, "icon": true}`,
        isLanguageLoaded ? language : undefined
    );

    // Memoize the filtered items
    const filteredItems = useMemo(() => {
        if (!data) return [];
        
        // data should only contain items that match the search term
        return data.filter(item =>
            item.name.toLowerCase().includes(deferredSearchTerm.toLowerCase())
        );
    }, [data, deferredSearchTerm]);

    // Memoize the search handler
    const handleSearchChange = useCallback((value: string) => {
        setSearchTerm(value);
    }, []);

    if (!isLanguageLoaded) {
        return <Loading />;
    }

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-4">
            <Searchbar value={searchTerm} onChange={handleSearchChange} />

            <h1 className="flex justify-center items-center text-4xl pb-6 sm:pb-10">Items</h1>
            {data && data.length > 0 ? (
                <ItemList items={filteredItems} />
            ) : (
                <p className="text-center">No items available.</p>
            )}
        </div>
    );
};

export default Page;