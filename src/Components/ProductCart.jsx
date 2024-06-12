import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './Redux/Cartslice';
 

const ProductCart = ({ product }) => {
    const cartnew = useSelector(state => state.cart.cartItems);

    const dispatch = useDispatch();
    const darkmode = useSelector((state) => state.darkMode)
    const handleAddToCart = item => {
        dispatch(addToCart(item));
        localStorage.setItem('cart', JSON.stringify([...cartnew, item]));
    };



    return (
        <div>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-4'>



                {product.map((elm) => (
                    <div key={elm.id} className={`   ${!darkmode &&'hover:bg-black'} hover:bg-gray-500  transition duration-300 ease-in-out           hover:opacity-100  rounded-[8px]   hover:shadow-black hover:transform-gpud       shadow-md  shadow-black  $hover:filter-2xl  border-black min-w-[auto] w-[100%] h-[auto] p-2 text-center flex items-center justify-center flex-col`}>
                        <div>


                            <Link to={`/product/${elm.id}`}>
                                <img src={elm.images[0]} alt="" className=' max-w-[180px] max-h-[200px]   w-[100%]   shadow-sm     shadow-black  object-contain mx-auto  rounded-xl' />
                            </Link>
                        </div>




                        <h4 className=' text-xl    font-ligth font-mono text-purple-800'>{elm.title}</h4>
                        <p className=' text-2xl font-thin'>$ {elm.price}</p>
                        <div className= {`${darkmode ? " hover:text-violet-600":"  text-gray-300  "} text-xl`}>
                            <div className=' flex items-center   justify-between'>
                                <h4 className=' text-xl font-serif font-extrabold'>{elm.category}</h4>
                                <h2 className='  text-xl font-extrabold'>{elm.brand}</h2>

                            </div>
                            <div className=' my-2'>
                                <h2 className=' '>Star Rating{Math.round(elm.rating) == 4 ? "🌟🌟🌟🌟" : "🌟🌟🌟🌟🌟"} </h2>
                                <p className=' text-[13px]  italic  line-clamp-2  font-medium   '>{elm.description}</p>

                            </div>


                        </div>
                        <Link to='/cart'>

                            <button className=' bg-blue-400 text-white py-2 px-4 my-2  rounded-lg ' onClick={() => handleAddToCart(elm)} >Add TO cart</button>
                        </Link>

                    </div>
                ))}




            </div>






        </div>
    )
}

export default ProductCart
