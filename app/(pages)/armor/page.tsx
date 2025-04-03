'use client';

import ArmorDisplay from "@/app/components/Armor/ArmorDisplay";
import { useLanguageContext } from "@/app/Context/LanguageProvider";
import useFetchMhData from "@/app/hooks/fetchMhData";

const Page = () => {
    const { language, isLanguageLoaded } = useLanguageContext();
    const { data, loading, error } = useFetchMhData("armor/sets", isLanguageLoaded ? language : undefined);

    if (!isLanguageLoaded) {
        return <p>Loading language...</p>;
    }

    return (
        <div>
            <h1>Armor</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error fetching data.</p>}
            {data && data.length > 0 && (
                <div>
                    {data.map((set: any) => (
                        <ArmorDisplay key={set.id} armorSet={set} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Page;
