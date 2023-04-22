import React, { useEffect, useState } from 'react';
import { pedirProductos } from '../../helpers/pedirProductos';
import { ItemList } from '../ItemList/ItemList';
import './itenlistcontainer.css';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';

export const ItemListContainer = ({greating}) => {

  const [items, setItems] = useState([])

  const [loading, setLoading] = useState(false)

  const {categoryId} = useParams()


  useEffect(() =>{
    setLoading(true)
    pedirProductos()
      .then((res) =>{
        if(categoryId){
          setItems(res.filter(prod => prod.genero === categoryId)  )
        }else{
          setItems(res)
        }
      })
      .catch((error) => console.log(error))
      .finally(() =>{setLoading(false)})
  }, [categoryId])




  return (
    <>
    {/* Nuestro componente arranca con el loading en "true" y cuando resulve, imprime en pantalla todo nuestro componente ItemList (donde mapeamos cada uno de los productos) */}
      {
        loading
        ?<div className='spinner'><Loader/></div>
        : <ItemList productos={items}/>
      }
    </>
  )}
