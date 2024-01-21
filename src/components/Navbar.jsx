import React, { useState } from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";


const Navbar = () => {
  const navRef = useRef();


  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
 
  return (
    <>
      <div className="w-full h-16 shadow-md sticky top-0 left-0 right-0 z-50 bg-[#FEA92A] ">
        <header className="flex items-center justify-between h-full w-[90%] sm:w-[80%] text-white mx-auto">
          <Link className="text-2xl sm:text-3xl font-bold text-white" to="/">
            NGO
          </Link>
          <nav ref={navRef} className="flex items-center z-50">
            <Link
              className="mx-4 hover:text-gray-200  font-semibold text-lg cursor-pointer"
              to="/"
            >
              Home
            </Link>
           
            <Link
              className=" mx-4 hover:text-gray-200  font-semibold text-lg cursor-pointer"
              to="/about"
            >
              About
            </Link>
            <Link
              className=" mx-4 hover:text-gray-200  font-semibold text-lg cursor-pointer"
              to="/dashboard"
            >
              Dashboard
            </Link>
            <Link
              className=" mx-4 hover:text-gray-200  font-semibold text-lg cursor-pointer"
              to="/galary"
            >
              Galary
            </Link>
            
            {/* {
          !cookies.access_token ?  <Link className="mt-5 md:mt-0 mx-4 text-white rounded-md hover:bg-blue-700 text-base font-semibold  bg-blue-600 py-1.5 px-4 " to="/register">
            Register
          </Link> 
          :<button  className="mt-5 md:mt-0 mx-4 text-white rounded-md hover:bg-blue-700 text-base font-semibold  bg-blue-600 py-1.5 px-4 " onClick={logout}>Logout</button>
        } */}
            <Link
              className="mt-5 md:mt-0 mx-4 text-[#FEA92A] rounded-[5px]  text-base font-semibold  bg-white py-1.5 px-4 cursor-pointer "
              to="/login"
            >
              Login
            </Link>

            <button
              className="nav-btn nav-close-btn md:hidden"
              onClick={showNavbar}
            >
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn md:hidden" onClick={showNavbar}>
            <FaBars />
          </button>
        </header>
      </div>
    </>
  );
};

export default Navbar;
