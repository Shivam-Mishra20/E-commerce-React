import React from 'react'
import Testominial from '../Components/Testominial'
import ProductList from '../Components/ProductList'
import MoreProducts from '../Components/MoreProducts'

const Productsection = ({products,addToCart,dark}) => {
  return (
    <>
   
      <MoreProducts products={products}  dark={dark}/>
     <ProductList addToCart={addToCart} products={products}  />
     </>
  )
}

export default Productsection