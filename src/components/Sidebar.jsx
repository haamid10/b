import React from 'react'
import {BiLandscape} from 'react-icons/bi'
import { FaMoneyCheck} from 'react-icons/fa'
import {MdProductionQuantityLimits, MdArticle} from 'react-icons/md'
import {TbReportMoney} from 'react-icons/tb'
import { Link} from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className=' w-64  rounded-br-xl   h-[60rem] bg-indigo-500 shadow-lg text-white'>
      <div className='list text-xl mb-12 font-semibold'>
      <Link to="/"> 
          <div className=' flex flex-row  gap-8 items-center  list-none p-1  h-16 shadow-md w-full'>
            <TbReportMoney className='ml-12'/>
             <h2 className=' text-sm'>Dashboard</h2>
          </div>
      </Link> 
      <Link to="/land"> 
          <div className=' flex flex-row  gap-8 items-center list-none p-1  h-16 shadow-md w-full'>
            <BiLandscape className='ml-12'/>
             <h2 className=' text-sm'>Land</h2>
          </div>
      </Link>   
      <Link to="/article"> 
          <div className=' flex flex-row  gap-8 items-center list-none p-1  h-16 shadow-md w-full'>
            <MdArticle className='ml-12'/>
             <h2 className=' text-sm'>Article</h2>
          </div>
      </Link> 
     
      <Link to="/sales"> 
          <div className=' flex flex-row  gap-8 items-center list-none p-1  h-16 shadow-md w-full'>
            <MdProductionQuantityLimits className='ml-12'/>
             <h2 className=' text-sm'>Products</h2>
          </div>
      </Link> 
      <Link to="/sales/salesReport"> 
          <div className=' flex flex-row  gap-8 items-center  list-none p-1  h-16 shadow-md w-full'>
            <FaMoneyCheck className='ml-12'/>
             <h2 className=' text-sm'>Sales Report</h2>
          </div>
      </Link> 
      <Link to="/investmentReport"> 
          <div className=' flex flex-row  gap-8 items-center  list-none p-1  h-16 shadow-md w-full'>
            <TbReportMoney className='ml-12'/>
             <h2 className=' text-sm'>Investment Report</h2>
          </div>
      </Link> 

         

      </div>
      
    </div>
  )
}

export default Sidebar
