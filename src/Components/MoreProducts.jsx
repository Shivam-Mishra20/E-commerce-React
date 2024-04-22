import React from 'react'

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Link } from 'react-router-dom';
const MoreProducts = ({ products, dark }) => {
    const arrowStyles = {

        padding: "10px 20px",


        // Change to the desired color
        // You can also add other styles such as padding, border-radius, etc.
    };




    return (

        <div>



            <div className={` flex   items-center justify-center      bg-gray-400  ${dark&&"bg-black"}`}>
                <Carousel prevIcon={<span style={arrowStyles} className="carousel-control-prev-icon" />}
                    nextIcon={<span style={arrowStyles} className="carousel-control-next-icon" />}>
                    {

                        products.map((elm) => (
                            <Carousel.Item key={elm.id}>
                                <div className='   min-h-[300px]    my   flex flex-col items-center justify-center  gap-4    px-20        ' key={elm.id}>


                                    <Link to={`/product/${elm.id}`}>

                                        <img src={elm.images ? elm.images[2] : elm.images[1]} alt="Products img" className={`  object-cover rounded-full w-[250px]   mx-auto  shadow-xl shadow-${dark ? "shadow-purple-400" : "black"}`} />
                                    </Link>



                                    <div>
                                        <Carousel.Caption>
                                            <h2 className={`'  text-white ${dark&&"text-gray-300"} text-xl font-mono inset-x-auto font-bold'`}>{elm.title}</h2>

                                        </Carousel.Caption>


                                    </div>

                                </div>
                            </Carousel.Item>
                        ))

                    }
                </Carousel>



            </div>


        </div >

    )
}

export default MoreProducts