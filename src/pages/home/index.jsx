import React from 'react'
import Filter from './view/filterTypes'
import usePokemon from './hooks/usePokemon'
import './home.css'
import { Error, Loading, PokemonItem, ScrollOnTop } from '../../components'
import { Image } from 'react-bootstrap'
import UseScroll from './hooks/useScroll'

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

    const {
        show,
    } = UseScroll()

    return (
        <>
            <div className="d-flex flex-column align-items-center">  
                <Image 
                    className="col-12 col-md-5"
                    src="./assets/pokemon_logo.png" 
                    fluid />
                <Filter handleSearch={handleSearch} handleType={handleType} />    
                <div className="d-flex flex-wrap justify-content-center">
                {
                    currentPokemonData.length ?
                    currentPokemonData.map((data,index) => {
                        if(currentPokemonData.length === index + 1){
                            return <PokemonItem  
                                        data={data} 
                                        key={index} 
                                        lastItem={lastPokemon} />  ;
                        }else{
                            return   <PokemonItem  
                                        data={data} 
                                        key={index} />  ;
                        }
                    }) :
                    isFilter  ? 
                    <p className="w-100 text-center" ref={lastPokemon}> {nextPage ? '' : 'Tidak Ada Data' } </p> : null
                }
                <Loading loading={loading || nextPage} /> 
                </div> 
                <Error error={error} />
            </div>    
            {
                show ? 
                <ScrollOnTop /> : null
            }    
        </>
    )
}

export default Home