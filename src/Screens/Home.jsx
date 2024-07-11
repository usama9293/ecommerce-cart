import './home.css'
import Product from '../Components/Product'

import React from 'react'

function Home() {
  return (
    <div className='homescreen'>

      <h2 className='home-title'>Latest Products</h2>

      <div className="home-products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />

      </div>

    </div>
  )
}

export default Home