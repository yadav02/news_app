import { useState } from "react";


export default (apiFunc) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const request = async (...args) => {
        setIsLoading(true)
        try {
            const result = await apiFunc(...args);
            setData(result.data);
        } catch (err) {
            setError(err.message || "Unexpected Error!")

        } finally {
            setIsLoading(false)
        }

    }

    return {
        data,
        error,
        isLoading,
        request
    }
}