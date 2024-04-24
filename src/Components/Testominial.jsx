import React from 'react'
import img1 from '../../public/img/img4.png'
import img2 from '../../public/img/img2.png'
const Testominial = () => {
  return (
    <div>

      <div className=' flex  h-auto flex-col  md:flex-row  gap-4 my-3 items-center justify-around p-4 w-[100%]'>
        <div className=' max-w-[250px] w-[100%]'>
          <img src={img1} alt="" className=' w-full rounded-md ' />
          <h2 className='text-[16px] font-bold'>Big Discount and Many gifts </h2>
          <p className=' font-extrabold'>only on Mitraecom</p>

        </div>
        <div className=' flex items-center justify-center flex-col'>
          <img src={img2}alt="" className=' w-[300px] rounded-[20px]  sm:rounded-md  ' />
          <h1 className=' text-2xl  font-semibold'>Online shopping anything</h1>


        </div>

       

      </div>

    </div>
  )
}

export default Testominial
