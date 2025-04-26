'use client';

import useFetchAllMhData from '@/app/hooks/fetchAllMhData';
import { useLanguageContext } from '@/app/Context/LanguageProvider';
import { Item } from '@/app/types/ItemData';
import ItemCard from '@/app/components/MonsterHunter/Items/ItemCard';


const Page = () => {
    const { language, isLanguageLoaded } = useLanguageContext();
    const { data, loading, error } = useFetchAllMhData<Item>(`items?p={"id": true, "name": true, "icon": true}`, isLanguageLoaded ? language : undefined);

    if (!isLanguageLoaded) {
        return <p>Loading language...</p>;
    }

    console.log(data);

    return (
        <div className="px-32 py-4">
            <h1 className="flex justify-center items-center text-4xl pb-10">Items</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error fetching data.</p>}

            {data && data.length > 0 && (
                <div className="flex flex-wrap gap-4">
                    {data.map((item: Item) => (
                        <ItemCard key={item.id} id={item.id}  name={item.name} icon={item.icon} />
                    ))}
                </div>
            )}

        </div>
    );
}

export default Page;