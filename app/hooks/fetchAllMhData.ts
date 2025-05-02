'use client';
import { useState, useEffect } from "react";

const API_URL = "https://wilds.mhdb.io/";


const useFetchAllMhData = <T>(endpoint: string, language?: string) => {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!language) return; // Ensure language is defined before making the fetch call
        if(!endpoint || endpoint === "") return; // Ensure endpoint is defined before making the fetch call

        console.log(`Fetching from: ${API_URL}${language}/${endpoint}`);
        fetch(`${API_URL}${language}/${endpoint}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            setData(data);
            setLoading(false);
        })
        .catch((error: any) => {
            setError(error);
            setLoading(false);
        });
    }, [endpoint, language]);

    return { data, loading, error };
}

export default useFetchAllMhData;