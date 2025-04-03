import { useState, useEffect } from "react";

const API_URL = "https://wilds.mhdb.io/";

const useFetchMhData = (type: string, language?: string) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!language) return; // Ensure language is defined before making the fetch call
        
        console.log(`Fetching from: ${API_URL}${language}/${type}`);
        fetch(`${API_URL}${language}/${type}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            setData(data);
            setLoading(false);
        })
        .catch((error: any) => {
            setError(error);
            setLoading(false);
        });
    }, [type, language]);

    return { data, loading, error };
}

export default useFetchMhData;