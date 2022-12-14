import React from 'react'
import Image from "next/image";
import Title from "../../components/ui/Title"
import { useSelector,useDispatch } from 'react-redux';
import { reset } from '../../redux/cartSlice';

const Cart = () => {
    const cart = useSelector((state)=>state.cart);
    const dispatch = useDispatch();
  return (
    <div className='min-h-[calc(100vh_-_433px)]'>
        <div className='flex justify-between md:flex-row flex-col '>
            <div className='min-h-[calc(100vh_-_433px)] flex items-center flex-1 text-white p-10 overflow-x-scroll '>
                <table className='text-center text-sm w-full min-w-[1000px] '>
                    <thead className='uppercase bg-gray-700 text-white text-xs  '>
                        <tr >
                        <th scope='col' className='py-3 px-6'>PRODUCT</th>
                        <th scope='col' className='py-3 px-6'>EXTRAS</th>
                        <th scope='col' className='py-3 px-6'>PRICE</th>
                        <th scope='col' className='py-3 px-6'>QUANTITY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.products.map((product)=>(
                                <tr className='border-b bg-secondary border-gray-700 ' key={product.id}>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400 flex items-center justify-center gap-2'>
                                <Image src="/images/f1.png" alt='' width={40} height={40}/>
                                <span>{product.name}</span>
                                </td>
                                
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                {
                                    product.extras.map((item)=>(
                                        <span key={item.id}>{item.name}, </span>
                                    ))
                                }
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                {product.price}
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                {product.quantity}
                            </td>
                        </tr>
                        ))}   
                    </tbody>
                </table>
            </div>
            <div className='bg-secondary min-h-[calc(100vh_-_433px)] flex flex-col  justify-center text-white p-16'>
                <Title addClass="text-[40px]">CART TOTAL</Title>
                <div className='flex flex-col gap-y-4 mt-8 mb-4'>
                    <span>Subtotal: $ {cart.total}</span>
                    <span>Discount: $0.00</span>
                    <span>Total: $ {cart.total}</span>

                </div>
                <button className='btn-primary mt-4' onClick={()=>dispatch(reset())}>Checkout Now</button>
            </div>
        </div>
    </div>
  )
}

export default Cart