import React from 'react'
import ProfileContainer from '../../components/common/ProfileContainer'
import UserNav from '../../components/common/UserNav'
import ProfileCard from '../../components/user/ProfileCard'

function UserProfile() {
 
  return (
    <div className='w-full'>
        <UserNav/>
        <div className="top-profile-user w-full min-h-[35vh]"></div>
        <ProfileContainer>
            <ProfileCard></ProfileCard>
        </ProfileContainer>
    </div>
  )
}

export default UserProfile