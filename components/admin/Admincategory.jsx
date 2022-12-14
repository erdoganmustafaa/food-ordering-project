import Input from '../form/Input'
import React,{useState} from 'react'
import Title from '../ui/Title'
import { useEffect } from 'react';
import axios from 'axios';
import {toast} from "react-toastify";
const Admincategory = () => {
    const [categories,setCategories] = useState([]);
    const [inputText,setInputText] = useState();

    useEffect(()=>{
        const getCategories= async ()=>{
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
                setCategories(res?.data);
            } catch (error) {
                console.log(error);
            }
        }
        getCategories();
       
    },[])
    const handleCreate = async (e)=>{
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/categories`,{title:inputText});
            setCategories([...categories,res.data]);
            setInputText("");
            toast.success(`${inputText} category successfully added`);

        } catch (error) {
            console.log(error);
        }
    }
    const handleDelete = async (id)=>{
      
        try {
            if(confirm("Are you sure you want to delete this category?")){
                await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`);
                setCategories(categories.filter((cat)=>cat._id !== id));
                toast.success(`Category successfully deleted.`)
            }
            

        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='lg:p-8 lg:mt-0 mt-5 max-h-[550px] min-w-[1200px]  !overflow-auto'>
        <Title addClass="text-[40px]">Categories</Title>
        <div className='mt-5 '>
            <div className='flex sm:flex-row flex-col gap-4 justify-center items-center sm:min-w-[1000px] '>
                <Input placeholder="Add a new category" onChange={(e)=>setInputText(e.target.value)} value={inputText} />
                <button className='btn-primary w-24 h-10 text-center' onClick={handleCreate}>Add</button>
            </div>
        </div>
        <div className='mt-10  '>
            {categories.map((category)=>(
                <div className='flex justify-between items-center mt-7 border-b-2 mr-3 ' key={category._id}>
                <b className='text-xl mb-2'>{category.title}</b>
                
                <button className='btn-primary bg-red-700 text-white mb-2' onClick={()=>handleDelete(category._id)}>Delete</button>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Admincategory