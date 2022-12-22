import React,{useState} from 'react'
import Image from 'next/image'
import OutsideClickHandler from 'react-outside-click-handler';
import Title from '../ui/Title'
import {GiCancel} from "react-icons/gi";
import axios from 'axios';
import {toast} from "react-toastify";
import { useEffect } from 'react';
const AddProduct = ({setIsProductModal}) => {
    const [file, setFile] = useState()
    const [srcImg, setSrcImg] = useState()
    const [showDeleteImgBtn,setShowDeleteImgBtn] = useState(false);

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [category,setCategory] = useState("pizza");
    const [prices,setPrices] = useState([]);
    /*const [extra,setExtra] = useState([]);*/
    /*const [extraOptions,setExtraOptions] = useState([]);*/
    const [categories,setCategories] = useState([]);
    const [products,setProducts] = useState([{}]);
    useEffect(()=>{
        const getCategories = async ()=>{
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`)
                setCategories(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getCategories();
    },[])
    
    /*const handleExtra = ()=>{
        if(extra){
            if(extra.text && extra.price){
                setExtraOptions([...extraOptions,extra]);
            }
        }
       
    }
    */
    const handleOnChange = (changeEvent)=>{
        const reader = new FileReader(); // Dosyanın yolunu bulmak için 
        reader.onload = function(onLoadEvent){
            setSrcImg(onLoadEvent.target.result);
            setFile(changeEvent.target.files[0]);
        }
        reader.readAsDataURL(changeEvent.target.files[0]);
        setShowDeleteImgBtn(true);
        
    }
    const handleOnCreate = async ()=>{
        
        
            const data = new FormData();
            data.append("file",file); // yukarda setFile dediğimiz dosya yolunu belirttiğimiz değişken
            data.append("upload_preset","food-ordering");
            try {
                const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/merdogan/image/upload",data);
                const { url } = uploadRes.data;
                const newProduct = {
                    img: url,
                    title,
                    description,
                    category: category.toLowerCase(),
                    prices,
                  };
                  
                  const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/products`,newProduct);
                  if(response.status===201){
                    setIsProductModal(false);
                    toast.success("Product successfulyy added!")
                    setProducts([...products,newProduct]);
                    
                  }
                  
            } catch (error) {
                console.log(error);
            }
            
    }
    const changePrice=(e,index)=>{
        const currentPrices = prices;
        currentPrices[index] = e.target.value;
        setPrices(currentPrices);
    }
  return (
    <div className='fixed top-0 left-0 w-screen h-screen z-50 after:content-[""] after:w-screen after:h-screen
    after:bg-white after:absolute after:opacity-70 grid place-content-center '>
    <OutsideClickHandler onOutsideClick={()=>setIsProductModal(false)}>
        <div className='w-full h-full grid place-content-center z-50  '>
            <div className="relative z-50 md:w-[700px] w-[370px] border-2 px-12 py-10 rounded-xl bg-white overflow-auto">
                <Title addClass="text-[50px] text-center">Add a New Product</Title>


                <div className='flex flex-col text-lg mt-6 '>
                    <b className='mb-2'>Choose an image</b>
                    <input type="file" className='text-[12px]' onChange={(e)=>handleOnChange(e)}/>
                   
                    {
                        showDeleteImgBtn &&
                        <>
                         <Image src={srcImg} alt='' className='w-[100px] h-[100px] mx-auto'/>
                         <button className='btn-primary mt-2' onClick={(e)=>setShowDeleteImgBtn(false)}>Delete Image</button>
                    </>
                    }
                        
                        
                   
                </div>
                <div className='flex flex-col text-lg mt-4'>
                    <span className='mb-2 font-semibold'>Title</span>
                    <input type="text" className='border h-9 text-xs px-2 py-2 outline-none' placeholder='Write a title..'
                    onChange={(e)=>setTitle(e.target.value)}
                    />
                </div>
                <div className='flex flex-col text-lg mt-4'>
                    <span className='mb-2 font-semibold'>Description</span>
                    <textarea className='border py-2 text-xs px-2 outline-none resize-none' placeholder='Write a description..' rows={5}
                    onChange={(e)=>setDescription(e.target.value)}
                    />
                </div>
                <div className='flex flex-col text-lg mt-4'>
                    <span className='mb-2 font-semibold'>Select Category</span>
                    <select className='border text-xs px-2 py-2 outline-none' placeholder='Write a title..'
                    onChange={(e)=>setCategory(e.target.value)}
                    >
                        {
                            categories.length>0 && 
                                categories.map((category,index)=>(
                                    <option value={category.title.toLowerCase()} key={index}>{category.title.toLowerCase()}</option>
                                ))
                            
                        }
                        
                        
                    
                    </select>
                </div>
                <div className='flex flex-col text-lg mt-4'>
                    <span className='mb-2 font-semibold'>Prices</span>
                    
                      
                    
                    <div className='flex justify-between'>
                        <input type="number" className='border-b-2 pl-0 outline-none text-sm w-36' placeholder='Price'
                        onChange={(e)=>changePrice(e,0)}
                        />
                    </div>
                    
                    

                </div>
                {/* ExtraOptions kısmı

                <div className='flex flex-col text-lg mt-4 w-full'> 
                    <span className='mb-2 font-semibold'>Extras</span>
                    <div className='flex gap-7'>
                        <input type="text" className='border-b-2 pl-0 outline-none text-sm w-36' placeholder='Item'
                        name="text" onChange={(e)=>setExtra({...extra,[e.target.name]:[e.target.value]})}
                        />
                        <input type="number" className='border-b-2 p-1 pl-0 outline-none text-sm px-1 w-36' placeholder='Price'
                        name="price" onChange={(e)=>setExtra({...extra,[e.target.name]:[e.target.value]})}/>
                        <button className='btn-primary ml-auto' onClick={handleExtra}>Add</button>
                    </div>

                </div>  
                */}
                
                <div className='flex justify-end mt-4'>
                <button className='btn-primary bg-success' onClick={handleOnCreate}>Create</button>
                </div>




                <div>
                    <button className='absolute top-4 right-4' onClick={()=>setIsProductModal(false)}>
                        <GiCancel size={30} className="hover:text-primary"/>
                    </button>
                </div>
            </div>
        </div>
           
    </OutsideClickHandler>
    </div>
  )
}

export default AddProduct