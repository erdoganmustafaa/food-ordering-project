import React from 'react'
import Image from "next/image";
import Title from "../../components/ui/Title"
import { useSelector,useDispatch } from 'react-redux';
import { reset } from '../../redux/cartSlice'
import axios from 'axios';
import {useSession} from "next-auth/react"
import {toast} from "react-toastify"
import {useRouter} from "next/router";
const Cart = ({userList}) => {
    const cart = useSelector((state)=>state.cart);
    const dispatch = useDispatch();
    const {data:session} = useSession();
    const user = userList?.find((user)=>user.email===session?.user?.email);
    const router = useRouter();

    const newOrder = {
        customer:user?.fullName,
        adress:user?.adress? user?.adress : "No adress",
        total:cart.total,
        status:0,
        method:0,
    }
    const createOrder = async ()=>{
        try {
            if(session){
                if(confirm("Are you sure to order?")){
                    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/orders`,newOrder);
                    dispatch(reset());
                    toast.success("Order created successfully")
                    if(res.status===201){
                        router.push(`/order/${res.data._id}`);
                    }
                }
            }
            else{
                toast.error("Please login first")
            }
        } catch (error) {
            console.log(error);
        }
    }
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
                                <tr className='border-b bg-secondary border-gray-700 ' key={product._id}>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400 flex items-center justify-center gap-2'>
                                <Image src={product.img} alt='' width={40} height={40}/>
                                <span>{product.name}</span>
                                </td>
                                
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                <span>Ketchup,Mayonnaise</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                ${product.price}
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
                <button className='btn-primary mt-4' onClick={createOrder}>Checkout Now</button>
            </div>
        </div>
    </div>
  )
}
export const getServerSideProps = async ()=>{

    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/`);

    return{
        props:{
            userList:res.data ? res.data : null
        }
    }
}
export default Cart