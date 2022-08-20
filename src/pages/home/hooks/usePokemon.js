import axios from 'axios'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const usePokemon = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [basePokemonData, setBasePokemonData] = useState([])
    const [nextPage, setNextPage] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
    const [filter, setFilter] = useState({
        search : '',
        type : [],
    })

    useEffect(() => {
        fetchData();   
    },[filter])

    // fetch data pokemon
    const fetchData = useCallback(async () => {
        if(nextPage){
            setLoading(true)
            setError(false)
            try {
                const response = await axios.get(nextPage);
                setNextPage(response.data.next);
                response.data.results.map(async (data) => {
                    const responseDetail = await axios.get(data.url);
                    setBasePokemonData( currentList => [...currentList, responseDetail.data])
                })
            } catch (error) {
                setError(true)
            } finally {
                setLoading(false)
            }
        }
    },[loading,error]) 

    // infine scroll
    const observer = useRef()
    const lastPokemon = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
          if (entries[0].isIntersecting && nextPage) {
            fetchData();
          }
        })
        if (node) observer.current.observe(node)
    }, [loading])

    // filter
    const handleSearch = useCallback(e => {
        const {name,value} = e.target
        setFilter({
            ...filter,
            search : value
        })    
    },[filter]) 
    const handleType = useCallback((data,isSelected) => {
        if(!isSelected){
            setFilter({
                ...filter,
                type : [...filter.type, data]
            })      
        }else{
            let dataTemp = [];

            filter.type.map((detail) => {
                if(detail.name !== data.name){
                    dataTemp.push(data)
                }
            })

            setFilter({
                ...filter,
                type : dataTemp
            })    
        }
    },[filter]) 

    const currentPokemonData = useMemo(() => {
        const searchFilter =  basePokemonData.filter((data) => {
            return data.name.includes(filter.search.toLowerCase());
        })
        const typeFilter = filter.type.length ? searchFilter.filter((data) => {
            for(let i = 0; i < data.types.length ; i++){
                for(let j = 0; j < filter.type.length ; j++){
                    return data.types[i].type.name === filter.type[j].name
                }                
            }
        }) : searchFilter ;

        return typeFilter ;
    },[basePokemonData,filter,nextPage])

    const isFilter = useMemo(() => {
        return filter.search || filter.type.length ;
    },[filter])

    return {
        loading,
        error,
        isFilter,
        currentPokemonData,
        lastPokemon,
        nextPage,
        handleSearch,
        handleType
    }
}

export default usePokemon



