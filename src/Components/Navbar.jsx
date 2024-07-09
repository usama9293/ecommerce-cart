import  { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import PropTypes from 'prop-types';
function Navbar({click}) {
    

   
    return (
        <div className='navbar'>
            {/* logo */}
            <div className='navbar-logo'>
                <h1>Shopping cart</h1>
            </div>

            {/* links */}
            <div className={`navbar-links`}>
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
            <div className='menu' onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

Navbar.propTypes = {
    click: PropTypes.func.isRequired,

  };

export default Navbar;
