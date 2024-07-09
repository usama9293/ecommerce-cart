import React from 'react';
import PropTypes from 'prop-types';
import './sidedrawer.css';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
function SideDrawer({ show, click }) {
    const sidedrawerClass = ["sidedrawer"];
    if (show) {
        sidedrawerClass.push("show");
    }

    return (
        <div className={sidedrawerClass.join(" ")}>
            {/* Add any content for your side drawer here */}
            <ul className='side_links' onClick={click}>

                <li>
                    <Link to={"/cart"} >
                        <FaCartShopping />
                        <span>

                            Cart <span className='side_cart'>0</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to={"/"} >
                        shop
                    </Link>
                </li>
            </ul>
        </div>
    );
}

SideDrawer.propTypes = {
    show: PropTypes.bool.isRequired,
    click:PropTypes.func.isRequired

};

export default SideDrawer;
