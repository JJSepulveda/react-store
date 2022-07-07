import React, { useContext } from 'react'

import Product from './Product'
import AppContext from '../context/AppContext'

import "../styles/components/Products.css"

const Products = () => {
  const {state, addToCart} = useContext(AppContext);
  const { products } = state;

  // Se declaro una función anonima anidada para que cuando se llame
  // en el onclick solo se ejecute al presionar el boton
  const handleAddToCart = product => () => {
    addToCart(product)
    console.log("se agrego el producto", product)
  }

  return (
    <div className='Products'>
        <div className="Products-items">
            {products.map((product) => (
                <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
            ))}
        </div>
    </div>
  )
}

export default Products;
