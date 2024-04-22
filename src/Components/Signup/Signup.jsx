import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../../Firebase/Firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';

//  import './Signup.css'
const Signup = () => {

    const navigateLogin = useNavigate()

    const [usersignup, setusersignup] = useState({
        username: "",
        email: "",
        password: "",
    })
    const handleChange = (e) => {

        setusersignup({ ...usersignup, [e.target.name]: e.target.value })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!usersignup.username || !usersignup.email || !usersignup.password) {

            toast.error('All filds are Mandatory');

        }
        else {
            createUserWithEmailAndPassword(auth, usersignup.email, usersignup.password).then(async (res) => {

                const user = res.user
                await updateProfile(user, {
                    displayName: usersignup.username
                })

                toast.success(' Signup successfully');
                setTimeout(()=>{
                    navigateLogin('/login')

                },1000)
                

            }).catch((err) => toast.error(err.message))



        }
    }
    return (
        <div>
            <div>
                <div className=' relative w-full  '>
                    <div className=' w-[100%] object-cover h-[100px]    bg-purple-500      ' />
                    <h1 className=' text-3xl font-bold text-white  absolute left-8  font-sans  bottom-6 '>Sign up To our Ecom</h1>
                </div>
            </div>

            <div className="max-w-[300px] w-[100%] max-h-sm mx-auto mt-4">
                {/* <div className="bg-gray-200 p-8 shadow-md rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Signup</h2>
                    <form onSubmit={handleSubmit} >
                        <div className="mb-2">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                autoComplete='off'
                                id="name"
                                name='username'
                                type="text"
                                value={usersignup.username}
                                onChange={handleChange}

                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input

                                id="email"
                                name='email'
                                type="email"
                                value={usersignup.email}
                                onChange={handleChange}

                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                autoComplete='off'
                                id="password"
                                name='password'
                                type="password"
                                value={usersignup.password}
                                onChange={handleChange}

                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={handleSubmit}

                        >
                            Signup
                        </button>

                        <p className=' text-black  text-xs  mt-3'>
                            Do you have already Account  /
                            <Link to={'/login'}>
                                <button className='  cursor-pointer hover:text-blue-300'>Login</button>
                            </Link>

                        </p>
                        <ToastContainer position="top-center" autoClose={2000} />
                    </form>
                </div> */}
                <div className="     shadow-2xl my-3 mx-auto   shadow-black rounded-lg">
                    <div className="max-w-[300px]   sm:max-w-sm w-[100%]  h-[auto] mx-auto  relative flex flex-col py-2 px-4 rounded-2xl text-black bg-white ">
                        <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Welcome back to <span className="text-[#7747ff]">App</span></div>
                        <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Signup  to your account</div>
                        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                            <div className="block relative">
                                <label for="Username" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Username</label>
                                <input type="text" id="username" name='username' className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" value={usersignup.username}
                                    onChange={handleChange} />

                            </div>
                            <div className="block relative">
                                <label for="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
                                <input type="text" id="email" name='email' className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" value={usersignup.email}
                                    onChange={handleChange} />

                            </div>
                            <div className="block relative">
                                <label for="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
                                <input type="password" id="password" name='password' className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" value={usersignup.password}
                                    onChange={handleChange} />

                            </div>
                            <div>
                                <a className="text-sm text-[#7747ff]" href="#">Forgot your password?
                                </a></div>
                            <button type="submit" className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">Submit</button>
                            <p className=' text-black  text-xs  mt-3'>
                                Do you have already Account  /
                                <Link to={'/login'}>
                                    <button className='  cursor-pointer hover:text-blue-300'>Login</button>
                                </Link>

                            </p>
                            <ToastContainer position="top-center" autoClose={2000} />

                        </form>

                    </div>


                </div>
            </div>



        </div>
    )
}

export default Signup