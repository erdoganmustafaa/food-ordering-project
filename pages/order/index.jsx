import React from 'react'
import Image from "next/image"

const Order = () => {
  return (
    
        <div className='min-h-[calc(100vh_-_433px)] flex justify-between  flex-col '>
            <div className=' flex items-center flex-1 text-white  overflow-x-auto '>
                <table className='text-center text-sm w-full min-w-[500px] max-w-[1400px] mx-auto cursor-pointer'>
                    <thead className='uppercase bg-gray-700 text-white text-xs  '>
                        <tr >
                        <th scope='col' className='py-3 px-6'>ORDER ID</th>
                        <th scope='col' className='py-3 px-6'>CUSTOMER</th>
                        <th scope='col' className='py-3 px-6'>ADRESS</th>
                        <th scope='col' className='py-3 px-6'>TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b bg-secondary border-gray-700 '>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400 flex items-center justify-center gap-2'>
                                685458656..
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                <span>Mustafa Erdoğan</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                Manisa
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>$20</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        
            <div className='flex justify-around  items-center w-full bg-primary py-10  rounded-xl mb-5 max-w-[1400px] mx-auto'>
            <div className='flex items-center justify-center flex-col hover:opacity-50 hover:scale-110 duration-1000 cursor-pointer animate-bounce'>
            <Image src="/images/paid.png" alt="" width={40} height={40} />
            <span className='mt-2'>Payment</span>
            </div>
            <div className='flex items-center justify-center flex-col hover:opacity-50 hover:scale-110 duration-1000 cursor-pointer'>
            <Image src="/images/bake.png" alt="" width={40} height={40} />
            <span className='mt-2'>Preparing</span>
            </div>
            <div className='flex items-center justify-center flex-col hover:opacity-50 hover:scale-110 duration-1000 cursor-pointer'>
            <Image src="/images/bike.png" alt="" width={40} height={40} />
            <span className='mt-2'>On the way</span>
            </div>
            <div className='flex items-center justify-center flex-col hover:opacity-50 hover:scale-110 duration-1000 cursor-pointer '>
            <Image src="/images/delivered.png" alt="" width={40} height={40} />
            <span className='mt-2'>Delivered</span>
            </div>
        </div>
        </div>
        
    
  )
}

export default Order