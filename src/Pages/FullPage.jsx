import React from 'react'
import Home from '../Components/Home'
import ProductList from '../Components/ProductList'
import Testominial from '../Components/Testominial'

import Contactform from '../Components/Contactform'
import Footer from '../Components/Footer'
import MoreProducts from '../Components/MoreProducts'
import { useSelector,   } from 'react-redux';
 
  



const FullPage = () => {
  const darkmode = useSelector((state) => state.darkmode)
 
  return (
    <div className={`${darkmode ? "bg-black text-white" : ""}`}>
      <Home   />

     
      <MoreProducts   />
      <Testominial />
      <ProductList />
      <Contactform />


      <Footer   />



    </div>
  )
}

export default FullPage
