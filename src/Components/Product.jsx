import { Link } from 'react-router-dom'
import './Product.css'

import React from 'react'

export default function Product() {
  return (
    <div className='product'>

      <img src='https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80' alt='img' />
      <div className='product-info'>
        <p className='info_name'>Product 1</p>
        <p className='product-descrip'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur repudiandae voluptas sapiente distinctio ad maxime?
        </p>
        <p className='info_price'>400</p>
        <Link
          to={`/product/${1111}`} className='info_btn'>View</Link>
      </div>

    </div>
  )
}
