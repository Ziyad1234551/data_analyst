import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

export const Hero = () => {
  return (
      <div className='w-full h-[50vh] mb-[130px]  px-6 flex flex-col mt-[100px] items-center' id='about'>
        <h1 className='lg:text-[60px] text-3xl font-bold text-center lg:my-10'>Halo Nama Saya Ziyad</h1>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Saya Adalah Seorang Data Analyst',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'Saya Mahir Dalam Menggunakan SQL',
        2000,
        'Saya Mahir Dalam Menggunakan Python',
        2000,
        'Saya Mahir Dalam Menggunakan Excel',
        2000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="text-blue-600 text-xl text-center  lg:text-[50px] my-6 lg:my-10 font-bold"
    />
    <Link className='w-[300px] pb-3 underline-offset-4 bg-blue-600 block text-center text-2xl font-bold rounded-full py-4 text-white underline  lg:my-4'>Download CV</Link>
    </div>
  )
}
