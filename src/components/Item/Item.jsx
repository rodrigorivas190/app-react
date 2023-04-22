import React from 'react';
import './item.css'
import { Card , Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Item = ({ id, titulo, precio, imagen, genero }) => {
  return (
    <div className='item'>
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          {/* <Card.Title>{id}</Card.Title> */}
          <Card.Title>{titulo}</Card.Title>
          <Card.Title>Precio: ${precio}</Card.Title>
          <Card.Title>Categoria: {genero}</Card.Title>
          <Link to={`/detail/${id}`}>
            <Button variant="primary">Ver más detalles</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}