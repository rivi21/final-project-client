import { useEffect } from 'react';
import { useCredentials } from './useCredentials';

function useFetch(url, setState) {
    const { token } = useCredentials()
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
            .then(response => response.json())
            .then(data => setState(data));
    }, []);
}
export { useFetch };