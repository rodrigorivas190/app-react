import './ItemDetail.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({ id, titulo, precio, descripcion, imagen, genero }) => {

  const navigete = useNavigate()

  const volverHaciaAtras = () => {
    navigete(-1) 
  }
  return (
    <div className='item'>
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          {/* <Card.Title>{id}</Card.Title> */}
          <Card.Title>{titulo}</Card.Title>
          <Card.Title>{precio}</Card.Title>
          <Card.Title>{descripcion}</Card.Title>
          <Card.Title>Categoria: {genero}</Card.Title>
          <ItemCount />
          <Button variant="primary">Agregar al carrito</Button>
        </Card.Body>
        <Button   onClick={volverHaciaAtras} variant="primary">Volver a Inicio</Button>
      </Card>
      
    </div>
  )
}