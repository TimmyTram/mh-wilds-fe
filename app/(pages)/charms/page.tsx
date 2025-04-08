'use client';

import CharmDisplay from "@/app/components/Charms/CharmsDisplay";
import { useLanguageContext } from "@/app/Context/LanguageProvider";
import useFetchAllMhData from "@/app/hooks/fetchAllMhData";
import { CharmSet } from "@/app/types/CharmData";
import { sortCharmDataByName } from "@/app/utils/utils";

const Page = () => {
    const { language, isLanguageLoaded } = useLanguageContext();
    const { data, loading, error } = useFetchAllMhData<CharmSet>("charms", isLanguageLoaded ? language : undefined);

    if (!isLanguageLoaded) {
        return <p>Loading language...</p>;
    }

    const sortedData = data ? sortCharmDataByName(data, language) : [];

    return (
        <div className="px-32 py-4">
            <h1 className="flex justify-center items-center text-4xl pb-10">Charms</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error fetching data.</p>}

            {data && data.length > 0 && (
                <div className="flex flex-wrap gap-4">
                    {sortedData.map((charmSet: CharmSet) => (
                        <CharmDisplay key={charmSet.id} charmSet={charmSet} />
                    ))}
                </div>
            )}
            {data && data.length === 0 && <p>No charms available.</p>}

        </div>
    );
}

export default Page;