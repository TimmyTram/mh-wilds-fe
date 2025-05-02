'use client';

import DecorationHeader from "@/app/components/MonsterHunter/Decorations/DecorationHeader";
import DecorationInfo from "@/app/components/MonsterHunter/Decorations/DecorationInfo";
import Loading from "@/app/components/UI/Loading/Loading";
import { useLanguageContext } from "@/app/Context/LanguageProvider";
import useFetchSingleMhData from "@/app/hooks/fetchSingleMhData";
import { Decoration } from "@/app/types/api/decorations/Decorations";
import { useParams } from "next/navigation";
import Error from "@/app/components/UI/Error/Error";

const Page = () => {
    const { id } = useParams();
    const { language, isLanguageLoaded } = useLanguageContext();
    const { data, loading, error } = useFetchSingleMhData<Decoration>('decorations', String(id), isLanguageLoaded ? language : undefined);

    if (!isLanguageLoaded) {
        return <Loading />;
    }

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }
    
    return (
        data ? (
            <div className="px-32 py-4 flex flex-col items-center justify-center">
                <div className="flex flex-col md:grid md:grid-cols-8 gap-4 w-full">
                    <DecorationHeader
                        name={data.name}
                        slot={data.slot}
                        className="col-span-4 lg:col-span-2"
                    />
                    <DecorationInfo 
                        description={data.description}
                        rarity={data.rarity}
                        value={data.value}
                        skills={data.skills}
                        className="col-span-4 lg:col-span-6"
                    />
                </div>
            </div>
        ) : (
            <div className="flex flex-col items-center justify-center">
                <p>Decoration not found.</p>
            </div>
        )
    );
}

export default Page;