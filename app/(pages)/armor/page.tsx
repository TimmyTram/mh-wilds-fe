'use client';

import ArmorCard from "@/app/components/MonsterHunter/Armor/ArmorCard";
import Error from "@/app/components/UI/Error/Error";
import Loading from "@/app/components/UI/Loading/Loading";
import { useLanguageContext } from "@/app/Context/LanguageProvider";
import useFetchAllMhData from "@/app/hooks/fetchAllMhData";
import { ArmorSet } from "@/app/types/api/armor/ArmorData";
import { sortByName } from "@/app/utils/utils";

const Page = () => {
    const { language, isLanguageLoaded } = useLanguageContext();
    const { data, loading, error } = useFetchAllMhData<ArmorSet>(`armor/sets?p={"id": true, "name": true, "gameId": true, "pieces": true}`, isLanguageLoaded ? language : undefined);

    if (!isLanguageLoaded) {
        return <Loading />;
    }

    const sortedData = data ? sortByName(data, language, item => item.name) : [];
  
    return (
        <div className="px-32 py-4">
            <h1 className="flex justify-center items-center text-4xl pb-10">Armor Sets</h1>
            {loading && <Loading />}
            {error && <Error />}

            {data && data.length > 0 && (
                <div className="flex flex-wrap gap-4">
                    {sortedData.map((set: ArmorSet) => (
                        <ArmorCard key={set.id} id={set.id} gameId={set.gameId} name={set.name} pieces={set.pieces} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Page;
