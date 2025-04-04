'use client';

import ArmorDisplay from "@/app/components/Armor/ArmorDisplay";
import { useLanguageContext } from "@/app/Context/LanguageProvider";
import useFetchAllMhData from "@/app/hooks/fetchAllMhData";
import { ArmorSet } from "@/app/types/ArmorData";

const Page = () => {
    const { language, isLanguageLoaded } = useLanguageContext();
    const { data, loading, error } = useFetchAllMhData("armor/sets", isLanguageLoaded ? language : undefined);

    if (!isLanguageLoaded) {
        return <p>Loading language...</p>;
    }

    return (
        <div className="px-32 py-4">
            <h1 className="min-w-[100px]">Armor Sets</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error fetching data.</p>}

            {data && data.length > 0 && (
                <div className="flex flex-wrap gap-4">
                    {data.map((set: ArmorSet) => (
                        <ArmorDisplay key={set.id} armorSet={set} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Page;
