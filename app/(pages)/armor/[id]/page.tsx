'use client';

import { useLanguageContext } from "@/app/Context/LanguageProvider";
import useFetchSingleMhData from "@/app/hooks/fetchSingleMhData";
import { ArmorSet, ArmorPiece } from "@/app/types/ArmorData";
import { useParams } from "next/navigation";
import Divider from "../../../components/UI/Divider/Divider";

const Page = () => {
    const { id } = useParams();
    const { language, isLanguageLoaded } = useLanguageContext();
    const { data, error, loading } = useFetchSingleMhData('armor/sets', String(id), language) as { data: ArmorSet | null; error: any; loading: boolean };

    console.log(data);

    if (!isLanguageLoaded) {
        return <p>Loading language...</p>;
    }

    return (
        <div className="flex flex-col items-center justify-center p-4 border-4">
            {loading && <p>Loading...</p>}
            {error && <p>Error fetching data.</p>}

            <div className="border-4 p-4">

                {data && data.name && (
                    <div className="flex flex-col items-start justify-start mb-4">
                        <h2 className="text-4xl text-left">{data.name}</h2>
                    </div>
                )}
                <Divider />
                {data && data.pieces && data.pieces.length > 0 && (
                    data.pieces.map((piece: ArmorPiece) => (
                        <div key={piece.id} className="flex flex-row items-start justify-start mb-4 gap-4">
                            <p className="text-left">{piece.name}</p>
                            <p className="text-left">{piece.description}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );

}

export default Page;