import React from 'react'

const GoalPage = () => {
  return (
    <>
    <div
        className="w-full h-fit
       py-6"
      >
        <div className="w-[80%] mx-auto h-full flex justify-center items-center  flex-wrap gap-4 mt-3 mb-3 shadow-lg py-5">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold">
              Our Goals
            </h2>
            <p className="text-sm text-center  font-semibold w-full sm:w-[60%] mx-auto mt-2 text-gray-600" >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, numquam natus quidem recusandae eveniet corrupti?
            </p>
          </div>

          <div className="flex items-center justify-evenly gap-4 flex-wrap mt-2 ">
            <div className=" bg-white p-4 rounded-lg hover:shadow-md flex items-center flex-col justify-center">
              <img
                src="https://t4.ftcdn.net/jpg/03/60/11/83/360_F_360118396_SlKOcJHwZrEDw1HqrxSoDqjmf3vlTSSl.jpg"
                alt="image1"
                className="w-32"
              />
              <h1 className="font-bold ">Reduce Hunger</h1>
            </div>
            <div  className=" bg-white p-4 rounded-lg hover:shadow-md flex items-center flex-col justify-center">
              <img
                src="https://img.freepik.com/premium-vector/people-care-logo-template-design-vector-emblem-design-concept-creative-symbol-icon_20029-156.jpg"
                alt=""
                className="w-32"
              />
               <h1 className="font-bold">People Care</h1>
            </div>
            <div className=" bg-white p-4 rounded-lg hover:shadow-md flex items-center flex-col justify-center">
              <img
                src="https://images.assetsdelivery.com/compings_v2/grgroup/grgroup1911/grgroup191111804.jpg"
                alt=""
                className="w-32"
              />
               <h1 className="font-bold">Peace the planet</h1>
            </div>
            
          </div>

        </div>
      </div>
    </>
  )
}

export default GoalPage
