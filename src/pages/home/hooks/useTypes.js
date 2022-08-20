import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

const UseTypes = (url) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [data, setData] = useState([])
    const [isAllowSelect, setIsAllowSelect] = useState(true)

    useEffect(() => {
        fetchData();   
    },[])

    const isAllowSelected = useCallback(() => {
        let totalSelected = 0 ;

        data.map((detail) => {
            if(detail.isSelected){
                totalSelected++
            }
        })

        return totalSelected < 1
    },[data])

    const fetchData = useCallback(async () => {
        setLoading(true)
        setError(false)
        try {
            const response = await axios.get(url);
            setData(response.data.results)
        } catch (error) {
            setError(true)
        } finally {
            setLoading(false)
        }
    },[loading,error]) 

    const handleSelect = useCallback(async (index,isSelected) => {
        data[index] = {
            ...data[index],
            isSelected : !isSelected ? isAllowSelected() ? true : false : false,
        }    
    },[data]) 

    return {
        isAllowSelected,
        handleSelect,
        loading,
        error,
        data,
    }
}

export default UseTypes