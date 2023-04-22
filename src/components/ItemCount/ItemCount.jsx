import React, {useState} from "react";
import './ItemCount.css'

export const ItemCount = () =>{

    const [counter, setCounter] = useState(1)

    const sumar = () =>{
        setCounter( counter +1 )
    }
    const restar = () =>{
        if(counter >0){
            setCounter(counter-1)
        }
    }
    



    return(
        <>
        <h4> {counter}</h4>
        <div>
            <button onClick={restar}>➖</button>
            <button onClick={sumar}>➕</button>
           
         
        </div>
        </>
    )
}
export default ItemCount