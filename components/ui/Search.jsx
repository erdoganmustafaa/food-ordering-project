import React from 'react'
import Image from 'next/image';
import OutsideClickHandler from 'react-outside-click-handler';
import Title from '../ui/Title'
import {GiCancel} from "react-icons/gi";
const Search = ({setIsSearchModal}) => {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen z-50 after:content-[""] after:w-screen after:h-screen
    after:bg-white after:absolute after:opacity-70 grid place-content-center '>
    <OutsideClickHandler onOutsideClick={()=>setIsSearchModal(false)}>
        <div className='w-full h-full grid place-content-center z-50 '>
            <div className="relative z-50 md:w-[700px] w-[370px] border-2 p-5 rounded-xl bg-white">
                <Title addClass="text-[50px] text-center">Title</Title>
                <input type="text" placeholder='Search..' className='border w-full p-3 mt-5 border-black rounded-md outline-cyan-700'/>
                <div>
                    <ul className='mt-10'>
                        <li className='flex items-center justify-between py-3 px-5 rounded-md my-5 cursor-pointer hover:bg-primary'>
                            <div>
                                <Image src="/images/f1.png" width={60} height={60} alt="" />  
                            </div>
                            <span className='font-bold text-center'>Sucuklu Pizza</span>
                            <span className='font-bold'>$20</span>
                        </li>
                        <li className='flex items-center justify-between py-3 px-5 rounded-md cursor-pointer  my-5 hover:bg-primary'>
                            <div>
                                <Image src="/images/f1.png" width={60} height={60} alt="Ulan resmin olduğu konumu doğru gir gerizekalı" />  
                            </div>
                            <span className='font-bold text-center'>Muharremin favori pizzası</span>
                            <span className='font-bold'>$30</span>
                        </li>
                        <li className='flex items-center justify-between  py-3 px-5 rounded-md  my-5 cursor-pointer hover:bg-primary'>
                            <div>
                                <Image src="/images/hamburger.jpg" className='rounded-xl' width={55} height={55} alt="" />  
                            </div>
                            <span className='font-bold text-center'>Hamburger</span>
                            <span className='font-bold'>$30</span>
                        </li>
                    </ul>
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