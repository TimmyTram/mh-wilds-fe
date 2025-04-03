import { useState, useEffect } from "react";

const API_URL = "https://wilds.mhdb.io/en/";

const useFetchMhData = (type: string) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${API_URL}${type}`)
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
    }, []);

    return { data, loading, error };
}

export default useFetchMhData;