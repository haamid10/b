
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

const Land =()=> {
  return (

    <div className=' '>
      <Link to='/land/report'>
      <button className=' m-12 bg-indigo-600 w-32 rounded-lg text-white p-[.6rem]'>Land Report</button>

      </Link>
    <div  className=' flex flex-col items-center  '>
     <div className='ml-44 bg-indigo-100 shadow-lg shadow-gray-400 mt-4 mb-12 py-[2rem] px-[3rem] rounded-lg   w-[40rem]'>

     
          <div>
                  <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 capitalize">
                    enter here the land 
                  </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
              <div className=''>
                    <h2>Location address</h2>
                    <input
                    id="email-address"
                    name="Location address"
                    type="text"
                    autoComplete="locations"
                    required
                    className=" block w-full rounded-md px-[1rem] border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Location"
                    />
              </div>
              <div className='mt-0'>
                    <h2>Image</h2>
                  
                    <input
                      id="email-address"
                      name="email"
                      type="file"
                      autoComplete="email"
                      required
                      className="bg-white block w-full rounded-md px-[1rem] border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Location"
                    />
              </div>
              <div className=''>
                    <h2>Amount of Money</h2>
                    <input
                      id="Amount of money"
                      name="Location address"
                      type="number"
                      required
                      className=" block w-full rounded-md px-[1rem] border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Location"
                      />
              </div>
               <div className=''>
                    <h2>LandScape</h2>
                    <input
                      id="LandScape"
                      name="LandScape"
                      type="text"
                      required
                      className=" block w-full rounded-md px-[1rem] border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Land Scape"
                      />
              </div>
              <div className=''>
                      <h2>description of the land</h2>
                      <textarea
                        id="desc "
                        name="desc"
                        type="text"
                        required
                        className=" block w-full h-12 rounded-md px-[1rem] border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Land Scape"
                        />
              </div>
              
         

          

            <div className='w-28'>
                      <button
                        type="submit"
                        className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                        </span>
                        Post 
                      </button>
            </div>
          </form>
        </div>
      </div>

       
       {/* table  */}
       
       




    </div>

  )
}

export default Land