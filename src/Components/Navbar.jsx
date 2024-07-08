import  { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='navbar'>
            {/* logo */}
            <div className='navbar-logo'>
                <h1>Shopping cart</h1>
            </div>

            {/* links */}
            <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                <ul>
                    <li>
                        <Link to={'/cart'} className='cart-link'>
                            <FaCartShopping />
                            <span>cart</span>
                            <span className='cartLogo'>0</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/shop'}>shop</Link>
                    </li>
                </ul>
            </div>

            {/* menu */}
            <div className='menu' onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Navbar;
