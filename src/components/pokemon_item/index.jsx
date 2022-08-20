import React from 'react'
import { Badge, Card } from 'react-bootstrap'

const PokemonItem = ({data,lastItem, ...props}) => {
  return (
    <Card className="m-2"  ref={lastItem} {...props}>
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
  )
}

export default PokemonItem