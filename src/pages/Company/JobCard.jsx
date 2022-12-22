import React from 'react'
import { Link } from 'react-router-dom'

function JobCard({job , mode="user" , onDelete }) {
  return (
    <div className=" pb-2  font-Poppins card w-full px bg-white rounded-lg pt-3 shadow-md">
            <div className="flex px-4  items-center justify-start w-full p-2.5">
                <img src={job?.company?.c_photo === "no-photo.jpg" ? "https://cdn.dribbble.com/userupload/4029627/file/original-1b483a3d2c180e428aa5fddbfc192e77.png?compress=1&resize=1504x1128":job?.company?.c_photo }  
                className="w-12 object-cover mr-2  h-12 rounded-full" alt="" />
                <div className="block">
                <h1 className='font-medium text-[18px]'>{job?.j_name}</h1>
                </div>
            </div>
            <div className=" my-1 px-4 text-left container mx-auto">
            <h1 className='text-md font-medium text-gray-700'>{job?.company.c_name}</h1>
            <h1 className='text-sm text-gray-700 my-2 '>{job?.j_desc.substr(0,50)}</h1>
            <h1 className='text-md text-gray-700 text-sm'> Salary - <span className='font-medium'>₹ {job?.j_salary}</span></h1>
           {
            mode==="company" &&    <Link to={`/${job?.company._id}/${job?._id}/appliedusers`}>
            <button  className='my-4 py-2.5 rounded-md px-5 w-full bg-primary text-white '>View Job </button>
             </Link>

           }
            {
            mode==="user" &&    <Link to={`/job/${job._id}`}>
            <button  className='my-4 py-2.5 rounded-md px-5 w-full bg-primary text-white '>View Job </button>
             </Link>
             
           }

           
             {
                mode==="company" && (
            
            <div className="w-full flex justify-center items-end">
      
          
            <button type="button" onClick={()=>{
           onDelete( job?.company._id , job?._id )
            }} class="shadow-md border-2  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 text-redlight bg-reddark">
            <i class='bx bxs-trash' ></i>
            </button>
             
             </div>
                )
             }
            </div>
        </div>
  )
}

export default JobCard