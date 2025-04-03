'use client';

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
                        <div key={set.id}>
                            <h2>{set.name}</h2>
                            {set.pieces && set.pieces.length > 0 && (
                                <ul>
                                    {set.pieces.map((piece: any) => (
                                        <li key={piece.id}>{piece.name}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Page;
