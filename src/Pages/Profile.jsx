import React from 'react'
import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Profile = () => {
  return (
    <>
    <div className='w-[100%] h-screen bg-orange-100 flex items-center justify-center '>
        <div className='w-full h-fit sm:w-[80%] md:w-[60%] lg:w-[40%] mx-auto bg-white rounded-md p-6
        '>
            <div className='flex items-center gap-4 justify-center'>
                <div className='w-[75px] h-[75px]'>
                    <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg" className='w-full h-full rounded-full object-cover'  alt="" />
                </div>
                <div>
                    <h1 className='text-[#FEA92A] font-semibold text-lg'>Name</h1>
                    <p className='text-gray-400 text-sm'>Occupation</p>
                </div>
            </div>
            <div>
                <h1 className='text-[#FEA92A] font-bold text-lg text-center my-4'>Personal Information</h1>
                <div className='w-[70%] sm:w-[60%] mx-auto'>
                    <h1 className='font-semibold'><span className='text-[#FEA92A] font-semibold'>Name :</span> jane dev</h1>
                    <h1 className='font-semibold'><span className='text-[#FEA92A] font-semibold'>Address :</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit.  Ad facilis expedita inventore!</h1>
                    <h1 className='font-semibold'><span className='text-[#FEA92A] font-semibold'>Gender :</span> Female</h1>
                    <h1 className='font-semibold'><span className='text-[#FEA92A] font-semibold'>Ph no :</span>+91 1313878980</h1>
                </div>
                <div className='flex items-center justify-center gap-3 mt-4'>
                <FiInstagram className='text-[27px] text-[#FEA92A] font-bold cursor-pointer' />
                <FaFacebook className='text-[27px] text-[#FEA92A] font-bold cursor-pointer' />
                <FaTwitter className='text-[27px] text-[#FEA92A] font-bold cursor-pointer' />



                </div>
               

            </div>

        </div>
    </div>
    </>
  )
}

export default Profile
