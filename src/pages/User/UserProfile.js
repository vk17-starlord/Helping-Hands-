import React from 'react'
import ProfileContainer from '../../components/common/ProfileContainer'
import UserNav from '../../components/common/UserNav'
import ProfileCard from '../../components/user/ProfileCard'

function UserProfile() {
  return (
    <div className='w-full'>
        <UserNav/>
        <div className="top-profile-user w-full min-h-[35vh]"></div>
        <div className=" w-5/12 lg:w-3/12 mt-[-10vh] mx-auto flex items-center justify-center">
        <ProfileCard></ProfileCard>
        </div>
    </div>
  )
}

export default UserProfile