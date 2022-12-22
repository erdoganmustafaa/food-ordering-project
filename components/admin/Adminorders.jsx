import axios from 'axios'
import React,{useEffect,useState} from 'react'
import Title from '../ui/Title'
const Adminorders = () => {
    const [orders, setOrders] = useState([]);
    const status = ["preparing","on the way","delivered"];
    useEffect(() => {
        const getOrders = async()=>{
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/orders`);
                setOrders(res.data);

            } catch (error) {
                
            }
        }
        getOrders();
    }, [])
    const handleStatus = async (id)=>{
        const item = orders.find((order)=>order._id===id);
        const currentStatus = item.status;
        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/orders/${id}`,
            {
                status:currentStatus+1
            }
            );
            setOrders([res.data,...orders.filter((order)=>order._id !== id)])
            
        } catch (error) {
            
        }
    }
    
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
                       {orders
                       .sort((a,b)=> new Date(b.createdAt)- new Date(a.createdAt))
                       .map((order)=>(
                         <tr className='border-b bg-secondary border-gray-700 ' key={order._id}>
                         <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400 flex items-center justify-center gap-2'>
                             
                             <span>{order?._id.substring(0,7)}..</span>
                         </td>
                         <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                             <span>{order.customer}</span>
                         </td>
                         <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                             ${order.total}
                         </td>
                         <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                             Cart
                         </td>
                         <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                             {status[order?.status]}
                         </td>
                         <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                            <button className='!bg-success btn-primary text-white' onClick={()=>handleStatus(order._id)} disabled={order?.status==2}>Next Stage</button>
                         </td>
                     </tr>
                       ))}
                        
                        
                    </tbody>
                </table>
        </div>
    </div>
  )
}

export default Adminorders