import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch the data. GET request by default.
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                // Check if the response status is not 200 (OK). If not, throw an error.
                if (!response.ok) {
                    throw new Error('An error has occurred: ' + response.status);
                }

                // Parse the response body as JSON.
                const result = await response.json();

                // Check if the response body contains an error message. If so, throw an error.
                if (result.error) {
                    throw new Error('An error has occurred: ' + result.error);
                }

                // If all is well, update the state with the result.
                setData(result);
                setIsLoading(false);
            } catch (err) {
                // Update the state with the error message.
                setError(err as Error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, isLoading, error };
};

export default useFetch;
