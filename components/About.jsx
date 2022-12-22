import React from 'react'
import Image from 'next/image'
import Title from './ui/Title'
const About = () => {
  return (
    <div className='bg-secondary py-14'>
        <div className='container mx-auto flex items-center text-white gap-20 sm:flex-nowrap flex-wrap '>
            <div>
            <div className='relative w-[345px] h-[500px] '>
                <Image src="/images/about-img.png" alt='' layout='fill'/>
            </div>
            </div>
            
            <div className='sm:mx-auto mx-5'>
                <Title addClass="sm:text-[40px] text-[52px]">We are Feane</Title>
                <p className='my-6'>
                About Feane
                </p>
                <button className='btn-primary'>Read more</button>
            </div>
        </div>
    </div>
  )
}

export default About