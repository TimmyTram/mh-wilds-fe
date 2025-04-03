'use client';

import { useLanguageContext } from "@/app/Context/LanguageProvider";
import useFetchMhData from "@/app/hooks/fetchAllMhData";

const Page = () => {
    const { language, isLanguageLoaded } = useLanguageContext();
    const { data, loading, error } = useFetchMhData("monsters", isLanguageLoaded ? language : undefined);

    if (!isLanguageLoaded) {
        return <p>Loading language...</p>;
    }

    console.log(data)

    return (
        <div>
            <h1>Monsters</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error fetching data.</p>}
            {data && data.length > 0 && (
                <div>
                    {data.map((monster: any) => (
                        <div key={monster.id}>
                            <h2>{monster.name}</h2>
                            <p>{monster.description}</p>
                        </div>
                    ))}
                </div>
            )}
            {data && data.length === 0 && <p>No monsters found API must be down.</p>}
        </div>
    );
}

export default Page;