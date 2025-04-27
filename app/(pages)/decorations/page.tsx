'use client';

import DecorationCard from "@/app/components/MonsterHunter/Decorations/DecorationCard";
import { useLanguageContext } from "@/app/Context/LanguageProvider";
import useFetchAllMhData from "@/app/hooks/fetchAllMhData";
import { Decoration } from "@/app/types/api/decorations/Decorations";
import { sortByName } from "@/app/utils/utils";

const Page = () => {
    const { language, isLanguageLoaded } = useLanguageContext();
    const { data, loading, error } = useFetchAllMhData<Decoration>(`decorations?p={"id": true, "name": true, "slot": true}`, isLanguageLoaded ? language : undefined);

    const sortedData = data ? sortByName(data, language, item => item.name) : [];

    return (
        <div className="px-32 py-4">
            <h1 className="flex justify-center items-center text-4xl pb-10">Decorations</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error fetching data.</p>}

            {data && data.length > 0 && (
                <div className="flex flex-wrap gap-4">
                    {sortedData.map((decoration: Decoration) => (
                        <DecorationCard key={decoration.id} id={decoration.id} name={decoration.name} slot={decoration.slot} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Page;