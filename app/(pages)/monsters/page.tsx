'use client';

import MonsterCard from "@/app/components/MonsterHunter/Monsters/MonsterCard";
import { useLanguageContext } from "@/app/Context/LanguageProvider";
import useFetchMhData from "@/app/hooks/fetchAllMhData";
import { Monster } from "@/app/types/MonsterData";
import { sortByName } from "@/app/utils/utils";

const Page = () => {
    const { language, isLanguageLoaded } = useLanguageContext();
    const { data, loading, error } = useFetchMhData<Monster>("monsters", isLanguageLoaded ? language : undefined);

    if (!isLanguageLoaded) {
        return <p>Loading language...</p>;
    }

    const sortedData = data ? sortByName(data, language, item => item.name) : [];

    return (
        <div className="px-32 py-4">
            <h1 className="flex justify-center items-center text-4xl pb-10">Monsters</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error fetching data.</p>}

            {data && data.length > 0 && (
                <div className="flex flex-wrap gap-4">
                    {sortedData.map((monster: Monster) => (
                        <MonsterCard key={monster.id} monster={monster} />
                    ))}
                </div>
            )}

        </div>
    );
}

export default Page;