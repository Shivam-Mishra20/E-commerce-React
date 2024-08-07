import React, { useState, useEffect } from 'react';
import './App.css'

import { HashRouter as Router, Route, Routes, HashRouter, } from 'react-router-dom';
import Header from './Components/Header'
import Cart from './Components/Cart';
import FullPage from './Pages/FullPage';
import ProductDetail from './Components/ProductDetail';
import Testominial from './Components/Testominial';
import Contactform from './Components/Contactform';
import MoreProducts from './Components/MoreProducts';
import Productsection from './Pages/Productsection';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, app } from './Firebase/Firebase';

import { fetchProducts } from './Components/Redux/Product'
import { useSelector, useDispatch } from 'react-redux';





function App() {



  const dispatch = useDispatch(); // Gets the dispatch function

  //fetch product on refresh
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  //get usename data form firebase using auth

  const [userName, setuserName] = useState('')

  useEffect(() => {

    auth.onAuthStateChanged((user) => {
      if (user) {

        setuserName(user.displayName);
      }
      else {

        setuserName('')
      }
    })


  }, [userName])

  //Routing react and in this project we have use redux toolkit for mange state globally and this app so many states beacause its mange complicated then we use redux toolkit...
  //using hash routing because browser does not support browserrouting then we use hash routing and  configure vite config file
  return (

    <HashRouter>
      <Header userName={userName} />
      <Routes>
        <Route path='/' element={userName ? <FullPage /> : <Login />} />
        <Route path="/page" exact element={<FullPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/online" element={<Testominial />} />
        <Route path="/about" element={<Contactform />} />
        <Route path="/product" element={userName ? <Productsection /> : <>
          <MoreProducts />
          <Testominial />
        </>} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path='/moreproduct' element={<MoreProducts />} />
        <Route path='/signup' element={< Signup />} />
        <Route path="/login" element={userName ? <FullPage /> : <Login />} />
      </Routes>

    </HashRouter>

  )
}

export default App
