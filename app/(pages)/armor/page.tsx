'use client';

import useFetchMhData from "@/app/hooks/fetchMhData";

const Page = () => {
    
    const { data, loading, error } = useFetchMhData("armor/sets");


    return (
        <div>
            <h1>Armor</h1>
            {loading && <p>Loading...</p>}
            {data && data.length > 0 && (
                <div>
                    {data.map((set: any) => (
                        <div key={set.id}>
                            <h2>{set.name}</h2>
                            {set.pieces && set.pieces.length > 0 && (
                                <ul>
                                    {set.pieces.map((piece: any) => (
                                        <li key={piece.id}>
                                            {piece.name}
                                        </li>
                                    ))}
                                </ul>
                            )}

                        </div>
                    ))}
                </div>
            )}

        </div>
    );
}

export default Page;