import React from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import UseTypes from './useTypes'

const Filter = ({handleSearch,handleType}) => {
    const {
        loading,
        error,
        data, 
        handleSelect,
        isAllowSelected
    } = UseTypes('https://pokeapi.co/api/v2/type')

    return (
    <Form className="my-4 justify-content-center type-container">
        <div className="d-flex justify-content-center">
        <Form.Group className="mb-3 col-12 col-md-6">
            <Form.Control onChange={handleSearch} type="search" name="search" placeholder="name@example.com" />
        </Form.Group>
        </div>
        {/* {
            loading ? 
            <p>Loading...</p> :
            <div className="d-flex flex-wrap">
            {
                data.map((data,index) => (
                    <Card 
                        onClick={() => {
                            if(isAllowSelected() || data.isSelected){
                                handleSelect(index,data.isSelected)  
                                handleType(data,data.isSelected)  
                            }
                        }} 
                        bg={data.isSelected ? 'success' : 'light'} 
                        key={index} 
                        className={`m-2 type-item cursor-pointer ${!isAllowSelected() && !data.isSelected ? 'opacity-50' : ''} `}>
                        <Card.Body>{data.name}</Card.Body>
                    </Card>
                ))
            }
            </div>
        } */}
    </Form>  
    )
}

export default Filter