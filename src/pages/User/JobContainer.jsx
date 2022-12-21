import React, { useEffect, useState } from 'react'
import { getAllJobs } from '../../api/JobApi';
import JobCard from '../Company/JobCard';
import FilterData from './FilterData';

function JobContainer() {

    const [jobs, setjobs] = useState([]);

    useEffect(() => {
        const getData = async()=>{
          const res = await  getAllJobs()
          console.log(res.data)
          setjobs(res.data)

        }
        getData()
    }, []);
     
  return (
    <div className='w-full my-5 gap-5 bg-white grid grid-cols-[4fr_8fr] xl:grid-cols-[3fr_9fr] '>
        <div className="col rounded-md bg-gray-50  p-5 w-full">
            <FilterData setjobs={setjobs}  />
        </div>
     <div className="col w-full bg-gray-50 p-2.5">
        <h1 className='text-center w-full font-medium text-xl font-Poppins  my-5 '>Job's Posted</h1>
     <div className="col grid grid-cols-2 xl:grid-cols-3 gap-5  p-5 rounded-md  w-full">
            {
             jobs.length!==0 && jobs?.map((job)=>{
                return <JobCard job={job} />
             })  
            }
        </div>
     </div>
    </div>
  )
}

export default JobContainer