import React from 'react'
import Title from '../ui/Title'
const Adminorders = () => {
  return (
    <div className=''>
        <Title addClass="text-[40px] p-10">Orders</Title>
        <div className='sm:w-full w-auto overflow-x-auto mx-auto'>
        <table className='text-center text-sm  cursor-pointer min-w-[1000px] mx-auto ml-10'>
                    <thead className='uppercase bg-gray-700 text-white text-xs '>
                        <tr >
                        <th scope='col' className='py-3 px-6'>PRODUCT</th>
                        <th scope='col' className='py-3 px-6'>CUSTOMER</th>
                        <th scope='col' className='py-3 px-6'>TOTAL</th>
                        <th scope='col' className='py-3 px-6'>PAYMENT</th>
                        <th scope='col' className='py-3 px-6'>STATUS</th>
                        <th scope='col' className='py-3 px-6'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody className='text-white'>
                        <tr className='border-b bg-secondary border-gray-700 '>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400 flex items-center justify-center gap-2'>
                                
                                <span>61758..</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                <span>Mustafa Erdoğan</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                $10
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                Credit Cart
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                Preparing
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                               <button className='!bg-success btn-primary text-white'>Next Stage</button>
                            </td>
                        </tr>
                        <tr className='border-b bg-secondary border-gray-700 '>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400 flex items-center justify-center gap-2'>
                                
                                <span>61758..</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                <span>Mustafa Erdoğan</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                $10
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                Credit Cart
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                Preparing
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                               <button className='!bg-success btn-primary text-white'>Next Stage</button>
                            </td>
                        </tr>
                        <tr className='border-b bg-secondary border-gray-700 '>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400 flex items-center justify-center gap-2'>
                                
                                <span>61758..</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                <span>Mustafa Erdoğan</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                $10
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                Credit Cart
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                Preparing
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                               <button className='!bg-success btn-primary text-white'>Next Stage</button>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
        </div>
    </div>
  )
}

export default Adminorders