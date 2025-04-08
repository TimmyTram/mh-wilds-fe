'use client';

import { useLanguageContext } from "@/app/Context/LanguageProvider";
import useFetchSingleMhData from "@/app/hooks/fetchSingleMhData";
import { ArmorSet } from "@/app/types/ArmorData";
import { useParams } from "next/navigation";
import Divider from "../../../components/UI/Divider/Divider";
import LoreDisplay from "@/app/components/Armor/LoreDisplay";
import SlotsAndSkillsDisplay from "@/app/components/Armor/SlotsAndSkillsDisplay";
import ArmorResistanceDisplay from "@/app/components/Armor/ArmorResistancesDisplay";
import ArmorGroupBonus from "@/app/components/Armor/ArmorGroupBonus";

const Page = () => {
    const { id } = useParams();
    const { language, isLanguageLoaded } = useLanguageContext();
    const { data, error, loading } = useFetchSingleMhData<ArmorSet>('armor/sets', String(id), language)

    if (!isLanguageLoaded) {
        return <p>Loading language...</p>;
    }

    return (
        <div className="flex flex-col items-center justify-center">
            {loading && <p>Loading...</p>}
            {error && <p>Error fetching data.</p>}

            <div>

                {data && data.name && (
                    <div className="flex flex-col items-start justify-start mb-4">
                        <h2 className="text-4xl text-left">{data.name}</h2>
                    </div>
                )}
                <Divider />

                {data && data.pieces && data.pieces.length > 0 && (
                    <>
                        <SlotsAndSkillsDisplay pieces={data.pieces} />
                        <Divider />
                        {data.bonus && data.groupBonus && (
                            <>
                                <ArmorGroupBonus bonus={data.bonus} groupBonus={data.groupBonus} />
                                <Divider />
                            </>
                        )}
                        <ArmorResistanceDisplay pieces={data.pieces} />
                        <Divider />
                        <LoreDisplay pieces={data.pieces} />
                    </>
                )}
            </div>
        </div>
    );

}

export default Page;