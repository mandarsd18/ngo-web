import React from 'react'
import { Google } from "../icons/Google";
import { Gmail } from "../icons/Gmail";
import { Password } from "../icons/Password";
import { Logout } from "../icons/Logout";
import { Right } from "../icons/Right";
import { Link } from 'react-router-dom';
import logo from "../Images/logo.jpg"
import { Account } from '../icons/Account';

const Register = () => {
  return (
    <>
     <div className="bg-primary-500 flex flex-col lg:flex-row  h-full lg:h-screen p-3">
        <div className=" w-full lg:w-1/2 bg-grey-lighter flex rounded flex-col order-2 lg:order-1 bg-white">
          <div className="w-full lg:w-4/6 mx-auto flex-1 flex flex-col items-center justify-center px-5">
            <h1 className="mb-8 text-3xl text-center font-semibold">
              Create Your Account
            </h1>
            <div className="flex w-full space-x-2 p-2 shadow-md px-5 border rounded my-4 items-center cursor-pointer hover:shadow-lg">
              <Google className="text-xl" />
              <h2
                className="text-lg font-medium text-gray-600 "
               
              >
                Sign Up with Google
              </h2>
            </div>
            <div className="flex my-7 w-1/2 mx-auto items-center">
              <div className="h-[1px] w-full bg-gray-500"></div>
              <h2 className="mx-5">OR</h2>
              <div className="h-[1px] w-full bg-gray-500"></div>
            </div>

            <div className="w-full flex my-2 bg-gray-200 rounded-md p-3 items-center space-x-2">
              <Account className="text-2xl text-gray-500" />
              <input
                type="text"
                className="outline-none w-full bg-transparent"
                name="name"
                placeholder="Name"
                
              />
            </div>

            <div className="w-full flex my-2 bg-gray-200 rounded-md p-3 items-center space-x-2">
              <Gmail className="text-2xl text-gray-500" />
              <input
                type="text"
                className="outline-none w-full bg-transparent"
                id="name"
                name="email"
                placeholder="Email"
                
              />
            </div>

            <div className="w-full flex my-2 bg-gray-200 rounded-md p-3 items-center space-x-2">
              <Password className="text-2xl text-gray-500" />
              <input
                type="password"
                id="password"
                className="outline-none w-full bg-transparent"
                name="password"
                placeholder="Password"
                
              />
            </div>
            <div className="w-full flex my-2 bg-gray-200 rounded-md p-3 items-center space-x-2">
              <select name="" id="" className='w-full bg-transparent font-semibold focus:outline-none'>
                <option value="">Donater</option>
                <option value="">Suppiler</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-[#FEA92A] font-medium flex justify-between p-3 items-center  bg-primary-500 text-center py-3 rounded bg-green text-white hover:bg-primary-600 focus:outline-none my-1"
              
            >
              <h2>Create Account</h2>
              <Logout className="text-2xl" />
            </button>
            <div className="w-full my-4 flex justify-between">
              <h2>Already have account?</h2>
              <Link
                to="/login"
                className="flex text-lg font-medium text-blue-700 items-center space-x-2"
              >
                <h2>Sign In</h2>
                <Right className="text-lg" />
              </Link>
            </div>
          </div>
        </div>
        <div className=" w-full lg:w-1/2 order-1 flex items-center lg:order-2 justify-center">
          <img src={logo} className=" w-48 my-5 lg:w-80" alt="logo" />
        </div>
      </div>
    </>
  )
}

export default Register
