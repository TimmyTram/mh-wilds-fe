'use client';

import { useLanguageContext } from "@/app/Context/LanguageProvider";
import useFetchSingleMhData from "@/app/hooks/fetchSingleMhData";
import { useParams } from "next/navigation";
import { Monster } from "@/app/types/MonsterData";
import Divider from "../../../components/UI/Divider/Divider";
import MonsterHeader from "@/app/components/MonsterHunter/Monsters/MonsterHeader";
import MonsterWeaknessChart from "@/app/components/MonsterHunter/Monsters/MonsterWeaknessChart";


const Page = () => {
    const { id } = useParams();
    const { language, isLanguageLoaded } = useLanguageContext();
    const { data, error, loading } = useFetchSingleMhData<Monster>('monsters', String(id), language)

    if (!isLanguageLoaded) {
        return <p>Loading language...</p>;
    }

    if (!data) {
        return <p>Loading data...</p>;
    }

    console.log(data);

    return (
        <div className="flex flex-col items-center justify-center">
            {loading && <p>Loading...</p>}
            {error && <p>Error fetching data.</p>}

            <div className="grid grid-cols-8">
                <div className="col-span-8">
                    <MonsterHeader monster={data} imgWidth={256} imgHeight={256} imgClassName={"rounded-xl"} />
                </div>
                <MonsterWeaknessChart monster={data} />
            </div>
            

        </div>
    );
};

export default Page;