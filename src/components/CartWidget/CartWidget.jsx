import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import './CartWidget.css'

export const CartWidget = () => {
  return (
    <>
    <FaShoppingCart className="carrito"/>
    <span className=" position-relative badge rounded-pill bg-secondary ">0</span>
    </>
  )
}
