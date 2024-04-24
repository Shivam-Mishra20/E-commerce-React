import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../../Firebase/Firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
 
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css'
import loginhand from '../../../public/img/login.png'
import { useSelector } from 'react-redux';
 

const Login = () => {
    const darkmode = useSelector((state) => state.darkMode)
 
    const navigateLogin = useNavigate()

    const [usersignup, setusersignup] = useState({

        email: "",
        password: "",
    })
    const handleChange = (e) => {

        setusersignup({ ...usersignup, [e.target.name]: e.target.value })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!usersignup.email || !usersignup.password) {

            toast.error('All filds are Mandatory');

        }
        else {
            signInWithEmailAndPassword(auth, usersignup.email, usersignup.password).then(async (res) => {
                navigateLogin('/page')
                setTimeout(() => {
                    toast.success('Login sucessfully✅')

                }, 500)










            }).catch((err) => toast.error(err.message))



        }
    }

    return (
        <div className=' bglogin'>
            <div>
                <div className=' relative w-full hidden sm:block       '>
                    <div className={`   ${  darkmode  ? "bg-purple-600" : 'bg-purple-300'}  object-cover h-[190px]   w-full               `}></div>
                    <h1 className=' text-3xl font-bold  absolute left-6  font-sans   bottom-6 '>Login up To our Ecom</h1>
                </div>
            </div>

            <div className=' flex flex-col sm:flex-row items-center  justify-around my-6    gap-4   '>

                <div>
                    <img src={loginhand} alt="" className=' w-[200px] sm:w-[350px] rounded-[20px]  sm:rounded-md  ' />
                </div>

                <div className=" max-w-[300px]    sm:max-w-[350px] h-[300px]       ">
                    <div className="  shadow-md  ">


                        <form action="" className="form_main rounded-l" onSubmit={handleSubmit}  >
                            <p className="heading">Login</p>
                            <div className="inputContainer">
                                <svg className="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 16 16">
                                    <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
                                </svg>
                                <input type="email" name='email' class="inputField" id="username" placeholder="Username" value={usersignup.email}
                                    onChange={handleChange} />
                            </div>

                            <div className="inputContainer">
                                <svg class="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                                </svg>
                                <input type="password" name='password' className="inputField" id="password" placeholder="Password" value={usersignup.password}
                                    onChange={handleChange} />
                            </div>


                            <button id="button">Submit</button>
                            <p className=' text-black  text-xs  mt-3'>
                                Do'nt have Account  /
                                <Link to={'/signup'}>
                                    <button className='  cursor-pointer hover:text-blue-300'>signup</button>
                                </Link>

                            </p>
                            <ToastContainer position="top-center" autoClose={1000} />
                        </form>

                    </div>
                </div>

                {/* <div>
                    <img src="https://img.freepik.com/free-vector/online-shopping-concept-landing-page_23-2148253518.jpg?t=st=1713176682~exp=1713180282~hmac=ce95f4523600b0e527c95d99b41c46b43c1dbed5f133f2375afbb6626a020116&w=996" alt="" className=' w-[400px] rounded-[20px]  sm:rounded-md  ' />
                </div> */}
            </div>
        </div>
    );
};

export default Login;
