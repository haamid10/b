import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import SalesReport from './Pages/SalesReport'
import Land from './Pages/Land'
import Article from './Pages/Article'
import Sales from './Pages/Sales'
import InvestmentReport from './Pages/InvestmentReport'
import LandReport from './Pages/LandReport'
import Dashboard from './Pages/Dashboard'


const Index = () => {
  return (
   <Router>
      
      
      <Navbar/>
    

      <div div className=' h-screen  flex flex-row'>
      <Sidebar/>
        
          <Routes>
           
            <Route path='/land' element={<Land/>}/>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/land/report' element={<LandReport/>}/>
            <Route path='/sales' element={<Sales/>}/>
            <Route path='/article' element={<Article/>}/>
            <Route path='/sales/salesReport' element={<SalesReport/>}/>
            <Route path='/investmentReport' element={<InvestmentReport/>}/>
          </Routes>
        </div>
</Router> 
  
  )
}

export default Index
