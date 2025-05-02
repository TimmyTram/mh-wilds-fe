'use client';

import MonsterCard from "@/app/components/MonsterHunter/Monsters/MonsterCard";
import { useLanguageContext } from "@/app/Context/LanguageProvider";
import useFetchMhData from "@/app/hooks/fetchAllMhData";
import { Monster } from "@/app/types/api/monsters/MonsterData";
import { sortByName } from "@/app/utils/utils";
import Loading from "@/app/components/UI/Loading/Loading";

const Page = () => {
    const { language, isLanguageLoaded } = useLanguageContext();
    const { data, loading, error } = useFetchMhData<Monster>(`monsters?p={"id": true, "name": true, "gameId": true}`, isLanguageLoaded ? language : undefined);

    if (!isLanguageLoaded) {
        return <Loading />;
    }
    
    const sortedData = data ? sortByName(data, language, item => item.name) : [];

    return (
        <div className="px-32 py-4">
            <h1 className="flex justify-center items-center text-4xl pb-10">Monsters</h1>
            {loading && <Loading />}
            {error && <p>Error fetching data.</p>}

            {data && data.length > 0 && (
                <div className="flex flex-wrap gap-4">
                    {sortedData.map((monster: Monster) => (
                        <MonsterCard key={monster.id} id={monster.id} gameId={monster.gameId} name={monster.name} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Page;