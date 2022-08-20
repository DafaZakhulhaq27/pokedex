import React from 'react'
import { Card } from 'react-bootstrap'

const PokemonThumbnail = ({image}) => {
  return (
    <>
      {
        image ? 
        <Card className="m-2 pokemon-item">
            <Card.Img variant="top" src={image} />
        </Card> : null
      }    
    </>
  )
}

export default PokemonThumbnail