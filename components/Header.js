import Image from 'next/image'
import React from 'react'
import logo from "../public/images/airbnbLogo.png"
import  {MagnifyingGlassIcon}  from '@heroicons/react/24/solid'
export default function Header() {
  return (
    <header className='grid sticky top-0 z-50 grid-cols-3 bg-white shadow-md py-3 px-5  my-auto'>
        {/* left */}
        <div className=" relative flex items-center cursor-pointer my-auto h-10 w-40"  >
            <Image src={logo} alt='logo'  fill />  
        </div>

        {/* Center */}
        <div className='flex items-center border-2 
                        rounded-full py-2 shadow-md'>
            <input className='flex-grow bg-transparent pl-5 outline-none' 
                    typeof='text' placeholder='Search something here'/>
            <MagnifyingGlassIcon className='hidden md:inline-flex h-8
             bg-red-400 text-white rounded-full p-2 cursor-pointer  md:mx-2' />
        </div>

        {/* Right */}
        <div>
            <p>Become a host</p>
            <i></i>
        </div>
    </header>
  )
}
