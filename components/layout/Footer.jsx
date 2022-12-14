import React from 'react'
import Title from '../ui/Title'
const Footer = () => {
  return (
    <div className='bg-secondary text-white'>
        <div className='container mx-auto pt-16 pb-6 ' >
        <div className='flex justify-between text-center sm:flex-row flex-col'>
            <div className='flex-1 sm:mb-0 mb-5'>
                <Title addClass="text-[30px] sm:text-white text-red-500y">Contact Us</Title>
                <div className='flex flex-col gap-y-2 mt-6'>
                   <div>
                        <i className='fa fa-map-marker'></i>
                        <span className='inline-block ml-2'>Location</span>  
                   </div>
                   <div>
                        <i className='fa fa-phone'></i>
                        <span className='inline-block ml-2'>Call +010 587 898 87 78</span>
                   </div>
                   <div>
                        <i className='fa fa-envelope'></i>
                        <span className='inline-block ml-2'>ananzaa@gmail.com</span>
                   </div>
                </div>
            </div>
            <div className='flex-1 sm:mb-0 mb-5'>
                <Title addClass="text-[42px] sm:text-white text-red-500">Feane</Title>
                   <p className='text-center mt-6'>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>
                   
                   <div className="flex justify-center gap-x-4 mt-6 mb-7">
                    <a href="" className='w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:text-primary'>
                    <i className="fab fa-facebook"></i>
                    </a>
                    <a href="" className='w-8 h-8 grid place-content-center bg-white text-secondary hover:text-primary rounded-full'>
                    <i className="fab fa-twitter"></i>
                    </a>
                    <a href="" className='w-8 h-8 grid place-content-center bg-white text-secondary hover:text-primary rounded-full'>
                    <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="" className='w-8 h-8 grid place-content-center bg-white text-secondary hover:text-primary rounded-full'>
                    <i className="fab fa-instagram"></i>
                    </a>
                    <a href="" className='w-8 h-8 grid place-content-center bg-white text-secondary hover:text-primary rounded-full'>
                    <i className="fab fa-pinterest"></i>
                    </a>
            </div>
                   
                
            </div>
            <div className='flex-1 '>
                <Title addClass="text-[30px] sm:text-white text-red-500">Opening Hours</Title>
                <div className='flex flex-col gap-y-2 mt-6'>
                   <div>
                        
                        <span className='inline-block ml-2'>Everyday</span>  
                   </div>
                   <div>
                        
                        <span className='inline-block ml-2'>10:00 Am - 10:00 Pm</span>
                   </div>
                   
                </div>
            </div>
        </div>
            <div className='mt-10'>
                <p className='text-center cursor-pointer font-bold'>© 2022 All Rights Reserved By Mustafa Erdogan</p>
            </div>
        </div>
    </div>
  )
}

export default Footer