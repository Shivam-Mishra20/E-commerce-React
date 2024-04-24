import React from 'react'
import '../App.css'
import homeimg from '../../public/img/homeimg.jpg'
import img3 from '../../public/img/img3.png'
import imgdark from '../../public/img/black-min.jpg'
import { useSelector } from 'react-redux'
 


const Home = ( ) => {
    const darkmode = useSelector((state) => state.darkMode)

    return (
        <div>


            <div className={` bg-img relative    `} style={{
                backgroundImage: `url(${darkmode ? imgdark : homeimg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',  backgroundPosition:"80% 10%"  , width: '100%',}} >

            <div className=' absolute left-0 bottom-[80px]  mx-9'>

                {/* <p className='  hidden w-[400px]  text-justify sm:block'>Ecommerce refers to when individuals or companies buy and sell goods or services online. Ecommerce can take place within a company's smartphone app, on a social media platform, or in an online marketplace. </p> */}
                <div className={`flex items-center justify-center  flex-col `}>


                    <img src={img3} alt="" className=' w-[400px] shadow-2xl shadow-yellow-400  bg-[#FFC841]  rounded-full hidden md:block' />
                    <div class="typing-animation text-3xl font-bold mt-2  font-mono   animate-color-change">Mishra Ecommerce </div>
                </div>

            </div>


        </div>







        </div >
    )
}

export default Home
