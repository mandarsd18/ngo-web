import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
import { Link } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const Dashboard = () => {
  const data = [
    { name: "Sun", donations: 2000 },
    { name: "Mon", donations: 500 },
    { name: "Tue", donations: 500 },
    { name: "Wed", donations: 5000 },
    { name: "Thus", donations: 500 },
    { name: "Fri", donations: 1000 },
    { name: "Sat", donations: 400 },
  ];
  return (
    <>
      <div className="">
        <div className="w-[90%] sm:w-[80%] mx-auto">
          <div>
            <h1 className="text-3xl my-4 font-bold">Dashboard</h1>
          </div>
          <div className="bg-[#FEA92A] flex flex-col-reverse p-4 items-center rounded-md sm:flex-row sm:justify-between ">
            <div className="flex flex-col gap-2 sm:w-[60%]">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Hello jane
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-white md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat porro quibusdam recusandae. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Eaque consequuntur aliquid
                praesentium.
              </p>
              <Link to={"/profile"} className="text-white font-semibold">See Profile</Link>
            </div>
            <div className="">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/man-using-laptop-5612503-4678408.png?f=webp"
                alt=""
                className="object-cover w-[250px] h-[200px]"
              />
            </div>
          </div>

          <div className="w-[100%] flex flex-col-reverse md:flex-row gap-4">
            <div className="w-[100%] md:w-[60%]">
              <h1 className="font-bold text-xl mt-2 sm:mt-3">Recent Donations</h1>
              <div className=" shadow-sm rounded-sm bg-white p-3 sm:p-5 flex flex-col break-words mt-1 mb-1  sm:mt-3 sm:mb-2 h-fit">
                
                  <h1 className=" text-sm font-bold  md:text-lg">
                  Donation name
                  </h1>
                  <p className=" text-xs  text-gray-400 font-semibold">
                    -12Rs
                  </p>
                  <p className="mt-1 sm:mb-1.5 mb-1 text-xs font-bold">
                    Addresss
                  </p>
                
                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs font-semibold text-gray-400">12:30pm</p>

                  <div className="flex gap-2">
                    <AiFillEdit className="text-lg text-gray-500 font-bold cursor-pointer sm:text-[22px] hover:text-gray-600" />
                    <AiFillDelete className="text-lg sm:text-[22px] text-gray-500 font-bold cursor-pointer hover:text-gray-600" />
                  </div>
                </div>
              </div>

              <div className=" shadow-sm rounded-sm bg-white p-3 sm:p-5 flex flex-col break-words mt-1 mb-1  sm:mt-3 sm:mb-2 h-fit">
                
                <h1 className=" text-sm font-bold  md:text-lg">
                Donation name
                </h1>
                <p className=" text-xs  text-gray-400 font-semibold">
                  -12Rs
                </p>
                <p className="mt-1 sm:mb-1.5 mb-1 text-xs font-bold">
                  Addresss
                </p>
              
              <div className="flex items-center justify-between mt-1">
                <p className="text-xs font-semibold text-gray-400">12:30pm</p>

                <div className="flex gap-2">
                  <AiFillEdit className="text-lg text-gray-500 font-bold cursor-pointer sm:text-[22px] hover:text-gray-600" />
                  <AiFillDelete className="text-lg sm:text-[22px] text-gray-500 font-bold cursor-pointer hover:text-gray-600" />
                </div>
              </div>
            </div>

              <div className=" shadow-sm rounded-sm bg-white p-3 sm:p-5 flex flex-col break-words mt-1 mb-1  sm:mt-3 sm:mb-2 h-fit">
                
                  <h1 className=" text-sm font-bold  md:text-lg">
                  Donation name
                  </h1>
                  <p className=" text-xs  text-gray-400 font-semibold">
                    -12Rs
                  </p>
                  <p className="mt-1 sm:mb-1.5 mb-1 text-xs font-bold">
                    Addresss
                  </p>
                
                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs font-semibold text-gray-400">12:30pm</p>

                  <div className="flex gap-2">
                    <AiFillEdit className="text-lg text-gray-500 font-bold cursor-pointer sm:text-[22px] hover:text-gray-600" />
                    <AiFillDelete className="text-lg sm:text-[22px] text-gray-500 font-bold cursor-pointer hover:text-gray-600" />
                  </div>
                </div>
              </div>

            </div>

            <div className="w-[100%] md:w-[40%] mt-2 md:mt-4">

              <div className="flex flex-col gap-2">
                <div className=" w-full border border-[#FEA92A] h-[100px] flex flex-col items-center justify-center rounded-md ">
                  <p className="font-semibold text-xl">Total Donations</p>
                  <h1 className="font-bold text-2xl">100</h1>
                  </div>
                <div className="w-full border bg-[#FEA92A] h-[100px] flex flex-col items-center justify-center rounded-md text-white">
                  <p className="font-semibold text-xl"> Highest Donation</p>
                  <h1 className="font-bold text-2xl"> Rs 12000</h1>
                </div>
                <div className=" w-full border border-[#FEA92A] h-[100px] flex flex-col items-center justify-center rounded-md ">
                  <p className="font-semibold text-xl">Avg monthly donations</p>
                  <h1 className="font-bold text-xl">Rs 6000</h1>
                </div>
                <div className="w-full border bg-[#FEA92A] h-[100px] flex flex-col items-center justify-center rounded-md text-white">
                  <p className="font-semibold text-xl">Total Cost Donated</p>
                  <h1 className="font-bold text-xl">120000</h1>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
