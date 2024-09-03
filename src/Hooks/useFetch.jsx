import { useState, useEffect } from 'react'
import axios from 'axios';

export default function useFetch(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const response = await axios.get(url);
            console.log('[response]', response)
            if (response.status === 200) {
                setData(response.data);
            } else {
                setError('Failed to fetch data');
            }
            setLoading(false);
        })()

    }, [url])

    return [data, error, loading];
}
