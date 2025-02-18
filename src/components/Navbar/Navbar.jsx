import CartWidget from "../CartWidget/CartWidget";
import './Navbar.css';




function Navbar() {
    return (
        <header>
            <nav className="nav-bar">
                <p>LOGO</p>
                <ul className='nav-bar-options'>
                    <li className='nav-bar-items'>Home</li>
                    <li className='nav-bar-items'>Producto</li>
                    <li className='nav-bar-items'>Contacto</li>
                </ul>
                <CartWidget />
            </nav >
        </header >
    );
};

export default Navbar;

