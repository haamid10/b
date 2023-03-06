import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const Dashboard = () => {
  const [ graph, setGraph] = useState({
    series: [{
      name: 'land',
      data: [13, 20, 38, 42, 58, 72, 100]
    }, {
      name: 'productivity',
      data: [10, 12, 15, 27, 38, 40, 60]
    }
  ],
    options: {
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2019-09-19","2019-012-19", "2020-1-19", "2020-4-19", "2021-01-19",  "2021-3-19", "2022-01-19", "2022-03-19"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy '
        },
      },
    },
  })

 const [circleGraph , setCircleGraph]= useState({
  
  series: [{
    name: 'Series 1',
    data: [10, 16, 19, 50, 90, 100],
  }],
  options: {
    chart: {
      height: 350,
      type: 'radar',
    },
  
    xaxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June']
    }
  },



 }) 
  
  
  return (
    <div className=' flex flex-col p-12'>
      <h1 className='text-2xl font-bold'>Dashboard</h1>
      
        <div id="charts" className=' p-[2rem] shadow-md'>
             <h2 className=''>Despite these challenges,Farmers have managed to produce a variety of crops such as maize, sorghum, beans, and vegetables. However, their yields are relatively low compared to other countries in the region due to poor farming practices and lack of access to modern inputs such as fertilizers and improved seeds.</h2>
          <ReactApexChart options={graph.options} series={graph.series} type="area" height={350} className=" w-[60rem]"/>
          </div>
       <h2 className=' mt-12'>the country has a semi-arid climate, which means that rainfall is limited and irregular. This makes it difficult for farmers to grow crops and raise livestock. In addition, much of Somalia's land is degraded due to overgrazing and deforestation. This has led to soil erosion and reduced fertility, further reducing the productivity of the land.</h2>
          <div id='charts' >
          <ReactApexChart className='ml-32 mt-32 ' options={circleGraph.options} series={circleGraph.series} type='radar' height={350}/>
         </div>
          
    </div>
  )
}

export default Dashboard
  
