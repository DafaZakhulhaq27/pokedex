import React from 'react'
import Filter from './filterTypes'
import usePokemon from './usePokemon'
import './home.css'
import { Badge, Card } from 'react-bootstrap'
import { PokemonItem } from '../../components'

const Home = () => {
    const {
        loading,
        error,
        isFilter,
        currentPokemonData,
        nextPage,
        lastPokemon,
        handleSearch,
        handleType,
    } = usePokemon()

    return (
        <div>   
            <Filter handleSearch={handleSearch} handleType={handleType} />    
            <div className="d-flex flex-wrap justify-content-center">
            {
                currentPokemonData.length ?
                currentPokemonData.map((data,index) => {
                    if(currentPokemonData.length === index + 1){
                        return <PokemonItem  
                                    data={data} 
                                    key={index} 
                                    lastItem={lastPokemon} 
                                    style={{ width: '18rem' }} />  ;
                    }else{
                        return   <PokemonItem  
                                    data={data} 
                                    key={index} 
                                    style={{ width: '18rem' }} />  ;
                    }
                }) :
                isFilter ? 
                <div ref={lastPokemon}> {nextPage ? '' : 'Tidak Ada Data'} </div> : null
            }
            </div>   
            {
                loading ? 
                <p>Loading...</p> : null
            }
            {
                error ? 
                <p>Terjadi Gangguan</p> : null
            }
        </div>
    )
}

export default Home