import React from 'react'
import UserNav from '../../components/common/UserNav'
import ApplicationTable from '../../components/user/ApplicationTable';
import {useAuthState} from '../../context/AuthContext';

function MyApplications() {

  const {auth} = useAuthState()
  const {user} = auth;

  return (
    <div className='w-full'>
        <UserNav/>

         { user.applied.length>0 && <ApplicationTable heading={["company","role","salary","status"]}/> }        

    </div>
  )
}

export default MyApplications