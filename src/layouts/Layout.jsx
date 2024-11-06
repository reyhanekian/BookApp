import React from 'react'
import { PiBooksBold } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col justify-between  ">
      <header className='flex flex-col justify-center items-center'>
        <div className=' bg-white shadow-md shadow-slate-200 h-20  w-full flex flex-row justify-center items-center'>
          <h1 className='text-3xl font-extrabold'>Book App</h1>
          <PiBooksBold className='w-10 h-10 ml-2'/>
        </div>
      </header>

      {children}

      <footer className='bg-white shadow-2xl shadow-slate-600'>
  <div className='flex flex-row bg-white shadow-md shadow-slate-200 h-16 justify-center items-center'>
    <p className="mr-4 text-2xl font-extrabold "> Contact Us :</p>
    <FaLinkedin className="w-6 h-6 mx-1 hover:scale-110 transition-transform duration-200" />
    <FaTelegram className="w-6 h-6 mx-1 hover:scale-110 transition-transform duration-200" />
    <AiFillInstagram className="w-6 h-6 mx-1 hover:scale-110 transition-transform duration-200" />
    <TfiEmail className="w-6 h-6 mx-1 hover:scale-110 transition-transform duration-200" />
  </div>
</footer>

    </div>
  )
}
