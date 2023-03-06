import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className=' shadow p-[1rem] '>
      <div className="user  flex flex-row justify-between items-center">
        <h1 className='text-4xl text-blueColor font-poppins'><strong>Beer</strong>san</h1>
        <div className='Search  '>
        <input type="text"  className='relative h-8 bg-blue-50 rounded-lg right-32 min-w-max'/>

          <AiOutlineSearch className='absolute rounded-r-lg right-36  top-6 text-2xl min-w-max'/>
        
        </div>
      </div>
    </div>
  )
}

export default Navbar
