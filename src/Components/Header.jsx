import React, { useState } from 'react'
import { IoCart } from "react-icons/io5";
import { TiThMenuOutline } from "react-icons/ti";
import { FaWindowClose } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { PiStripeLogoBold } from "react-icons/pi";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { app, auth } from '../Firebase/Firebase';
import '../App.css'
const Header = ({ cartcount, dark, toggleMode, userName }) => {





    const handleLogout = () => {
        auth.signOut();
    };

    const [open, setopen] = useState(false)


    return (
        <div className={` h-[100%] ${dark ? "bg-black  text-white" : 'bg-gray-100'}  shadow-md  ${dark ? ' shadow-gray-100' : "shadow-black"}   w-[100%]  p-2   sm:p-4  `}>

            <div className=' flex items-center justify-between'>
                <div className=' flex items-center justify-center  gap-0  '>
                    <span className=' text-xl sm:text-2xl text-[#FFA22F] '><span className={` text-black  font-extrabold ${dark && "text-white"}   `}>E</span >mitra</span>
                    <PiStripeLogoBold className=' mt-1 text-2xl text-[#FFA22F]  font-bold' />


                </div>


                <div>
                    <div className=' list-none  items-center gap-3  text-sm sm:text-[16px]    font-extrabold font-sans      hidden sm:visible  sm:inline-flex      '>

                        <Link to={'/'}> <li className='list'>Home</li></Link>
                        <Link to={'/online'}> <li className='list'>Online</li> </Link>
                        <Link to={'/about'}> <li className=' list'>About</li></Link>
                        <Link to={'/product'}> <li className=' list'>Products</li></Link>
                        {/* <li className='list'>online</li>
                        <li className='list'>About</li>
                        <li className='list'>product</li> */}


                    </div>
                </div>


                {

                    open && <>
                        <div className=' list-none     block sm:hidden  open  m-0 w-[200px]   min-h-[100vh]     bg-gray-300 absolute right-0    top-[52px] sm:top-[72px]  transition-all  z-10'>

                            <div className=' flex items-center justify-center flex-col h-full    '>
                                <Link to={'/'}> <li className='list'>Home</li></Link>
                                <Link to={'/online'}> <li className='list'>Online</li> </Link>
                                <Link to={'/about'}> <li className=' list'>About</li></Link>
                                <Link to={'/product'}> <li className=' list'>Products</li></Link>

                            </div>






                        </div>



                    </>

                }


                <div className='  text-2xl  '>


                    <div className=' flex   items-center justify-between gap-2  '>

                        <div className=' flex items-center justify-center gap-2 mr-2'>
                            <div>
                                <Link to={'/login'}>
                                    <button onClick={handleLogout} className=' bg-gray-600 text-white font-medium px-3 text-xs rounded-md py-2 hover:bg-gray-300'>{userName ? "Logout" : "Login"}</button>
                                </Link>

                            </div>

                            {userName && (
                                <div className=' flex  items-center justify-between gap-2'>
                                    <span className='   text-[12px]   text-nowrap font-medium    '>{userName}</span>
                                    <FaUser size={20} />


                                </div>

                            )}



                        </div>
                        <Link to='/cart'>
                            <div className='flex items-center justify-between gap-2    '>
                                <IoCart className='    ' />
                                <span className={`' ${cartcount == 0 ? "hidden" : "  inline-flex"}     sm:block'`}>{cartcount}</span>

                            </div>
                        </Link>
                        <div onClick={toggleMode} className=' cursor-pointer   '>


                            {dark ? <MdDarkMode />
                                : <CiLight />
                            }
                        </div>
                        {open ? <FaWindowClose className=' ml-2 block sm:hidden cursor-pointer' onClick={() => setopen(!open)} /> :

                            <TiThMenuOutline className=' ml-2 block sm:hidden cursor-pointer' onClick={() => setopen(!open)} />

                        }



                    </div>









                </div>
            </div>

        </div>
    )
}

export default Header
