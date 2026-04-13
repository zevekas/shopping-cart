import { useState, useEffect } from 'react'

const url = 'https://api.escuelajs.co/api/v1/products'

export default function useData() {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(url);

                if(!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`)
                }

                const data = await response.json();
                setData(data);
            } catch(error) {
                console.error("Failed to fetch products: ", error)
                setError(error);
            } finally {
                setLoading(false)
            }
        }

        getData();
    }, [])

    return [loading, data, error];
}