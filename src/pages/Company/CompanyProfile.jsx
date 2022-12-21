import React from 'react'
import { Link } from 'react-router-dom'
import ProfileContainer from '../../components/common/ProfileContainer'
import NotVerified from '../../components/company/NotVerified'
import ProfileCard from '../../components/company/ProfileCard'
import { useCompanyState } from '../../context/CompanyContext'
import JobContainer from './JobContainer'

function CompanyProfile({setshow}) {
  const company = useCompanyState()
  
  return (
    <div className='w-full '>
         <div className="top-profile w-full min-h-[35vh]"></div>
         {
          company?.c_isVerified &&       
          <Link to={`/createjob/${company._id}`}>
          <button className="fixed bg-primary text-white  w-12 h-12 bottom-20 right-20 rounded-full">
          <i class='bx bxs-add-to-queue'></i>
          </button>  </Link>
         }
        <ProfileContainer> 
            <ProfileCard setshow={setshow}/>
            {
              !company?.c_isVerified && <NotVerified/>
            }
            {
              company?.c_isVerified && <JobContainer id={company?._id}/>
            }
        </ProfileContainer>
    </div>
  )
}

export default CompanyProfile