import React from 'react'
  
  export default function SideCard({ data: { image, title } }) {
    return (
        <div className=' relative flex flex-col items-center shadow-md shadow-slate-400 rounded-lg m-6  p-6 h-80 w-80 bg-white '>
        <img src={image} alt={title} />
        <p className='pt-6 text-lg font-medium'>{title}</p>
      </div>
    )
  }
  