import React from 'react'
import Title from '../ui/Title'
import Image from 'next/image'
const Adminproducts = ({setIsProductModal}) => {
  return (
    <div className=''>
        <Title addClass="text-[40px] p-10">Products</Title>
        <div className='ml-10 mb-8'>
        <button className="w-11 h-10 text-black bg-primary rounded-full " onClick={()=>setIsProductModal(true)}><span className='text-[24px]'>+</span></button>
        <span className='text-[18px] ml-2 font-bold text-red-700'> Add a Product</span>
        </div>
        
        <div className=' sm:w-full w-auto overflow-x-auto mx-auto'> 
        <table className='text-center text-sm  cursor-pointer min-w-[1000px] mx-auto sm:ml-10 ml-0'>
                    <thead className='uppercase bg-gray-700 text-white text-xs '>
                        <tr >
                        <th scope='col' className='py-3 px-6'>IMAGE</th>
                        <th scope='col' className='py-3 px-6'>ID</th>
                        <th scope='col' className='py-3 px-6'>TITLE</th>
                        <th scope='col' className='py-3 px-6'>PRICE</th>
                        <th scope='col' className='py-3 px-6'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody className='text-white'>
                        <tr className='border-b bg-secondary border-gray-700 '>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400 flex items-center justify-center gap-2'>
                                
                                <Image src="/images/f1.png" width={50} height={50} alt=''/>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                <span>634748..</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                Good Pizza
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                $18
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                <button className='btn-primary !bg-red-700 text-white'>Delete</button>
                            </td>
                        </tr>
                        <tr className='border-b bg-secondary border-gray-700 '>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400 flex items-center justify-center gap-2'>
                                
                                <Image src="/images/hamburger1.png" width={50} height={50} alt=''/>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                <span>634748..</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                Hamburger
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                $25
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                <button className='btn-primary !bg-red-700 text-white' >Delete</button>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
        </div>
    </div>
  )
}

export default Adminproducts