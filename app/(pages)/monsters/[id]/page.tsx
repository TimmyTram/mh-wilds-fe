'use client';

import { useLanguageContext } from "@/app/Context/LanguageProvider";
import useFetchSingleMhData from "@/app/hooks/fetchSingleMhData";
import { useParams } from "next/navigation";
import { Monster } from "@/app/types/api/monsters/MonsterData";
import MonsterHeader from "@/app/components/MonsterHunter/Monsters/MonsterHeader";
import MonsterWeaknessChart from "@/app/components/MonsterHunter/Monsters/MonsterWeaknessChart";
import MonsterRewards from "@/app/components/MonsterHunter/Monsters/MonsterRewards";
import MonsterBreakableParts from "@/app/components/MonsterHunter/Monsters/MonsterBreakableParts";
import MonsterSizes from "@/app/components/MonsterHunter/Monsters/MonsterSizes";
import Divider from "@/app/components/UI/Divider/Divider";
import MonsterLocation from "@/app/components/MonsterHunter/Monsters/MonsterLocation";
import MonsterResistancesChart from "@/app/components/MonsterHunter/Monsters/MonsterResistancesChart";
import Loading from "@/app/components/UI/Loading/Loading";
import Error from "@/app/components/UI/Error/Error";

const Page = () => {
    const { id } = useParams();
    const { language, isLanguageLoaded } = useLanguageContext();
    const { data, error, loading } = useFetchSingleMhData<Monster>('monsters', String(id), language)

    if (!isLanguageLoaded) {
        return <Loading />;
    }

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    if (!data) {
        return null;
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-8 gap-4">
                <div className="col-span-8">
                    <MonsterHeader monster={data} imgWidth={256} imgHeight={256} imgClassName={"rounded-xl"} />
                </div>
                <div className="col-span-8">
                    <MonsterWeaknessChart monster={data} />
                </div>

                <div className="col-span-8">
                    <MonsterResistancesChart monster={data} />
                </div>

                <div className="col-span-8 md:col-span-4 border-4 rounded-lg shadow-md p-4">
                    <MonsterRewards rewards={data.rewards} />
                </div>

                <div className="col-span-8 md:col-span-4 border-4 rounded-lg shadow-md p-4">
                    <MonsterBreakableParts monsterParts={data.breakableParts} />
                    <Divider />
                    <MonsterSizes size={data.size} />
                    <Divider />
                    <MonsterLocation locations={data.locations} />
                </div>
            </div>
        </div>
    );
};

export default Page;