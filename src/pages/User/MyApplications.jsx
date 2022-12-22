import React, { useEffect, useState } from 'react'
import { getUserById } from '../../api/Auth';
import UserNav from '../../components/common/UserNav'
import ApplicationTable from '../../components/user/ApplicationTable';
import { useAuthState } from '../../context/AuthContext';
function MyApplications() {

  const {auth} = useAuthState()
  const {user} = auth;

 const [User, setuser] = useState(null);  
  useEffect(() => {
    const getData = async()=>{
      const res = await getUserById(user?._id)
      console.log(res)
      if(res.success){
        setuser(res.data)
      }
    }
    getData()
  }, []);

  return (
    <div className='w-full'>
        <UserNav/>

         { User?.applied.length>0 && <ApplicationTable data={User?.applied} heading={["Role","Salary","Job Mode","Status","View Job"]}/> }        

    </div>
  )
}

export default MyApplications