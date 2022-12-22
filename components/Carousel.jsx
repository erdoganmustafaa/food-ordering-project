import React from 'react'
import Image from 'next/image'
import Title from './ui/Title';
import Slider from 'react-slick';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        autoplayspeed:1000,
        appenDots:(dots)=>(
            <div style={{
                color:"yellow",
                padding:"10px",

            }}>
                <ul style={{marginTop:"10px"}}>{dots}</ul>
                
            </div>
        ),
        customPaging : (i)=>(
            <div className='w-3 h-3 border bg-white rounded-full mt-10'></div>
        )
      };
    return (
        <div className='h-screen w-full container mx-auto -mt-[88px]'>
            <div className='absolute top-0 left-0 w-full h-full'>
            <div className='relative h-full w-full'>
            <Image src="/images/hero-bg.jpg" alt='' layout='fill' objectFit='cover' />
            </div>
            </div>
            <Slider {...settings}>
            <div>
            <div className='mt-48 left-0 container mx-auto text-white flex flex-col items-start gap-y-10'>
                <Title addClass="text-6xl">Fast Food Restaurant</Title>
                <p className='text-sm sm:w-3/6 w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt excepturi quis, ex optio, beatae sapiente in cupiditate,
                 quos aliquam animi natus! Tenetur tempora veritatis vel eius et nihil blanditiis nostrum incidunt similique saepe. Illo dicta ipsum quidem exercitationem perspiciatis numquam.
                </p>
                
                <button className='btn-primary'>Order now</button>
            </div>
            </div>
            <div>
            <div className='mt-48 left-0 container mx-auto text-white flex flex-col items-start gap-y-10'>
                <Title addClass="text-6xl">Fast Food Restaurant Second Section</Title>
                <p className='text-sm sm:w-3/6 w-full'>Second lorem ipsum dolor sit amet consectetur adipisicing elit. Id adipisci officiis in atque tempora dolore doloribus consequatur architecto quam, at dolorem sequi vitae commodi. Ad, quibusdam totam sed accusantium doloremque debitis illo enim at praesentium incidunt aspernatur harum, repudiandae minus.
                </p>
                
                <button className='btn-primary'>Order now</button>
            </div>
            </div>
            
            </Slider>

        </div>
    )
}

export default Carousel;