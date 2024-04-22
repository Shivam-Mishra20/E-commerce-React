import React from 'react'
import Home from '../Components/Home'
import ProductList from '../Components/ProductList'
import Testominial from '../Components/Testominial'

import Contactform from '../Components/Contactform'
import Footer from '../Components/Footer'
import MoreProducts from '../Components/MoreProducts'
 


const FullPage = ({ addToCart ,dark ,products }) => {
  return (
    <div className={`${dark?"bg-black text-white":""}`}>
      <Home dark={dark} />
      
      <Testominial />
      <MoreProducts products={products} dark={dark}/>
      <ProductList addToCart={addToCart} products={products} />
      <Contactform />
      
      
      <Footer dark={dark} />



    </div>
  )
}

export default FullPage
