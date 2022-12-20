import React from 'react'
import ProfileContainer from '../../components/common/ProfileContainer'
import ProfileCard from '../../components/company/ProfileCard'

function CompanyProfile() {
  return (
    <div className='w-full'>
         <div className="top-profile w-full min-h-[35vh]"></div>

        <ProfileContainer> 
            <ProfileCard/>
        </ProfileContainer>
    </div>
  )
}

export default CompanyProfile