import React from 'react'
import { Badge, Card, Col, Form, Row } from 'react-bootstrap'
import { Loading } from '../../../components'
import UseTypes from '../hooks/useTypes'

const Filter = ({handleSearch,handleType}) => {
    const {
        loading,
        error,
        data, 
        handleSelect,
        isAllowSelected
    } = UseTypes('https://pokeapi.co/api/v2/type')

    return (
    <Form className="my-4 justify-content-center type-container w-100">
        <div className="d-flex justify-content-center">
        <Form.Group className="mb-3 col-12 col-md-6">
            <Form.Control 
                onChange={handleSearch} 
                type="search" 
                name="search" 
                placeholder="Search Pokemon" />
        </Form.Group>
        </div>
        <Loading loading={loading}>
                <div className="d-flex flex-wrap justify-content-center">
                {
                    data.map((data,index) => (
                        <Badge 
                            onClick={() => {
                                if(isAllowSelected() || data.isSelected){
                                    handleSelect(index,data.isSelected)  
                                    handleType(data,data.isSelected)  
                                }
                            }} 
                            className={`m-1 cursor-pointer ${!isAllowSelected() && !data.isSelected ? 'opacity-50' : ''}`}
                            key={index} 
                            bg={data.isSelected ? 'success' : 'secondary'}>{data.name}</Badge>
                    ))
                }
            </div>                
        </Loading>
    </Form>  
    )
}

export default Filter