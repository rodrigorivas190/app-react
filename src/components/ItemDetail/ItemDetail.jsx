import "./ItemDetail.css";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export const ItemDetail = ({
  id,
  name,
  titulo,
  precio,
  descripcion,
  imagen,
  genero,
  stock,
}) => {
  const navigete = useNavigate();

  const volverHaciaAtras = () => {
    navigete(-1);
  };

  const { addToCart } = useContext(CartContext);

  // __________________________________

  const [counter, setCounter] = useState(0);

  const sumarAlCarrito = () => {
    const newItem = {
      id,
      name,
      titulo,
      precio,
      descripcion,
      imagen,
      genero,
      counter,
    };
    console.log(newItem);
    addToCart(newItem);
    Swal.fire({
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  return (
    <div className="item">
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          {/* <Card.Title>{id}</Card.Title> */}
          <Card.Title>{titulo}</Card.Title>
          <Card.Title>{precio}</Card.Title>
          <Card.Title>{descripcion}</Card.Title>
          <Card.Title>Categoria: {genero}</Card.Title>
          <ItemCount max={stock} modify={setCounter} cantidad={counter} />
          <Button onClick={sumarAlCarrito}>Agregar al carrito</Button>
        </Card.Body>
        <Link to="/cart" className="btn btn-info">
          Ir al carrito
        </Link>
        <Button onClick={volverHaciaAtras} variant="primary">
          Volver a Inicio
        </Button>
      </Card>
    </div>
  );
};
