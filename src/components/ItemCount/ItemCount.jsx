import "./ItemCount.css";
import {RxPlus} from "react-icons/rx";
import {RiSubtractFill} from "react-icons/ri";
import Swal from "sweetalert2";

export const ItemCount = ({ max, cantidad, modify }) => {
  const sumar = () => {
    if (cantidad < max) {
      modify(cantidad + 1);
    }
  };
  const restar = () => {
    if (cantidad > 0) {
      modify(cantidad - 1);
    }else
    Swal.fire({
      icon: "error",
      title: "La cantidad no puede ser menor a cero",
      showConfirmButton: false,
      timer: 1000,
    });
    
  }
  

  // return (
  //   <>
  //     <h4> {cantidad}</h4>
  //     <div>
  //       <button onClick={restar}>➖</button>

  //       <button onClick={sumar}>➕</button>
  //     </div>
  //   </>
  // );
  return (
    <>        
    <div className='itemcount-btn'>
        <div className='itemcount-btn-left'>
            <button onClick = {restar}><h3><RiSubtractFill/></h3></button>
            <h4>{cantidad}</h4>
            <button onClick = {sumar}><h3><RxPlus /></h3></button>
        </div>
       {/*  <div className='itemcount-btn-right'>
            <button onClick ={addOn}>Agregar al carrito</button>
        </div> */}
    </div>
    </>
);



};
