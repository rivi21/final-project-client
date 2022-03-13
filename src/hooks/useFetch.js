import { useEffect } from 'react';

function useFetch(url, setState) {
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers:{
                'authorization': 'Bearer {token}',
            }
        })
            .then(response => response.json())
            .then(data => setState(data));
    }, []);
}
export {useFetch};