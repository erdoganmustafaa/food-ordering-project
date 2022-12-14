import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import {AiFillHome} from "react-icons/ai"
import {BsFillKeyFill,BsBasket2} from "react-icons/bs"
import {ImExit} from "react-icons/im"
import AccountSettings from '../../components/profile/AccountSettings'
import PasswordSettings from '../../components/profile/PasswordSettings'
import Order from '../../components/profile/Order'
import {signOut,useSession} from "next-auth/react"
import {useRouter} from "next/router";
import axios from 'axios'

const Profile = ({user}) => {
    const [tabs,setTabs] = useState(0);
   ;
    const {push} = useRouter();
    const {data:session} = useSession();
    const handleSignOut = ()=>{
        if(confirm("Are you sure you want to sign out?")){
            signOut({redirect:false});
            push("/auth/login");
        }
    }
    useEffect(()=>{
        /* Oturum yoksa tekrar o sayfaya girmek istediğinde otomatik olarak auth/login sayfasına yönlendiriyor */
        if(!session){
         push("/auth/login");
        }
        
    },[session,push])
   
  return (
    <div className='flex sm:flex-row flex-col px-10 '>
        <div className='border sm:mx-0 mx-auto mb-24 w-80 flex-shrink-0 '>
            <div className='relative flex flex-col items-center p-10 '>
                <Image src={user.image ? user.image : "/images/client1.jpg"} width={100} height={100} alt="" className='rounded-full cursor-pointer'/>
                <span className='text-[24px] font-bold mt-2'>{user?.fullName}</span>
            </div>
            <ul className='font-bold'>
            <li className='border p-3 cursor-pointer hover:bg-primary  duration-200 flex items-center'
            onClick={()=>setTabs(1)}
            >
                <AiFillHome/>
                <button className='ml-2 text-sm'>Account</button>

            </li>
            <li className='border p-3 cursor-pointer hover:bg-primary duration-200 flex items-center'
            onClick={()=>setTabs(2)}
            >
                <BsFillKeyFill/>
                <button className='ml-2 text-sm'>Password</button>

            </li>
            <li className='border p-3 cursor-pointer hover:bg-primary duration-200 flex items-center'
            onClick={()=>setTabs(3)}
            >
                <BsBasket2/>
                <button className='ml-2 text-sm'>Orders</button>

            </li>
            <li className='border p-3 cursor-pointer hover:bg-primary duration-200 flex items-center'
            onClick={handleSignOut}
            >
                <ImExit/>
                <button className='ml-2 text-sm'>Exit</button>

            </li>
            </ul>
        </div>
        {tabs==1 && 
        <div className='p-8 flex-1'>
            <AccountSettings user={user}/>
        </div>
        }
        {tabs ==2 &&
        <div className='p-8 flex-1'>
            <PasswordSettings user={user}/>
        </div>
        }
        {tabs ==3 &&
        <div className=''>
            <Order/>
        </div>
        }
    </div>
  )
}
export async function getServerSideProps({req,params}){
    

    const user = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/${params.id}`)
    return{
        props:{
        user: user? user.data : null,
        }
        /* */
    }
}
export default Profile