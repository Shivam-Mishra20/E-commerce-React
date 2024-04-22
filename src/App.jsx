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
 



const api = 'https://dummyjson.com/products'

function App() {
 

  //1 .store products form get an api
  const [products, setProducts] = useState([]);
  // console.log(products)

  //2.for dark modde and light mode
  const [dark, setdark] = useState(false)

  const toggleMode = () => {
    setdark(!dark)
     
    document.body.classList.toggle('dark-mode'); //
  }

  //for cartCoun increacset
  const [cartCount, setCount] = useState(0)

  //mange cartt state
  const [cartnew, setCartnew] = useState([])

  const addToCart = (item) => {
    const updatedCart = [...cartnew, item];
    setCartnew(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    setCount(updatedCart.length)


  };

  //for update one product qty and price specific
  const handleChange = (productId, event) => {
    const newQuantity = parseInt(event.target.value);
    const updatedCart = cartnew.map((product) =>
      product.id === productId ? { ...product, quantity: newQuantity, price: newQuantity * product.price } : product
    );
    setCartnew(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart));

  };

  //for remove cart
  const removeFromCart = (id) => {
    const updatedCart = cartnew.filter((item) => item.id !== id);
    setCartnew(updatedCart);
    setCount(updatedCart.length);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  //Remove all cart

  const RemoveAll = () => {
    setCartnew([])
    setCount(0)
  }

  //total PRice
  const totalPrice = cartnew.reduce((acc, item) => acc + item.price, 0);


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

  //for add and use local storge for save cart data

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCartnew(storedCart);
      setCount(storedCart.length);
    }
  }, []);

  //get product form api

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setProducts(data.products);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData()
  }, [])

  //Routing react

  return (

    <Router>
      <Header cartcount={cartCount} dark={dark} toggleMode={toggleMode} userName={userName} />
     
      <Routes>
        <Route path='/' element={<LoginandSignpage />} />
        <Route path="/page" exact element={<FullPage addToCart={addToCart} products={products} dark={dark} />} />
        <Route path="/cart" element={<Cart cartnew={cartnew} handleChange={handleChange}
          remove={removeFromCart} totalPrice={totalPrice}
          removeAll={RemoveAll} cartCount={cartCount} />} />

        <Route path="/online" exact element={<Testominial />} />
        <Route path="/about" exact element={<Contactform />} />
        <Route path="/product" element={<Productsection products={products} addToCart={addToCart} dark={dark} />} />
        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} products={products} />} />


        <Route path='/moreproduct' element={<MoreProducts products={products} dark={dark} />} />
        <Route path='/signup' element={< Signup />} />
        <Route path='/login' element={< Login />} />
        

      </Routes>
    </Router>

  )
}

export default App
