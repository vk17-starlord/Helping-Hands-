import React from 'react'
import { Link } from 'react-router-dom'

function ApplicationTable({heading , data}) {
  console.log(data)
  return (
    <div className='w-10/12 my-10 mx-auto'>

        <div className={`w-full grid grid-cols-5 p-5 bg-gray-50`}>
            {
                heading.map((ele)=>{
                 return   <h1 className='font-Poppins w-full text-left text-sm font-medium'>{ele}</h1>
                })
            }
        </div>
        <div className={`w-full px-5 py-2 bg-gray-50  my-5`}>
           {
                data?.map((ele)=>{
                 return  <div className="w-full my-5 grid grid-cols-5">
                  <h1 className='font-Poppins flex items-center justify-start h-full w-full text-gray-500 text-left text-sm font-medium'>
                    {ele?.job.j_name}
                  </h1>
                  <h1 className='font-Poppins flex items-center justify-start h-full w-full text-gray-500 text-left text-sm font-medium'>
                  <i className='bx bx-rupee'></i>  {ele?.job.j_salary}
                  </h1>
        
                  <h1 className='font-Poppins flex items-center justify-start h-full w-full text-gray-500 text-left text-sm font-medium'>
                   {ele?.job.j_mode}
                  </h1>
                  <h1 className='font-Poppins flex items-center justify-start h-full w-full text-gray-500 text-left text-sm font-medium'>
                   {ele?.status}
                  </h1>
                  <Link to={`/job/${ele?.job._id}`}>
                  <button  className="px-10 w-full rounded-md bg-primary text-white py-2.5">
                    View Job 
                  </button>
                  </Link>
                 </div>
             })
            }
        </div>

    </div>
  )
}

export default ApplicationTable