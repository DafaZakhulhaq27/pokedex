import React from 'react'
import { Badge, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { DETAIL } from '../../navigation/routesName'
import './pokemonItem.css'

const PokemonItem = ({data,lastItem, ...props}) => {
  return (
    <Link to={DETAIL}>
        <Card className="m-2 pokemon-item" ref={lastItem} {...props}>
            <Card.Img variant="top" src={data.sprites.front_default} />
            <Card.Body>
            <Card.Title>{data.name}</Card.Title>
                {
                    data.types.map((detailType,indexType) => (
                        <Badge className="me-2" key={indexType} bg="primary">{detailType.type.name}</Badge>
                    ))
                }
            </Card.Body>
        </Card>       
    </Link>
  )
}

export default PokemonItem