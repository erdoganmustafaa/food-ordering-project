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
                <p className='text-sm sm:w-3/6 w-full'>Deneme Deneme Deneme kljfkfklqmklr Deneme Deneme Deneme
                Deneme Deneme Deneme kljfkfklqmklr Deneme Deneme Deneme
                Deneme Deneme Deneme kljfkfklqmklr Deneme Deneme Deneme
                Deneme Deneme Deneme kljfkfklqmklr Deneme Deneme Deneme
                </p>
                
                <button className='btn-primary'>Order now</button>
            </div>
            </div>
            <div>
            <div className='mt-48 left-0 container mx-auto text-white flex flex-col items-start gap-y-10'>
                <Title addClass="text-6xl">Fast Food Restaurant</Title>
                <p className='text-sm sm:w-3/6 w-full'>Bu 2.slider
                </p>
                
                <button className='btn-primary'>Order now</button>
            </div>
            </div>
            
            </Slider>

        </div>
    )
}

export default Carousel;