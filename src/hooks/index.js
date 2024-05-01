import { useState, useEffect } from 'react'

export function useFetch(url) {
    const [data, setData] = useState({})
    const [isLoading, setLoading ] = useState(true)
    //rajouter l'erreur

    useEffect(() => {
        if (!url) return

        async function fetchData() {
            const response = await fetch(url)
            const data = await response.json()
            setData(data)
            setLoading(false)
        }
        setLoading(true)
        fetchData()
    }, [url])
    return { isLoading, data }
}