import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (

        <nav>
            <h3>
               Lea Liberias 
            </h3>
            <div>
                <button>Romance</button>
                <button>Ficcion</button>
                <button>Terror</button>
                <button>Fantacia</button>
            </div>

            <CartWidget />


        </nav>
    )
}
export default Navbar