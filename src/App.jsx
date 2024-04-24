import { useState, useEffect } from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
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
import LoginandSignpage from './Pages/LoginandSignpage';
import { fetchProducts } from './Components/Redux/Product'
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch(); // Gets the dispatch function

  //fetch product on refresh
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  //get signup data form firebase using auth

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

  return (

    <Router>
      <Header userName={userName} />

      <Routes>
        <Route path='/' element={<LoginandSignpage />} />
        <Route path="/page" exact element={<FullPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/online" exact element={<Testominial />} />
        <Route path="/about" exact element={<Contactform />} />
        <Route path="/product" element={<Productsection />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path='/moreproduct' element={<MoreProducts />} />
        <Route path='/signup' element={< Signup />} />
        <Route path='/login' element={< Login />} />


      </Routes>

    </Router>

  )
}

export default App
