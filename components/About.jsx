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
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, 
                or randomised words which don't look even slightly believable. 
                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All
                </p>
                <button className='btn-primary'>Read more</button>
            </div>
        </div>
    </div>
  )
}

export default About