import React from 'react'
import './CartItem.css'
import { Link } from 'react-router-dom'
import { FaRegTrashAlt } from "react-icons/fa";
const CartItem = () => {
    return (
        <div className='cartitems'>

            <div className="cart-image">
                <img src="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" alt="product name" />
            </div>
            <Link to={`/product/${111}`} className="cart-name">
                <p>Product 1</p>
            </Link>
            <p className="cart-price">$499.99</p>
            <select className="cart-select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>

            <button className='del-item'>
                <FaRegTrashAlt />
            </button>
        </div>
    )
}

export default CartItem
