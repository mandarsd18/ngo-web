import React from 'react'

const ImagesAndDiscription = () => {

  return (
    <>
    
    {/* <div class="w-[100%] h-[100vh] flex items-center">
        <div class="w-[70%] mx-auto  flex justify-between  gap-[20px]">
            <div class="w-[500px]  flex flex-col gap-4" >
                <h1 class="text-4xl font-bold text-orange-400">Set title for NGO</h1>
                <p class="text-xl  text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rem fugiat autem voluptatibus incidunt
                    deleniti suscipit soluta similique atque fugit officiis? Voluptates repudiandae recusandae dicta
                    accusantium saepe quaerat impedit natus aperiam?</p>
            </div>
            <div>
             
                <img class="w-[400px] h-[400px]" src='https://images.unsplash.com/photo-1617957796106-85f0e7ee9d0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmdvJTIwaW1hZ2VzJTIwaW4lMjBvcmFuZ2UlMjBjb2xvcnxlbnwwfHwwfHx8MA%3D%3D' alt=""/>
            </div>
        </div>
    </div>
     */}

     <div className='w-full h-[550px] mb-4 '>
        <div className='w-[90%] sm:w-[85%] md:w-[80%] mx-auto h-full flex flex-col-reverse items-center justify-center sm:flex-row sm:justify-between'>
            <div className='flex flex-col items-center justify-center gap-3 sm:items-start w-full sm:w-[65%] md:w-[70%]'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3  font-bold  text-[#] text-center sm:text-start'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, vitae!
                </h1>
                <p className='text-xs font-semibold  w-full sm:w-[60%] md:w-[50%] sm:text-base text-center sm:text-start mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloremque, recusandae velit assumenda accusantium </p>
                <button className='bg-[#FEA92A] px-3 py-1.5 rounded-sm text-white font-semibold'>Donate Now</button>
            </div>
            <div>
                <img src="https://cdn3d.iconscout.com/3d/premium/thumb/mutual-donation-5750436-4817961.png" alt="" />

            </div>
        </div>

     </div>
    

    </>
  )
}

export default ImagesAndDiscription
