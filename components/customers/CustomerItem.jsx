import React from 'react'
import Image from 'next/image'
const CustomerItem = ({imgSrc,customerName}) => {
  return (
    <div className='mt-5 '>
        <div className='p-6 bg-secondary text-white rounded-[8px] mx-4'>
            <div className='relative w-[115px] h-[115px] border-4 border-primary rounded-full mx-auto'>
            <Image src={imgSrc} alt='' layout='fill' objectFit='contain' className='rounded-full'/>
        </div>
            <p className='text-center mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid perspiciatis natus vero qui, ab recusandae excepturi?
             Iusto beatae tenetur cum eligendi alias maiores, rem voluptatum nisi. Quasi aliquid assumenda temporibus.
            </p>
            <div className='flex flex-col mt-10 items-start '>
                <span className='text-lg font-semibold mb-3'>-{customerName}</span>
                <span className='text-[12px]'>Magna aliqua</span>
            </div>
        </div>
        
    </div>
  )
}

export default CustomerItem