'use client';

import { memo } from 'react';
import ItemCard from './ItemCard';
import { Item } from '@/app/types/api/items/ItemData';

interface ItemListProps {
    items: Item[];
}

const ItemList = memo(({ items }: ItemListProps) => {
    if (items.length === 0) {
        return <p className="text-center">No matching items found.</p>;
    }

    return (
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center items-center">
            {items.map((item: Item) => (
                <ItemCard key={item.id} id={item.id} name={item.name} icon={item.icon} />
            ))}
        </div>
    );
});

ItemList.displayName = 'ItemList';

export default ItemList;