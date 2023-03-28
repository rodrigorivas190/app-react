import cart from './Assets/cart.svg'

const CartWidget = () => {
    return (
        <div> 
           <img src={cart} alt= "cart-widget " />
           
           <span className=" position-relative badge rounded-pill bg-secondary ">0</span>
        </div>
        
    )
}
export default CartWidget