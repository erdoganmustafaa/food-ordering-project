import React from 'react'
import Title from '../ui/Title'
const Order = () => {
  return (
   
    <div className='flex-1 '>
        <Title addClass="text-[40px] sm:p-10 p-0 sm:text-left text-center">Orders</Title>
        <div className='my-5 sm:w-full w-auto overflow-x-auto mx-auto'>
        <table className='text-center text-sm  cursor-pointer min-w-[1000px] mx-auto sm:ml-11 ml-0'>
                    <thead className='uppercase bg-gray-700 text-white text-xs '>
                        <tr >
                        <th scope='col' className='py-3 px-6'>ID</th>
                        <th scope='col' className='py-3 px-6'>ADRESS</th>
                        <th scope='col' className='py-3 px-6'>DATE</th>
                        <th scope='col' className='py-3 px-6'>TOTAL</th>
                        <th scope='col' className='py-3 px-6'>STATUS</th>
                        </tr>
                    </thead>
                    <tbody className='text-white'>
                        <tr className='border-b bg-secondary border-gray-700 '>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400 flex items-center justify-center gap-2'>
                                
                                <span>61758..</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                <span>Manisa</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                24/11/2022
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                $18
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                Preparing
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
        </div>
    </div>
  )
}

export default Order