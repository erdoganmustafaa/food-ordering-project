import React,{useState} from 'react'
import Title from "../../components/ui/Title"
import Image from 'next/image';

import { addProduct } from '../../redux/cartSlice';
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import {useRouter} from "next/router";


    


const Index = ({food}) => {
    const [prices,setPrices] = useState(food.prices);
    const [price,setPrice] = useState(food.prices[0]);
    const [size,setSize] = useState(0);
    const [clicked,setClicked] = useState(false);
    const cart = useSelector((state)=> state.cart)
    const dispatch = useDispatch();
    const router = useRouter();
    

    const handleSize = (sizeIndex) =>{  
        const difference = price[sizeIndex] - prices[size];
        setSize(sizeIndex);
        changePrice(difference);
        
    }

    const changePrice = (number) =>{
        if(clicked){
            return;
        }
        else{
            setPrice(price+number)
            setClicked(false);
        }
        
    }
    const handleChange = (e,item) =>{
        const checked = e.target.checked;

        if(checked){
            changePrice(item.price)
            
        }
        else{
            setPrice(price-item.price)
            
        }
    }
    const handleClick = ()=>{
        dispatch(addProduct({...food,price,quantity:1}))
        router.push("/cart");
    }



    return (
        <div className='sm:flex flex-col justify-center items-center h-screen gap-8 py-28 text-center'>
            <div className='relative md:flex-1 md:w-[100%] md:h-[100%] w-24 h-24  cursor-pointer'>
                <Image src={food?.img} alt="" layout='fill' objectFit='contain'  />
            </div>
            <div className='sm:mt-10 mt-20 mx-auto'>
                <Title addClass="text-center text-6xl sm:-mt-0 -mt-10">{food?.title}</Title>
                
                <span className='text-red-800 text-2xl font-bold underline my-4 sm:mx-auto ml-40 inline-block '>
                    $ {price}
                </span>
                <p className='text-[18px] my-4 w-[1000px] sm:ml-0 ml-5 '>{food?.description}</p>
                {
                    food.category==="pizza" && 
                    <div>
                    <h3 className='text-[16px] font-bold sm:ml-0 ml-4'>Choose the Pizza size</h3>
                    <div className='flex items-center sm:gap-16 gap-12 sm:ml-0 ml-3 cursor-pointer justify-center'>
                        <div className='relative w-8 h-8 active:bg-red-600' onClick={()=>{changePrice(0);setClicked(false);}}>
                        <Image src="/images/size.png" alt="" layout='fill' />
                        <span className='absolute -top-2 -right-4 text-[12px] bg-primary rounded-md font-medium px-[5px]'>Small</span>
                        </div>
                        <div className='relative w-12 h-12' onClick={()=>{changePrice(10);setClicked(false);} } >
                        <Image src="/images/size.png" alt="" layout='fill' />
                        <span className='absolute -top-2 -right-4 text-[12px] bg-primary rounded-md font-medium px-[5px]'>Medium</span>
                        </div>
                        <div className='relative w-16 h-16' onClick={()=>{changePrice(15);setClicked(false);}}>
                        <Image src="/images/size.png" alt="" layout='fill'/>
                        <span className='absolute -top-2 -right-4 text-[12px] bg-primary rounded-md font-medium px-[5px]'>Large</span>
                        </div>
                        <div className='relative w-24 h-24' onClick={()=>{changePrice(20);setClicked(false);}}>
                        <Image src="/images/size.png" alt="" layout='fill' />
                        <span className='absolute -top-2 -right-4 text-[12px] bg-primary rounded-md font-medium px-[5px]'>X-Large</span>
                        </div>
                    </div>
                </div>
                }
                
                <button className='btn-primary sm:ml-0 ml-32 sm:mb-0 mb-10 hover:scale-110 text-[14px] transition-all duration-1000 mt-9'
                onClick={handleClick}
                >
                Add to cart</button>
            </div>
        </div>
      )
}
export const getServerSideProps = async ({params})=>{

    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/${params.id}`);

    return{
        props:{
            food:res.data ? res.data : null
        }
    }
}
export default Index