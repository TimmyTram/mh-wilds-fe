'use client';

import ItemHeader from "@/app/components/MonsterHunter/Items/ItemHeader";
import { useLanguageContext } from "@/app/Context/LanguageProvider";
import useFetchSingleMhData from "@/app/hooks/fetchSingleMhData";
import { Item } from "@/app/types/ItemData";
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
                <div className="grid grid-cols-8 gap-4 w-full">
                    <ItemHeader className="col-span-2" name={data.name} icon={data.icon} />
                    <div className="col-span-6">
                        <p>Test</p>
                    </div>
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