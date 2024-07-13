import React from 'react';
import './Cart.css';
import CartItem from "../Components/CartItem";

const Cart = () => {
  return (
    <div className='cartscreen'>
      <div className="left-side">
        <h1>Shopping Cart</h1>
        <CartItem />
        <CartItem /> {/* Add more CartItem components as needed */}
      </div>
      <div className="right-side">
        <div className="cart-info">
          <p>Subtotal (0) items</p>
          <p>$499.99</p>
        </div>
        <div>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
