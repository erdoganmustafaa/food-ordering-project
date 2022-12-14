import React from 'react'
import Image from 'next/image'
import {RiShoppingCart2Fill} from "react-icons/ri";
import Link from 'next/link';
const MenuItem = ({productList}) => {
  return (
    <div className='bg-secondary rounded-3xl mb-10 f'>
        <div className='w-full bg-[#f1f2f3] h-[210px] flex justify-center items-center  rounded-bl-[46px] rounded-tl-2xl rounded-tr-2xl'>
        <Link href="/product">
            <div className='relative w-36 h-36 hover:scale-125 transition-all duration-1000 cursor-pointer'>
                <Image src={productList.img} alt='' layout='fill' className='w-full'/>
            </div>
        </Link>
        </div>
        
        <div className='p-[25px] text-white '>
        <h4 className='text-2xl font-bold'>{productList.title}</h4>
        <p className='text-[14px] mt-5 mb-5'>
           {productList.description}
        </p>
        <div className='flex justify-between'>
            <span className='text-white'>${productList.prices[0]}</span>
            
            <button className='btn-primary w-10 h-10 rounded-full p-0 grid place-content-center'><RiShoppingCart2Fill/></button>
            
        </div>
        </div>
    </div>
  )
}

export default MenuItem