import CartWidget from "../CartWidget/CartWidget"
import  "./NavBar.css";

const Navbar = () => {
    return (
        <>

        <nav className="NavBar d-flex justify-content-between bg-light ">
            <h3>
               Lea Liberias
            </h3>
            <div className='navBar--height'>
                <button type="button" className="btn btn-secondary btn-lg m-2">Romance</button>
                <button type="button" className="btn btn-secondary btn-lg m-2">Ficcion</button>
                <button type="button" className="btn btn-secondary btn-lg m-2">Terror</button>
                <button type="button" className="btn btn-secondary btn-lg m-2">Fantasia</button>
            </div>
            
            <CartWidget />


        </nav>

        </>
    )
}
export default Navbar