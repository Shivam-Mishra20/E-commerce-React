import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const ProductCart = ({ product, addToCart }) => {



    return (
        <div>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-4'>



                {product.map((elm) => (
                    <div key={elm.id} className={'  hover:bg-gray-300 transition duration-300 ease-in-out opacity-75         hover:opacity-100  rounded-[8px]   hover:shadow-black hover:transform-gpud       shadow-md  shadow-black  $hover:filter-2xl  border-black min-w-[auto] w-[100%] h-auto p-2 text-center flex items-center justify-center flex-col'}>
                        <div>


                            <Link to={`/product/${elm.id}`}>
                                <img src={elm.images[0]} alt="" className=' max-w-[200px] w-[100%]   shadow-sm     shadow-black  object-contain mx-auto  rounded-xl' />
                            </Link>
                        </div>

                        <h4 className=' text-xl shadow-2xl     shadow-black  text-purple-800'>{elm.title}</h4>
                        <p className=' text-2xl font-thin'>$ {elm.price}</p>
                        <div className='  '>
                            <div className=' flex items-center   justify-between'>
                                <h4 className=' text-xl font-serif font-extrabold'>{elm.category}</h4>
                                <h2 className='  text-xl font-extrabold'>{elm.brand}</h2>

                            </div>
                            <div>
                                <h2 className=' my-2'>{Math.round(elm.rating) == 4 ? "🌟🌟🌟🌟" : "🌟🌟🌟🌟🌟"} </h2>
                                <p className=' text-[10px]  font-medium   '>{elm.description}</p>

                            </div>


                        </div>
                        <Link to='/cart'>

                            <button className=' bg-blue-400 text-white py-2 px-4 my-2  rounded-lg ' onClick={() => addToCart(elm)} >Add TO cart</button>
                        </Link>

                    </div>
                ))}




            </div>






        </div>
    )
}

export default ProductCart
