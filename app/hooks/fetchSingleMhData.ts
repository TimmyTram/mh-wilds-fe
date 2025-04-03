'use client';
import { useState, useEffect } from "react";

const API_URL = "https://wilds.mhdb.io/";

const useFetchSingleMhData = (endpoint: string, id: string, language?: string) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!language) return; // Ensure language is defined before making the fetch call
        console.log(`Fetching from: ${API_URL}${language}/${endpoint}/${id}`);
        fetch(`${API_URL}${language}/${endpoint}/${id}`)
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
    }, [endpoint, id, language]);

    return { data, loading, error };
};

export default useFetchSingleMhData;