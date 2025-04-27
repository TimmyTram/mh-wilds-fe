'use client';

import ItemHeader from "@/app/components/MonsterHunter/Items/ItemHeader";
import ItemInfo from "@/app/components/MonsterHunter/Items/ItemInfo";
import ItemRecipeInfo from "@/app/components/MonsterHunter/Items/ItemRecipeInfo";
import { useLanguageContext } from "@/app/Context/LanguageProvider";
import useFetchSingleMhData from "@/app/hooks/fetchSingleMhData";
import { Item } from "@/app/types/api/items/ItemData";
import { useParams } from "next/navigation";


const Page = () => {
    const { id } = useParams();
    const { language, isLanguageLoaded } = useLanguageContext();
    const { data, loading, error } = useFetchSingleMhData<Item>('items', String(id), language);

    if (!isLanguageLoaded) {
        return <p>Loading language...</p>;
    }

    return (
        data ? (
            <div className="px-32 py-4 flex flex-col items-center justify-center">
                <div className="flex flex-col md:grid md:grid-cols-8 gap-4 w-full">
                    <ItemHeader className="md:col-span-4 lg:col-span-2" name={data.name} icon={data.icon} />
                    <ItemInfo
                        className="md:col-span-4 lg:col-span-6"
                        description={data.description}
                        rarity={Number(data.rarity)}
                        carryLimit={data.carryLimit}
                        value={data.value}
                    />
                    <ItemRecipeInfo className="md:col-span-8" recipes={data.recipes} />
                </div>
            </div>
        ) : (
            <div className="flex flex-col items-center justify-center">
                <p>Item not found.</p>
            </div>
        )
    );
}

export default Page;