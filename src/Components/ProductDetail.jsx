

// ProductDetail.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './Redux/Cartslice';


function ProductDetail({ }) {
    const dispatch =useDispatch()
    const products = useSelector((state) => state.products.products);
    const cartnew = useSelector(state => state.cart.cartItems);
    const handleAddToCart = item => {
        dispatch(addToCart(item));
        localStorage.setItem('cart', JSON.stringify([...cartnew, item]));
    };




    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));//find only those id in productdata
    console.log(product)



    // You can fetch the product details based on the id from an API or a local data source

    if (!product) {
        return <div>Product not found</div>;
    }


    return (
        <div className=' flex items-center justify-center  h-[ clac( 100vh - 72px ) ]  mx-auto '>

            <div className=' flex  flex-col  md:flex-row  items-center justify-around  mt-2  w-[100%]'>





                <div>
                    <img src={product.images[1]} alt="" className=' max-w-[350px] sm:max-w-[400px]  w-[100%] mx-auto  rounded-xl' />

                </div>
                <div className=' w-[300px] md:w-[350px] mt-5     '>
                    <h2 className=' text-2xl text-pretty'>
                        Product Trending  : {product.id}</h2>
                    <hr />
                    <div className=' flex items-center justify-between'>
                        <h1 className=' text-2xl font-extrabold my-2'>{product.title} <span> 🌟🌟🌟🌟 {product.rating}
                        </span> </h1>
                    </div>
                    <div>
                        <h2 className=' text-xl font-bold'>{product.discountPercentage}</h2>
                        <h2 className=' text-xl font-bold'>Available ITems{product.stock}</h2>
                        <h2 className=' text-xl font-bold'> PRoduct category{product.category}</h2>
                    </div>
                    <hr />
                    <h4 className=' my-2 line-clamp-5 text-xl font-mono font-extrabold'>$ {product.price}</h4>
                    <hr />
                    <p className='  font-semibold   '> {product.description}</p>

                    <div className=' flex items-center justify-around mx-2 my-3'>
                        <Link to={'/cart'}>

                            <button className=' bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded' onClick={() => handleAddToCart(product)} >Add Cart</button>

                        </Link>

                        <Link to={'/product'}>
                            <button className=' bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded'  >Back</button>
                        </Link>
                    </div>


                </div>

            </div>





        </div>

    );
}

export default ProductDetail;
