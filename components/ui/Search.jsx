import React from 'react'
import Image from 'next/image';
import OutsideClickHandler from 'react-outside-click-handler';
import Title from '../ui/Title'
import {GiCancel} from "react-icons/gi";
import { useState,useEffect } from 'react';
import axios from 'axios';
import {useRouter} from "next/router"
const Search = ({setIsSearchModal}) => {
    const [products,setProducts] = useState([]);
    const [search,setSearch] = useState("");
    const [filtered,setFiltered] = useState([])
    const router = useRouter();
    useEffect(() => {
        const getProducts = async ()=>{
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
                setProducts(res.data);
                setFiltered(res?.data.slice(0,5))
            } 
            catch (error) {
                console.log(error)
            }
        }
        getProducts();
       
    },[])
    const handleSearch = (e)=>{
        setSearch(e.target.value);
        const searchFilter = products.filter((product)=>product.title.toLowerCase().includes(e.target.value.toLowerCase()))
        .slice(0,5);
        setFiltered(searchFilter)
        
    }
  return (
    <div className='fixed top-0 left-0 w-screen h-screen z-50 after:content-[""] after:w-screen after:h-screen
    after:bg-white after:absolute after:opacity-70 grid place-content-center '>
    <OutsideClickHandler onOutsideClick={()=>setIsSearchModal(false)}>
        <div className='w-full h-full grid place-content-center z-50 '>
            <div className="relative z-50 md:w-[700px] w-[370px] border-2 p-5 rounded-xl bg-white">
                <Title addClass="text-[50px] text-center">Title</Title>
                <input type="text" placeholder='Search..' className='border w-full p-3 mt-5 border-black rounded-md outline-cyan-700'
                onChange={handleSearch} value={search}/>
                <div>
                    {products.length>0 ? (
                        <ul className='mt-10'>
                        {filtered.length>0 ? filtered.map((product)=>(
                            <li className='flex items-center justify-between py-3 px-5 rounded-md my-5 cursor-pointer hover:bg-primary'key={product._id}
                            onClick={()=>{router.push(`/product/${product._id}`);setIsSearchModal(false)}}>
                            <div>
                                <Image src={product?.img} width={60} height={60} alt="Prouct" />  
                            </div>
                            <span className='font-bold text-center'>{product?.title}</span>
                            <span className='font-bold'>${product?.prices[0]}</span>
                        </li>
                        ))
                    :(
                        <div className="text-center font-semibold">No Result Found</div>
                    )
                    }
                       
                    </ul>
                    )
                    :(
                    ""
                )}
                    <button className='absolute top-4 right-4' onClick={()=>setIsSearchModal(false)}>
                        <GiCancel size={30} className="hover:text-primary"/>
                    </button>
                </div>
            </div>
        </div>
           
    </OutsideClickHandler>
    </div>
  )
}

export default Search