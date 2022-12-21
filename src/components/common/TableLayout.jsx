import React, { Children } from 'react'

function TableLayout({heading,children}) {
 
  return (
    <div className='w-full'>
        <div className="header grid  grid-cols-5 w-full bg-gray-50 px-2 my-5 py-2.5 rounded-md">
          {
            heading?.map((head)=>{
              return <div className="col text-left px-5  flex items-center justify-start  text-[15px] font-bold text-gray-500"> 
              {head} 
              </div>
            })
          }
         </div>

         {children}

    </div>
  )
}

export default TableLayout