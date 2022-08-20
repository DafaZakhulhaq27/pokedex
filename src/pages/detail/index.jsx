import React, { useEffect } from 'react'
import { Badge, Card, Col, Image, ProgressBar, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PokemonThumbnail } from '../../components';
import { HOME } from '../../navigation/routesName';

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const detailPokemon = location.state.data;

  useEffect(() => {
    window.scrollTo(0,0)
    if(!detailPokemon){
      navigate(HOME)
    }
  },[detailPokemon])

  return (
    <div className="mt-4 d-flex flex-column align-items-center">
      <div className="text-center cursor-pointer"> 
        <Link to={HOME}>
          Kembali ke Home         
        </Link>
      </div>
      <h1 className="text-center">{detailPokemon.name}</h1>
      <div className="d-flex flex-wrap justify-content-center mt-5">
        <PokemonThumbnail image={detailPokemon.sprites.back_default} />      
        <PokemonThumbnail image={detailPokemon.sprites.back_female} />          
        <PokemonThumbnail image={detailPokemon.sprites.back_shiny} />          
        <PokemonThumbnail image={detailPokemon.sprites.back_shiny_female} />          
        <PokemonThumbnail image={detailPokemon.sprites.front_default} />          
        <PokemonThumbnail image={detailPokemon.sprites.front_female} />          
        <PokemonThumbnail image={detailPokemon.sprites.front_shiny} />          
      </div>
      <Row className="my-4 w-100">
        <Col lg="3" md="6" sm="12">
          <h5>Type</h5>
          {
              detailPokemon.types.map((data,index) => (
                  <Badge className="me-2" key={index} bg="primary">{data.type.name}</Badge>
              ))
          }
         <h5 className="mt-3">Abilities</h5>
          {
              detailPokemon.abilities.map((data,index) => (
                  <Badge className="me-2" key={index} bg="danger">{data.ability.name}</Badge>
              ))
          }          
        </Col>
        <Col lg="3" md="6" sm="12">
          <h5>Movement</h5>
          {
              detailPokemon.moves.map((data,index) => (
                  <Badge className="me-2" key={index} bg="warning">{data.move.name}</Badge>
              ))
          }
        </Col>
        <Col lg="2" md="6" sm="12">
          <h5>height</h5>
            <Badge className="me-2" bg="secondary">{detailPokemon.height}</Badge>
          <h5 className="mt-3">species</h5>
            <Badge className="me-2" bg="secondary">{detailPokemon.species.name}</Badge>
        </Col>
        <Col md="4" sm="12">
          <h5>Stats</h5>
          {
            detailPokemon.stats.map((data,index) => (
              <div key={index} className="mb-3">
                <span>{data.stat.name} ( {data.base_stat} ) </span>
                <ProgressBar className="mt-1" now={data.base_stat} />
              </div>
            ))
          }
        </Col>
      </Row>
    </div>
  )
}

export default Detail