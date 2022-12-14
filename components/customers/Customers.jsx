import React from 'react'
import Title from '../ui/Title'
import CustomerItem from './CustomerItem'
import Slider from 'react-slick'
import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io"
const Customers = () => {
  function NextBtn({onClick}){
    return <button className='absolute -bottom-12 right-1/2 bg-primary flex items-center  justify-center w-10 h-10 rounded-full text-black mr-4' 
    onClick={onClick}><IoIosArrowBack/></button>;
    
  }
  function PrevBtn({onClick}){
    return <button className='absolute ml-4 -bottom-12 left-1/2 bg-primary flex items-center  justify-center w-10 h-10 rounded-full text-black' onClick={onClick}><IoIosArrowForward/></button>;
    
  }
  const settings = {
    dots: false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
    ],
    nextArrow:<NextBtn/>,
    prevArrow:<PrevBtn/>,
    

  };
  return (
    <div className='container mx-auto my-10 py-10'>
      <Title addClass="text-[40px] text-center">What says Our customers</Title>
        
          <Slider {...settings}>
            <div><CustomerItem imgSrc="/images/client1.jpg" customerName="James Donkey"/></div>
            <div><CustomerItem imgSrc="/images/client2.jpg" customerName="Maria Kuzmanova"/></div>
            <div><CustomerItem imgSrc="/images/client1.jpg" customerName="James Donkey"/></div>
            <div><CustomerItem imgSrc="/images/client2.jpg" customerName="Maria Kuzmanova"/></div>
          </Slider>
            
        
    </div>
  )
}

export default Customers