import React from 'react'

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllProducts } from './Redux/Product';

const MoreProducts = () => {
    const products = useSelector(selectAllProducts);
    console.log(products)

    const darkmode = useSelector((state) => state.darkMode)
    const arrowStyles = {

        padding: "10px 20px",


    };





    return (

        <div>

            {products ? <>
                <div className={` flex   items-center justify-center      bg-gray-400  ${darkmode && "bg-black"}`}>
                    <Carousel prevIcon={<span style={arrowStyles} className="carousel-control-prev-icon" />}
                        nextIcon={<span style={arrowStyles} className="carousel-control-next-icon" />}>
                        {

                            products.map((elm) => (
                                <Carousel.Item key={elm.id}>
                                    <div className='   min-h-[350px]       flex  flex-col items-center justify-center  gap-4    px-40        ' key={elm.id}>


                                        <Link to={`/product/${elm.id}`}>

                                            <img src={elm.images[0]} alt="Products img" className={`   object-cover rounded-full w-[200px] max-w-[250px] max-h-[200px]   mx-auto  shadow-xl shadow-${darkmode ? "shadow-purple-400" : "black"}`} />
                                        </Link>



                                        <div>
                                            <Carousel.Caption>
                                                <h2 className={`  text-white ${darkmode ? "text-purple-400" : "text-black"} text-xl font-mono inset-x-auto font-bold mt-6 `}>{elm.title}</h2>

                                            </Carousel.Caption>


                                        </div>

                                    </div>
                                </Carousel.Item>
                            ))

                        }
                    </Carousel>



                </div>

            </> : <>
                <h1>Loading.......</h1>
            </>}






        </div >

    )
}

export default MoreProducts