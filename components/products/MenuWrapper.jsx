import React from 'react'
import Title from '../ui/Title';
import MenuItem from "../products/MenuItem"
import { useState } from 'react';

const MenuWrapper = ({categoryList,productList}) =>{
    const [active,setActive]= useState(0);
    const [filter, setFilter] = useState([]);
    console.log(productList);
    return(
        <div className='container mx-auto my-10'>
            <div className='flex flex-col items-center  w-full'>
                <Title addClass="text-[40px]">Our Menu</Title>
                <div className='mt-10'>
                {
                    categoryList && categoryList.map((category,index)=>(
                        <button className={`px-5 ml-3 py-1 ${index===active && "bg-secondary text-white"} rounded-3xl transition-all`} 
                        key={index} onClick={()=>setActive(index) }>
                        {category.title}
                        </button>
                    ))
                }
               
                </div>
            </div>
            
            <div className='mt-10 sm:grid grid-cols-3 gap-4 '>
            {
                
                productList.map((product)=>(
                   <>
                    <MenuItem key={product._id} productList={product}/>
                    </>
                    
                ))
                
            }
            
             </div>
            
            
        </div>
    )
}
export default MenuWrapper;