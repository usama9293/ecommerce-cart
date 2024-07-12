import React from 'react'
import "./product.css"
function productScreen() {
    return (
        <div className='productscreen'>
            <div className="productscreen_left">
                <div className="left_img">
                    <img src='https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80' alt='product' />
                </div>
                <div className="left_info">

                    <p className="left_name">Product 1</p>
                    <p className='left_price'>Price: $499.99</p>
                    <p className='left_descp'>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur repudiandae voluptas sapiente distinctio ad maxime?</p>
                </div>
            </div>
            <div className="productscreen_right">

                <div className="right_info">
                    <p>
                        Price: <span>$499.99</span>
                    </p>
                    <p>
                        Status: <span>In Stock</span>
                    </p>
                    <p>
                        Qty
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </p>
                    <p>
                        <button type='button'>
                            Add to cart
                        </button>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default productScreen