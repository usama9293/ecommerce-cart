import './Cart.css'
import CartItem from "../Components/CartItem"
import React from 'react'

export default function Cart() {
  return (
    <div className='cartscreen'>
      <div className="left-side">
        <h1>Shopping Cart</h1>
        <CartItem/>
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
  )
}
