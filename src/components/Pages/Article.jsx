import React from 'react'

const Article = () => {
  return (
    <div  className=' px-[3rem] flex flex-col ml-44 items-center mb-12 '>
     <div className=' bg-indigo-100 shadow-lg shadow-gray-400 mt-4 mb-12 py-[2rem] px-[3rem] rounded-xl  h-screen w-[40rem]'>

     
          <div>
                  <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 capitalize">
                    Add here some Articles
                  </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
              <div className=''>
                    <h2  className='text-sm'>Title</h2>
                    <input
                    id="email-address"
                    name="Location address"
                    type="text"
                    autoComplete="locations"
                    required
                    className=" block w-full rounded-md px-[1rem] border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder=" Add title of the article"
                    />
              </div>
              <div className='mt-0'>
                    <h2 className='text-sm'>Image</h2>
                  
                    <input
                      id="image"
                      name="Image"
                      type="file"
                      autoComplete="email"
                      required
                      className="bg-white block w-full rounded-md px-[1rem] border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Location"
                    />
              </div>
            
            
              <div className=''>
                      <h2 className='text-sm'>description of the Article</h2>
                      <textarea
                        id="desc "
                        name="desc"
                        type="text"
                        required
                        className=" block w-full h-12 rounded-md px-[1rem] border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="desc of the Article"
                        />
              </div>
              
         

          

            <div className='w-12'>
                      <button
                        type="submit"
                        className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        </span>
                        Post 
                      </button>
            </div>
          </form>
        </div>
       </div>
  )
}

export default Article