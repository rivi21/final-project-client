import { useEffect } from 'react';
import useToken from './useToken';

function useFetch(url, setState) {
    const { token } = useToken()
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