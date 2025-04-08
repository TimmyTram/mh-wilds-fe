'use client';

import { useLanguageContext } from "@/app/Context/LanguageProvider";
import useFetchSingleMhData from "@/app/hooks/fetchSingleMhData";
import { ArmorSet, ArmorPiece } from "@/app/types/ArmorData";
import { useParams } from "next/navigation";
import Divider from "../../../components/UI/Divider/Divider";
import LoreDisplay from "@/app/components/Armor/LoreDisplay";
import SlotsAndSkillsDisplay from "@/app/components/Armor/SlotsAndSkillsDisplay";

const Page = () => {
    const { id } = useParams();
    const { language, isLanguageLoaded } = useLanguageContext();
    const { data, error, loading } = useFetchSingleMhData('armor/sets', String(id), language) as { data: ArmorSet | null; error: any; loading: boolean };

    console.log(data);

    if (!isLanguageLoaded) {
        return <p>Loading language...</p>;
    }

    return (
        <div className="flex flex-col items-center justify-center">
            {loading && <p>Loading...</p>}
            {error && <p>Error fetching data.</p>}

            <div className="">

                {data && data.name && (
                    <div className="flex flex-col items-start justify-start mb-4">
                        <h2 className="text-4xl text-left">{data.name}</h2>
                    </div>
                )}
                <Divider />

                {data && data.pieces && data.pieces.length > 0 && (
                    <SlotsAndSkillsDisplay pieces={data.pieces} />
                )}

                {data && data.pieces && data.pieces.length > 0 && (
                    <LoreDisplay pieces={data.pieces} />
                )}
            </div>
        </div>
    );

}

export default Page;