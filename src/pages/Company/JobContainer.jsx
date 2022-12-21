import React, { useEffect, useState } from 'react'
import { DeleteJobById, getCompanyJobs } from '../../api/JobApi';
import JobCard from './JobCard';

function JobContainer({id}) {

    const [jobs, setjobs] = useState([]);
    const getData = async()=>{
        const res = await getCompanyJobs(id);
        setjobs(res.data)
        console.log(res.data)
     }

    useEffect(() => {
  
     getData()
    }, []);

    const onDelete = async(cid,jid)=>{

        const res = await DeleteJobById(cid,jid);
        if(res.success){
            getData()
        }
        console.log(res)

    }
  return (
    <div className='w-full  bg-white rounded-md shadow-md p-5'>
        <h1 className='font-Poppins font-medium text-xl'> Jobs Posted </h1>
        <div className="grid  grid-cols-3 my-5 gap-5">
         {
           jobs.length!==0 &&
           jobs.map((job)=>{
            return <div className="col">
                <JobCard onDelete={onDelete} mode='company' job={job}>

                </JobCard>
            </div>
            
           })


         }
        
        </div>

    </div>
  )
}

export default JobContainer