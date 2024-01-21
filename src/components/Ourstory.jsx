import React from 'react'
import { Link } from 'react-router-dom'

const Ourstory = () => {
  return (
   <>
   <div className='bg-gray-100 w-[100%] my-4'>
    <div className='w-[90%] sm:w-[80%] mx-auto flex flex-col md:flex-row py-5  items-center justify-center md:justify-between gap-4'>
        <div className='w-full md:w-[40%]'>
            <h1 className='text-4xl sm:text-5xl font-bold'>Story About</h1>
            <h1 className='text-4xl sm:text-5xl font-bold text-[#FEA92A]'>What we do</h1>
            <p className='font-semibold text-sm my-2 mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod dolores et! Itaque beatae consectetur facilis ipsum aliquam numquam sequi alias atque nisi!</p>
            <Link to={"/about"} className='text-white bg-[#FEA92A] py-2 px-3 rounded-sm '>Know more</Link>

        </div>
        <div className='columns-1 sm:columns-2 w-full space-y-3 p-3 md:w-[40%]'>
            <div className='flex flex-col items-center justify-center'>
                <div className='text-4xl font-bold  text-[#FEA92A]'>1</div>
                <p className='text-sm text-center  font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <div className='text-4xl font-bold text-[#FEA92A]'>2</div>
                <p className='text-sm text-center  font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <div className='text-4xl font-bold text-[#FEA92A]'>3</div>
                <p className='text-sm text-center  font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <div className='text-4xl font-bold text-[#FEA92A]'>4</div>
                <p className='text-sm text-center  font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            
        </div>

    </div>
    </div>
   </>
  )
}

export default Ourstory