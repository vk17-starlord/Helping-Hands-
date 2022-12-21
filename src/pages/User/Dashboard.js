import React from 'react'
import UserNav from '../../components/common/UserNav'
import JobContainer from './JobContainer'

function Dashboard() {
  return (
    <div className='w-full'>
       <UserNav/>
      <div className="w-10/12  mx-auto ">
      <JobContainer/>
      </div>


    </div>
  )
}

export default Dashboard