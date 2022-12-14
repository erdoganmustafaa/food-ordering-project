import React,{useState} from 'react'
import Title from "../../components/ui/Title"
import Image from 'next/image';

import { addProduct } from '../../redux/cartSlice';
import { useSelector,useDispatch } from 'react-redux';

const SauceItems = [
    {
        id:1,
        name:"Ketchup",
        price:1
    },
    {
        id:2,
        name:"Mayonnaise",
        price:1
    },
    {
        id:3,
        name:"Hot Sauce",
        price:2
    },
    {
        id:4,
        name:"Barbecue Sauce",
        price:2
    },

]

const foodItems = [
    {
        id:1,
        name:"Pizza 1",
        price:10,
        desc:"Lorem Defdfsd weqwqelkrwqkljm wqrljkqklrmö wjqrmkw rwqklwqmklrkwmlqkmwqrkmr qwrjwqrklmöqwrjwqm rwqjkr",
        extraOptions:[
            {
                id:1,
                name:"Extra 1",
                price:1
            }
        ]
    },
]
    


const Index = () => {
    const [prices,setPrices] = useState([10,20,30,40]);
    const [price,setPrice] = useState(prices[0]);
    const [size,setSize] = useState(0);
    const [extraItems,setExtraItems] = useState(SauceItems);
    const [extras,setExtras] = useState([])

    const cart = useSelector((state)=> state.cart)
    const dispatch = useDispatch();
    

    const handleSize = (sizeIndex) =>{
        const difference = prices[sizeIndex] - prices[size];
        setSize(sizeIndex);
        changePrice(difference);
        
    }

    const changePrice = (number) =>{
        setPrice(price+number)
    }
    const handleChange = (e,item) =>{
        const checked = e.target.checked;

        if(checked){
            changePrice(item.price)
            setExtras([...extras,item])
        }
        else{
            setPrice(price-item.price)
            setExtras(extras.filter((extra)=>extra.id !==item.id))
        }
    }
    const handleClick = ()=>{
        dispatch(addProduct({...foodItems[0],extras,price,quantity:1}))
    }



    return (
        <div className='sm:flex flex-col justify-center items-center h-screen gap-8 py-20'>
            <div className='relative md:flex-1 md:w-[100%] md:h-[100%] w-36 h-36 mx-auto cursor-pointer'>
                <Image src="/images/f1.png" alt="" layout='fill' objectFit='contain'  />
            </div>
            <div className='sm:mt-10 mt-20'>
                <Title addClass="sm:text-left text-center text-6xl sm:-mt-0 -mt-10">Good Pizza</Title>
                <span className='text-red-700 text-2xl font-bold underline my-4 sm:mx-0 ml-40 inline-block '>
                    ${price}
                </span>
                <p className='text-[14px] my-4 sm:w-2/3 w-full sm:ml-0 ml-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odit quibusdam exercitationem error nemo totam reprehenderit itaque deserunt molestiae cum?</p>
                <div>
                    <h3 className='text-[20px] font-bold sm:ml-0 ml-4'>Choose the Pizza size</h3>
                    <div className='flex items-center sm:gap-16 gap-12 sm:ml-0 ml-3 cursor-pointer'>
                        <div className='relative w-8 h-8 active:bg-red-600' onClick={()=>handleSize(0)}>
                        <Image src="/images/size.png" alt="" layout='fill' />
                        <span className='absolute -top-2 -right-4 text-[12px] bg-primary rounded-md font-medium px-[5px]'>Small</span>
                        </div>
                        <div className='relative w-12 h-12' onClick={()=>handleSize(1)}>
                        <Image src="/images/size.png" alt="" layout='fill' />
                        <span className='absolute -top-2 -right-4 text-[12px] bg-primary rounded-md font-medium px-[5px]'>Medium</span>
                        </div>
                        <div className='relative w-16 h-16' onClick={()=>handleSize(2)}>
                        <Image src="/images/size.png" alt="" layout='fill' />
                        <span className='absolute -top-2 -right-4 text-[12px] bg-primary rounded-md font-medium px-[5px]'>Large</span>
                        </div>
                        <div className='relative w-24 h-24' onClick={()=>handleSize(3)}>
                        <Image src="/images/size.png" alt="" layout='fill' />
                        <span className='absolute -top-2 -right-4 text-[12px] bg-primary rounded-md font-medium px-[5px]'>X-Large</span>
                        </div>
                    </div>
                </div>
                <div className='sm:ml-0 ml-4 flex gap-x-4 my-8'>
                    {
                        extraItems.map((item)=>(
                        <label className='flex items-center sm:flex-row flex-col' key={item.id} onChange={(e)=>handleChange(e,item)}>
                            <input type="checkbox" className='h-4 w-4 mx-1 accent-primary'/>
                            <span className='text-sm font-semibold sm:text-start text-center sm:mt-0 mt-3'>{item.name+" "}<span className='font-sm text-red-700'>{"$"+item.price}</span></span>
                        </label>
                    
                        ))
                    }
                </div>
                <button className='btn-primary sm:ml-0 ml-32 sm:mb-0 mb-10 hover:scale-110 text-[14px] transition-all duration-1000'
                onClick={handleClick}
                >
                Add to cart</button>
            </div>
        </div>
      )
}

export default Index