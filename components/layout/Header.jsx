import React, { useState } from 'react'
import Logo from '../ui/Logo'
import Search from '../ui/Search'
import {FaUserAlt, FaShoppingCart,FaSearch} from "react-icons/fa"
import { GiCancel, GiHamburgerMenu } from 'react-icons/gi'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useSelector } from 'react-redux';
const Header = () => {
    const [isSearchModal,setIsSearchModal] = useState(false);
    const [isMenuModal,setIsMenuModal] = useState(false);
    const cart = useSelector((state)=> state.cart)

    const router = useRouter()
  return (
    <div className={`h-[5.5rem] ${router.asPath==="/" ? "bg-transparent" : "bg-secondary"} z-40 relative`}>
        <div className='container text-white mx-auto flex justify-between h-full items-center'>
            <div>
                <Logo />
            </div>
            <nav className={`sm:static absolute top-0 left-0  
            sm:w-auto sm:h-auto h-screen w-full sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden
            ${isMenuModal===true && "!grid place-content-center"}`}>
                <ul className='flex gap-x-2 sm:flex-row flex-col items-center'>
                    <li className='px-[5px] py-[10px] uppercase sm:hover:text-white hover:text-primary '>
                        <Link href="/">Home</Link>
                    </li>
                    <li className='px-[5px] py-[10px] uppercase  sm:hover:text-white hover:text-primary'>
                        <Link href="/menu" >Menu</Link>
                    </li>
                    <li className='px-[5px] py-[10px] uppercase  sm:hover:text-white hover:text-primary'>
                        <Link href="/about" >About</Link>
                    </li>
                    <li className='px-[5px] py-[10px] uppercase  sm:hover:text-white hover:text-primary'>
                        <Link href="/reservation" >Book Table</Link>
                    </li>
                </ul>
                {isMenuModal && (
                    <button className='absolute z-50 top-6 right-4 sm:hidden inline-block' onClick={()=>setIsMenuModal(false)}>
                    <GiCancel size={35}/>
                    </button>
                )}
            </nav>
            <div className='flex gap-x-4 items-center'>
            <Link href='/auth/login'>
            <FaUserAlt className='hover:text-primary'/>
            </Link>
            <Link href='/cart'>
            <span className='relative'>
            <FaShoppingCart className='hover:text-primary'/>
            <span className='w-4 h-4 text-xs text-black grid place-content-center absolute -top-2 -right-3 font-bold  rounded-full bg-primary'>{cart.products.length}</span>
            </span>
            </Link>
            
            <button onClick={()=>setIsSearchModal(true)}><FaSearch className='hover:text-primary'/></button>
            <Link href='#' className='md:inline-block hidden'>
                <button className='btn-primary hover:text-red-900 hover:bg-white'>Order Online</button>
            </Link>
            <button className='sm:hidden inline-block' onClick={()=>setIsMenuModal(true)}>
            <GiHamburgerMenu className='text-2xl hover:text-primary'/>
            </button>
            
            </div>
        </div>
    {isSearchModal && (
        <Search setIsSearchModal={setIsSearchModal}/>
    )}
    </div>
  )
}

export default Header