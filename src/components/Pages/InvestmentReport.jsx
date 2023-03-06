import React from 'react'

const InvestmentReport = () => {
  return (
    <div class="flex flex-col">
          <div>
                  <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 capitalize">
                    Investment Report
                  </h2>
          </div>
          <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full">
                  <thead class="bg-white border-b">
                    <tr>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        #
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Investor name
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        phone number
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Address
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        email
                      </th>
                   

                  
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-gray-100 border-b">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      mohamed Abdi
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        063 365 6734
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        hargeisa, shacabka 
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        mohamed448@gmail.com
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                        <button className=' bg-indigo-600 rounded-md w--12 text-white p-[.2rem]'> edit</button>
                        <button className=' bg-red-600 rounded-md w--12 text-white p-[.2rem] ml-2'> delete</button>
                      </td>
                     
                    </tr>
                  
                  
                  </tbody>
                </table>
              </div>
            </div>
          </div>
    </div>
  )
}

export default InvestmentReport
