import React from 'react'
import { Instagram } from "../icons/Instagram";
import { Facebook } from "../icons/Facebook";
import { Twitter } from "../icons/Twitter";
import logo from "../Images/logo.jpg"

const Footer = () => {
  return (
    <div>
         <div className="questions px-5 md:px-20 my-8 ">
        <div className="w-full">
          <h1 className='font-bold text-4xl mb-3'>Frequently Asked Questions</h1>
          <p className="text-gray-600 md:w-1/2 md:text-lg my-1">
            Can’t find the answers you’re looking for? Please{" "}
            <a
              href="#"
              className="font-semibold hover:text-[#FEA92A] hover:underline"
            >
              chat with our friendly team.
            </a>
          </p>
        </div>
        <div className="flex space-y-4 lg:space-x-4 lg:space-y-0 flex-col lg:flex-row my-6">
          <div className="lg:w-1/3">
            <h2 className="text-lg text-primary-800">
              Is there a free trial available?
            </h2>
            <p className="text-sm text-[#FEA92A]">
              Yes, you can try us for free for 30 days.
            </p>
          </div>
          <div className="lg:w-1/3">
            <h2 className="text-lg text-primary-800">
              Can I change my plan later?
            </h2>
            <p className="text-sm text-[#FEA92A]">
              Of Course, you can change your plan later. Chat to our friendly
              team to find a solution that works for you.
            </p>
          </div>
          <div className="lg:w-1/3">
            <h2 className="text-lg ">
              What is your cancellation policy
            </h2>
            <p className="text-sm text-[#FEA92A]">
              We understand that things change. You can cancel your plan at any
              time and we’ll refund you the difference already paid.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-center border rounded md:justify-between p-3 px-7 items-center border-[#FEA92A]">
          <div>
            <h2 className="font-semibold text-center md:text-left">
              Still have questions?
            </h2>
            <p className="text-gray-500 text-center md:text-left">
              Can’t find the answers you’re looking for? Please{" "}
              <a href="#" className="underline hover:text-gray-900">
                chat with our friendly team
              </a>
              .
            </p>
          </div>
          <div>
            <button className="bg-[#FEA92A]  duration-300 text-white p-2 px-4 rounded">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-5 md:px-20  bg-[#FEA92A]">
        <div className="flex flex-col md:flex-row justify-between md:pb-10">
          <div className="flex xl:w-1/2 text-sm md:divide-x flex-col items-center md:flex-row text-center w-full">
            <img src={logo} className="h-36 mr-5" alt="ayurveda" />
            <p className="text-white text-justify py-4 md:px-5">
              We're on a mission to spread awareness about Human Body and how
              one can lead a healthy life by following them.
            </p>
          </div>
          <div className="w-fit my-5 text-white">
            <h4 className="text-sm">Follow Us On :</h4>
            <div className="text-4xl space-x-3 flex pt-2.5">
              <a href="">
                <Instagram className="border border-white rounded-full p-2 hover:bg-white hover:border-primary-500 hover:text-[#FEA92A]" />
              </a>
              <a href="">
                <Twitter className="border border-white rounded-full p-2 hover:bg-white hover:border-primary-500 hover:text-[#FEA92A]" />
              </a>
              <a href="">
                <Facebook className="border border-white rounded-full p-2 hover:bg-white hover:border-primary-500 hover:text-[#FEA92A]" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex text-gray-500 justify-between bg-white rounded w-full p-3">
          <h2 className="text-sm ">copyright 2023 | All rights reserved</h2>
          <h2 className="text-sm">v 1.0.0</h2>
        </div>
      
    </div>
    </div>
  )
}

export default Footer
