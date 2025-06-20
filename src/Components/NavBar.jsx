import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="flex justify-between bg-slate-700 text-white">
        <div className="logo">
            <span className='font-bold text-2xl mx-8'>Aros</span>
        </div>
        <ul className='flex gap-8 mx-8 p-2'>
            <li className='cursor-pointer hover:font-bold transition-all duration-100'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-100'>Your Tasks</li>
        </ul>



    </nav>
    
    
    
    </>    

  )
}   

export default Navbar
