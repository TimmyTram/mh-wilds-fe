'use client';

import CharmCard from "@/app/components/MonsterHunter/Charms/CharmCard";
import { useLanguageContext } from "@/app/Context/LanguageProvider";
import useFetchAllMhData from "@/app/hooks/fetchAllMhData";
import { CharmSet } from "@/app/types/api/charms/CharmData";
import { sortByName } from "@/app/utils/utils";

const Page = () => {
    const { language, isLanguageLoaded } = useLanguageContext();
    const { data, loading, error } = useFetchAllMhData<CharmSet>(
        `charms?p={"ranks.charm": true, "ranks.name": true}`,
        isLanguageLoaded ? language : undefined
    );


    if (!isLanguageLoaded) {
        return <p>Loading language...</p>;
    }

    const sortedData = data ? sortByName(data, language, item => item.ranks[0]?.name) : [];

    return (
        <div className="px-32 py-4">
            <h1 className="flex justify-center items-center text-4xl pb-10">Charms</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error fetching data.</p>}

            {data && data.length > 0 && (
                <div className="flex flex-wrap gap-4">
                    {sortedData.map((charmSet: CharmSet) => (
                        <CharmCard
                            key={charmSet.ranks[0]?.charm?.id}
                            id={charmSet.ranks[0]?.charm?.id}
                            name={charmSet.ranks[0]?.name}
                        />
                    ))}

                </div>
            )}
            {data && data.length === 0 && <p>No charms available.</p>}

        </div>
    );
}

export default Page;