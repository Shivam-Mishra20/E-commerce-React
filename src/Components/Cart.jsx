// Cart.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
Modal.setAppElement('#root');
import { SiContactlesspayment } from "react-icons/si";
import cartimg from '../../public/img/cartimg.png'
import { useSelector, useDispatch } from 'react-redux';
import {  updateQuantity, removeFromCart, clearCart, loadCartFromLocalStorage } from './Redux/Cartslice';



function Cart() {

    const dispatch = useDispatch();
    const cartnew = useSelector(state => state.cart.cartItems);


    const totalPrice = cartnew.reduce((acc, item) => acc + item.price, 0);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        if (storedCart) {
            dispatch(loadCartFromLocalStorage(storedCart));
        }
    }, [dispatch]);



    const handleRemoveFromCart = id => {
        dispatch(removeFromCart(id));
        localStorage.setItem('cart', JSON.stringify(cartnew.filter(item => item.id !== id)));
    };

    const handleChange = (productId, event) => {
        const newQuantity = parseInt(event.target.value);
        dispatch(updateQuantity({ productId, newQuantity }));
        const updatedCart = cartnew.map(product =>
            product.id === productId ? { ...product, quantity: newQuantity, price: newQuantity * product.price } : product
        );
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
        localStorage.removeItem('cart');
    };


    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);



    return (

        <div className='p-1 h-auto '>


            {cartnew && cartnew.length === 0 ? "" :
                <div className='   hidden sm:flex   w-full        items-center   justify-around   py-4     border-b-2    '  >
                    <p className=' text-center'>Prdouct</p>

                    <p className=' text-center  ml-24     '>Quantity</p>
                    <p className=' text-center  '>Bill Total</p>
                </div>
            }


            <div className='  '>

                {cartnew.length === 0 ? (
                    <>


                        <div className=' flex items-center justify-center flex-col py-2'>

                            <div>
                                <img src={cartimg} alt="" className=' w-[200px] object-cover ' />

                            </div>
                            <div className=' flex items-center justify-center flex-col'>
                                <p className='text-3xl text-center my-6'>Your cart is empty</p>
                                <Link to={'/product'}>
                                    <button className=' px-8  my-2   py-2 bg-blue-300 hover:bg-blue-200  rounded-md  text-black'>Add ➕</button></Link>
                                <ToastContainer position="top-center" autoClose={2000} />

                            </div>




                        </div>


                    </>


                ) :

                    (
                        cartnew.map((item) => (
                            <div className=' p-2  h-auto ' key={item.id}>

                                <div className='  flex      hover:bg-gray-400  flex-col sm:flex-row  rounded-md   items-center   justify-around p-2      border-b-2  px-2   ' key={item.id}>
                                    <Link to={`/product/${item.id}`}>
                                        <div className=' w-[auto]  flex items-center justify-between gap-3  object-cover rounded-md '>

                                            <img src={item.images[0]} alt="" className=' rounded-md  max-w-[100px] mx-auto  ' />
                                            <div  >

                                                <h2 className=' text-xl font-bold text-center text-purple-500'>{item.title}</h2>
                                                <h3 className=' text-3xl text-center'> ${item.price}</h3>
                                                <h3 className=' text-xl text-center'> 🌟🌟🌟🌟{item.rating}</h3>
                                                <h1 className='text-gray-300 text-center'>{item.category}</h1>




                                            </div>


                                        </div>
                                    </Link>


                                    <div className=' flex   mt-2 flex-col sm:flex-row    items-center justify-center       gap-3'>

                                        <div className=' flex items-center justify-center flex-row     sm:flex-col gap-3'>
                                            <Link to={'/product'}>
                                                <button className=' px-4 py-2 bg-blue-300 hover:bg-blue-200  rounded-md  text-black'>Add ➕</button></Link>
                                            <button className=' px-4 py-2 bg-blue-300  rounded-md  hover:bg-blue-700 text-black  ' onClick={() => handleRemoveFromCart(item.id)}>Remove </button>

                                        </div>

                                        <div className=' '>
                                            <select value={item.quantity} onChange={(e) => handleChange(item.id, e)} className=' bg-gray-300 px-2'>
                                                {[1, 2, 3, 4, 5].map((quantity) => (
                                                    <option key={quantity} value={quantity}>
                                                        {quantity}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>


                                    </div>

                                    <div>
                                        <h2 className=' text-xl text-center font-extrabold text-green-800'>Amt ${item.price}</h2>

                                    </div>


                                </div>
                            </div>

                        ))
                    )


                }




                {  cartnew.length !== 0  && (
                    <div className=' flex  flex-col sm:flex-row items-center justify-between p-1  h-auto   '>
                        <div className='text-center mx-auto h-auto '>


                            < h1 className=' text-center font-extrabold   font-mono text-2xl text-[#543fb3] f '>Total Amt $- {Math.round(totalPrice * 1.18)}💵</h1>
                            <button className=' px-4 py-2  bg-gray-400  my-4   rounded-md  hover:bg-gray-700 text-black  ' onClick={handleClearCart}>RemoveAll </button>
                        </div>






                        <div className=" w-[300px] mx-auto  my-2  bg-gray-600 h-[auto]   sm:h-[auto]  ">
                            <div className="flex flex-col   lg:h-[auto]   lg:px-2 md:px-7 px-4 lg:py-10 md:py-10 py-4 justify-between  ">
                                <div>
                                    <p className="lg:text-4xl text-3xl font-black leading-2 text-gray-800 dark:text-white">Summary</p>
                                    <div className="flex items-center justify-between pt-6">
                                        <p className="text-base leading-none text-gray-800 dark:text-white">Subtotal</p>
                                        <p className="text-base leading-none text-gray-800 dark:text-white">{totalPrice}</p>
                                    </div>
                                    <div className="flex items-center justify-between pt-2">
                                        <p className="text-base leading-none text-gray-800 dark:text-white">Shipping</p>
                                        <p className="text-base leading-none text-gray-800 dark:text-white" >Delhi</p>
                                    </div>
                                    <div className="flex items-center justify-between pt-4">
                                        <p className="text-base leading-none text-gray-800 dark:text-white">Tax</p>
                                        <p className="text-base leading-none text-gray-800 dark:text-white" >18%</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center pb-4 justify-between lg:pt-3 pt-2">
                                        <p className="text-2xl leading-normal text-gray-800 dark:text-white">Total</p>
                                        <p className="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-white">{Math.round(totalPrice * 1.18)}</p>
                                    </div>

                                    <button className="text-base leading-none w-full py-4 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700" onClick={openModal}  >Checkout</button>


                                </div>

                            </div>
                        </div>



                    </div>
                )}
            </div>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="payment Modal"
                style={{
                    content: {


                        height: 'auto',
                        margin: 'auto',
                        overflowY: "scroll",
                        padding: "0px"

                    },
                }}





            >
                <button onClick={closeModal} style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', cursor: 'pointer' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="min-w-[50vw] min-h-[100vh] bg-gray-200 flex    pt-12">
                    <div className="  max-w-[70vw] sm:max-w-[30vw] w-[100%] h-[auto]   mx-auto rounded-lg bg-white shadow-lg p-4 mb-4 text-gray-700"  >
                        <div className="w-full pt-1 pb-5">
                            <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                                <SiContactlesspayment size={50} className="mdi mdi-credit-card-outline text-3xl" />

                            </div>
                        </div>
                        <div className="mb-5">
                            <h1 className="text-center font-bold  text-xs sm:text-xl uppercase">Secure payment info</h1>
                        </div>
                        <div className="mb-3 flex-col  sm:flex-row   flex -mx-2">
                            <div className="px-2">
                                <label htmlFor="type1" className="flex items-center cursor-pointer">
                                    <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" defaultChecked />
                                    <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-8     " />
                                </label>
                            </div>
                            <div className="px-2">
                                <label htmlFor="type2" className="flex items-center cursor-pointer gap-2">
                                    <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type2" />
                                    <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" className="h-8 mt-2 sm:ml-3" />
                                </label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
                            <div>
                                <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text" required />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="font-bold text-sm mb-2 ml-1">Card number</label>
                            <div>
                                <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text" required />
                            </div>
                        </div>
                        <div className="mb-3 -mx-2  flex-col    hidden sm:flex">
                            <div className="px-2 w-1/2">
                                <label className="font-bold text-sm mb-2 ml-1">Expiration date</label>
                                <div>
                                    <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                        <option value={'01'}>01 - January</option>
                                        <option value={'02'}>02 - February</option>
                                        <option value={'03'}>03 - March</option>
                                        <option value={'04'}>04 - April</option>
                                        <option value={'05'}>05 - May</option>
                                        <option value={'06'}>06 - June</option>
                                        <option value={'07'}>07 - July</option>
                                        <option value={'08'}>08 - August</option>
                                        <option value={'09'}>09 - September</option>
                                        <option value={'10'}>10 - October</option>
                                        <option value={'11'}>11 - November</option>
                                        <option value={'12'}>12 - December</option>
                                    </select>
                                </div>
                            </div>
                            <div className="px-2 w-1/2 ">
                                <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                    <option value={2020}>2020</option>
                                    <option value={2021}>2021</option>
                                    <option value={2022}>2022</option>
                                    <option value={2023}>2023</option>
                                    <option value={2024}>2024</option>
                                    <option value={2025}>2025</option>
                                    <option value={2026}>2026</option>
                                    <option value={2027}>2027</option>
                                    <option value={2028}>2028</option>
                                    <option value={2029}>2029</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-10">
                            <label className="font-bold text-sm mb-2 ml-1">Security code</label>
                            <div>
                                <input className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder={'00'} type="text" />
                            </div>
                        </div>
                        <div >

                            <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold" onClick={() => {
                                toast.success(' Payment successfully done');
                            }} >🔒PAY NOW</button>
                        </div>
                        <ToastContainer position="top-center" autoClose={2000} />

                    </div>
                </div>


            </Modal>


        </div >


    )
}

export default Cart;