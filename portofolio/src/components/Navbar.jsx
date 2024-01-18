import React, { useState } from 'react';
import { GiNotebook } from "react-icons/gi";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [nav,setNav] = useState(false) 
  return (
    <div className='w-full shadow-lg px-4 lg:px-[70px] flex justify-between items-center h-[120px]'>
        <div className='lg:text-5xl text-3xl text-blue-700 flex gap-4 items-center font-bold'>
            <h1>Ziyad</h1>
            <GiNotebook className='lg:text-6xl text-4xl'/>

        </div>
        <div className="lg:flex hidden gap-5 items-center text-2xl font-semibold ">
            <Link to="/">Home</Link>
            <Link to="#about">About</Link>
            <Link to="/">Resume</Link>
            <Link to="/">Project</Link>



        </div>
        <div className="flex lg:hidden text-[60px]">
            <MdOutlineMenu className='cursor-pointer' onClick={()=>setNav(!nav)}/>

        </div>
        {nav ?
          <div className='absolute lg:hidden  transition-all text-2xl bg-white top-[120px] left-0 w-full shadow-2xl h-[400px] flex flex-col py-4 items-center gap-8'>
          <Link to="/" className='transition-all hover:bg-blue-600 hover:text-white py-4 w-full block text-center rounded-sm'>Home</Link>
              <Link to="/" className='transition-all hover:bg-blue-600 hover:text-white py-4 w-full block text-center rounded-sm'>About</Link>
              <Link to="/" className='transition-all hover:bg-blue-600 hover:text-white py-4 w-full block text-center rounded-sm'>Resume</Link>
              <Link to="/" className='transition-all hover:bg-blue-600 hover:text-white py-4 w-full block text-center rounded-sm'>Project</Link>
          </div>
        
        
        :
        <div className='absolute lg:hidden  text-2xl bg-white top-[120px] left-0 w-full overflow-hidden shadow-xl h-[0px] transition-all flex flex-col py-4 items-center gap-8'>
        <Link to="/" className='transition-all hover:bg-blue-600 hover:text-white py-4 w-full block text-center rounded-sm'>Home</Link>
            <Link to="/" className='transition-all hover:bg-blue-600 hover:text-white py-4 w-full block text-center rounded-sm'>About</Link>
            <Link to="/" className='transition-all hover:bg-blue-600 hover:text-white py-4 w-full block text-center rounded-sm'>Resume</Link>
            <Link to="/" className='transition-all hover:bg-blue-600 hover:text-white py-4 w-full block text-center rounded-sm'>Project</Link>
        </div>}
       

    </div>
  )
}
