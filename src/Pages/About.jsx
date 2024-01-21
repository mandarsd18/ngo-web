import React from "react";
import SlidingImage from "../components/SlidingImage";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const About = () => {
  return (
    <>
      <div>
        <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
          <div className="h-[350px] sm:h-[400px] md:h-[500px] ">
            <img
              src="https://cdn.sanity.io/images/qa41whrn/prod/62f1f7f4615d9dfde15969b8346d630919031273-2880x1040.jpg?w=2160&q=80&auto=format"
              className="h-full object-cover"
              alt="img"
            />
          </div>
          <div className="h-[350px] sm:h-[400px] md:h-[500px]">
            <img
              src="https://cdn.sanity.io/images/qa41whrn/prod/4e4b0e2dbc5f7a1a1661befe592909db3de8da62-2880x1040.jpg?w=2160&q=80&auto=format"
              className="h-full object-cover"
              alt="img"
            />
          </div>
        </Carousel>
      </div>

      <div className="w-[] bg-gray-100">
        <div className="w-[90%] sm:w-[80%] mx-auto flex flex-col gap-4 md:flex-row items-center justify-center md:justify-between py-5">
          <div className="w-full md:w-[50%]">
            <h1 className="text-[#FEA92A] text-xl font-bold sm:text-2xl">About Our Charity</h1>
            <p className="text-sm md:text-base mt-2 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi in sint quod nihil facilis, ullam mollitia provident numquam, laborum reiciendis dolorum. Quis minima harum illum aspernatur, esse ratione expedita libero corrupti neque nostrum eligendi consequatur ad ea rerum facilis quos illo doloremque eos. Mollitia natus saepe quaerat. Blanditiis veritatis molestiae ipsam quas ad numquam quibusdam, fuga voluptate maxime, sapiente eaque sint soluta. Vel rerum aliquam, quasi dignissimos ipsa doloribus sint dolore facilis quos assumenda libero cupiditate minima sapiente magnam provident eos inventore perferendis omnis. Alias qui non amet modi esse ratione, impedit optio cumque. Ad, quod! Quasi laborum itaque nobis ipsum nesciunt, asperiores, ab debitis, cupiditate repellendus dolorum numquam voluptatibus amet autem vel excepturi optio cumque. Dignissimos dolorum perferendis esse!</p>
          </div>

          <div className='columns-1 sm:columns-2 w-full space-y-3 p-3 md:w-[40%]'>
            <div className='flex flex-col items-center justify-center bg-white py-6 rounded-md'>
                <div className='text-4xl font-bold  text-[#FEA92A]'>1</div>
                <p className='text-sm text-center  font-semibold'>Becom a Volunteer</p>
            </div>

            <div className='flex flex-col items-center justify-center bg-white py-6 rounded-md'>
                <div className='text-4xl font-bold text-[#FEA92A]'>2</div>
                <p className='text-sm text-center  font-semibold'>Quick Fundrais</p>
            </div>

            <div className='flex flex-col items-center justify-center bg-white py-6 rounded-md'>
                <div className='text-4xl font-bold text-[#FEA92A]'>3</div>
                <p className='text-sm text-center  font-semibold'>Help Someone</p>
            </div>

            <div className='flex flex-col items-center justify-center bg-white py-6 rounded-md'>
                <div className='text-4xl font-bold text-[#FEA92A]'>4</div>
                <p className='text-sm text-center  font-semibold'>Giv Donation</p>
            </div>
            
        </div>
        </div>


      </div>
    </>
  );
};

export default About;
