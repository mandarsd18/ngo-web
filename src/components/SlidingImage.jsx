import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const SlidingImage = () => {
  return (
    <>
    <div className='w-[90%] mx-auto sm:w-[80%]'>

    
    <Carousel
     autoPlay 
     infiniteLoop
     showStatus={false} 
     showThumbs={false}>
    <div className='h-[350px] sm:h-[400px] md:h-[500px] '>
        <img src="https://cdn.sanity.io/images/qa41whrn/prod/62f1f7f4615d9dfde15969b8346d630919031273-2880x1040.jpg?w=2160&q=80&auto=format" className='h-full object-cover' alt='img'/>
    </div>
    <div className='h-[350px] sm:h-[400px] md:h-[500px]'>
        <img src="https://cdn.sanity.io/images/qa41whrn/prod/4e4b0e2dbc5f7a1a1661befe592909db3de8da62-2880x1040.jpg?w=2160&q=80&auto=format"  className='h-full object-cover' alt='img' />
        
        
    </div>
    
</Carousel>
</div>

    </>
  )
}

export default SlidingImage