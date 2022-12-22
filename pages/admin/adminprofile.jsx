import React,{useState} from 'react'
import Image from 'next/image'

import {ImExit} from "react-icons/im"
import {GiDutchBike} from "react-icons/gi"
import {MdFastfood} from "react-icons/md"
import {BiCategory} from "react-icons/bi"
import {AiOutlineColumnHeight} from "react-icons/ai"
import Adminproducts from '../../components/admin/Adminproducts'
import Adminorders from '../../components/admin/Adminorders'
import Admincategory from '../../components/admin/Admincategory'
import Adminfooter from '../../components/admin/Adminfooter'
import axios from 'axios'
import {useRouter} from "next/router"
import {toast} from "react-toastify";
import AddProduct from '../../components/admin/AddProduct'

const Adminprofile = () => {
    const [tabs,setTabs] = useState(0);
    const {push} = useRouter();
    const [isProductModal,setIsProductModal] = useState(false);

    const exitAdminAccount = async ()=>{
        try {
            if(confirm("Are you sure you want to exit your Admin Account?")){
                const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/admin`);
                if(res.status===200){
                    push("/admin")
                    toast.success("You succesfully logged out");
                }
            }
            /**Admin panelindeyken kullanıcı butonuna bastığında geri atıyor düzeltilecek */
        } catch (error) {
            
        }
    }
   return(
    <div className='flex sm:flex-row flex-col px-10 '>
    <div className='border sm:mx-0 mx-auto mb-24 w-80 flex-shrink-0 max-h-[455px]'>
        <div className='relative flex flex-col items-center p-10 '>
            <Image src="/images/admin.png" width={100} height={100} alt="" className='rounded-full cursor-pointer'/>
            <span className='text-[24px] font-bold mt-2'>Admin</span>
        </div>
        <ul className='font-bold'>
        <li className='border p-3 cursor-pointer hover:bg-primary  duration-200 flex items-center'
        onClick={()=>setTabs(1)}
        >
            <MdFastfood/>
            <button className='ml-2 text-sm'>Products</button>

        </li>
        <li className='border p-3 cursor-pointer hover:bg-primary duration-200 flex items-center'
        onClick={()=>setTabs(2)}
        >
            <GiDutchBike/>
            <button className='ml-2 text-sm'>Orders</button>

        </li>
        <li className='border p-3 cursor-pointer hover:bg-primary duration-200 flex items-center'
        onClick={()=>setTabs(3)}
        >
            <BiCategory/>
            <button className='ml-2 text-sm'>Categories</button>

        </li>
        <li className='border p-3 cursor-pointer hover:bg-primary duration-200 flex items-center'
        onClick={()=>setTabs(4)}
        >
            <AiOutlineColumnHeight/>
            <button className='ml-2 text-sm'>Footer</button>

        </li>
        <li className='border p-3 cursor-pointer hover:bg-primary duration-200 flex items-center'
        onClick={()=>{setTabs(5);exitAdminAccount();}}
        >
            <ImExit/>
            <button className='ml-2 text-sm'>Exit</button>

        </li>
        </ul>
    </div>
    {tabs==1 && 
    <div>
        <Adminproducts setIsProductModal={setIsProductModal}/>
    </div>
    }
    {tabs==2 &&
    <div>
        <Adminorders/>
    </div>
    }
    {tabs==3 &&
    <div>
        <Admincategory/>
    </div>
    }
    {tabs==4 &&
    <div className='flex-1 p-8'>
        <Adminfooter/>
    </div>
    }
    {isProductModal && <AddProduct setIsProductModal={setIsProductModal}/>}
   

</div>
   )
}
export const getServerSideProps=(ctx)=>{
    const myCookie = ctx.req?.cookies || "";
    if(myCookie.token !== process.env.ADMIN_TOKEN){
        return{
            redirect:{
                destination:"/admin",
                permanent:false,
            }
        }
    }
    return{
        props:{}
    }
}
export default Adminprofile