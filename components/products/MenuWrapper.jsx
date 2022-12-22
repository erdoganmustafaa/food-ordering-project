import React from 'react'
import Title from '../ui/Title';
import MenuItem from "../products/MenuItem"
import { useState,useEffect } from 'react';

const MenuWrapper = ({categoryList,productList}) =>{
    const [active,setActive]= useState(0);
    const [filter, setFilter] = useState([]);
    useEffect(()=>{
        setFilter(productList.filter((product)=>product.category === categoryList[active].title.toLowerCase()))
    },[categoryList,productList,active])
   
    return(
        <div className='container mx-auto my-10'>
            <div className='flex flex-col items-center  w-full'>
                <Title addClass="text-[40px]">Our Menu</Title>
                <div className='mt-10'>
                {
                    categoryList && categoryList.map((category,index)=>(
                        
                        <span className={`px-5 ml-3 py-1 ${index===active && "bg-secondary text-white"} rounded-3xl transition-all cursor-pointer`} 
                        onClick={()=>setActive(index)} key={category._id}>
                        {category.title}
                        </span>
                        
                    ))
                }
               
                </div>
            </div>
            
            <div className='mt-10 sm:grid grid-cols-3 gap-4 '>
            {
                
                filter.map((product)=>(
                   
                    <span key={product._id}>
                    <MenuItem product={product}/>
                    </span>
                    
                
                    
                ))
                
            }
            
             </div>
            
            
        </div>
    )
}
export default MenuWrapper;