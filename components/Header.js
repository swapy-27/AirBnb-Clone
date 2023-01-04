import Image from 'next/image'
import React from 'react'
import logo from "../public/images/airbnbLogo.png"
export default function Header() {
  return (
    <header className='grid sticky top-0 z-50 grid-cols-3 bg-white shadow-md py-3 px-5  my-auto'>
        {/* left */}
        <div className=" relative flex items-center cursor-pointer my-auto h-10 w-40"  >
            <Image src={logo} alt='logo'  fill />  
        </div>

        {/* Center */}
        <div>
            <input name='Search here' placeholder='Search something here'/>
        </div>

        {/* Right */}
        <div>
            <p>Become a host</p>
            <i></i>
        </div>
    </header>
  )
}
