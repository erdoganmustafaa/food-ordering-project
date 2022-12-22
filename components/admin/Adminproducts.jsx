import React from 'react'
import Title from '../ui/Title'
import Image from 'next/image'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
const Adminproducts = ({setIsProductModal}) => {
    const [products, setProducts] = useState([])
    const getProducts = async ()=>{
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`)
            setProducts(res.data);
        } catch (error) {
            
        }
      }
    useEffect(() => {
     
      getProducts();
      
    }, [])
    const handleDelete = async(id)=>{
        try {
            if(confirm("Are you sure you want to delete this product?")){
                const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`)
                if(res.status===200){
                    toast.success("Product successfully deleted!")
                    getProducts();
                }
            }
        } catch (error) {
            
        }
    }
    
  return (
    <div className=''>
        <Title addClass="text-[40px] p-10">Products</Title>
        <div className='ml-10 mb-8'>
        <button className="w-11 h-10 text-black bg-primary rounded-full " onClick={()=>setIsProductModal(true)}><span className='text-[24px]'>+</span></button>
        <span className='text-[18px] ml-2 font-bold text-red-700'> Add a Product</span>
        </div>
        
        <div className=' sm:w-full w-auto mx-auto my-20 -mt-3 max-h-[500px] overflow-auto '> 
        <table className='text-center text-sm cursor-pointer min-w-[1000px] mx-auto sm:ml-10 ml-0 '>
                    <thead className='uppercase bg-gray-700 text-white text-xs '>
                        <tr >
                        <th scope='col' className='py-3 px-6'>IMAGE</th>
                        <th scope='col' className='py-3 px-6'>ID</th>
                        <th scope='col' className='py-3 px-6'>TITLE</th>
                        <th scope='col' className='py-3 px-6'>PRICE</th>
                        <th scope='col' className='py-3 px-6'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody className='text-white !max-h-[400px] overflow-auto'>
                        {products.length>0 &&
                        products.map((product)=>(
                            <tr className='border-b bg-secondary border-gray-700' key={product._id}>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400 flex items-center justify-center gap-2'>
                                
                                <Image src={product.img} width={50} height={50} alt=''/>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                <span>{product._id}</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                {product.title}
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                {product.prices[0]}
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-gray-400'>
                                <button className='btn-primary !bg-red-700 text-white' onClick={()=>handleDelete(product._id)}>Delete</button>
                            </td>
                        </tr>
                        ))
                        }
                      
                        
                    </tbody>
                </table>
        </div>
    </div>
  )
}

export default Adminproducts