import React, { useEffect, useState } from 'react'
import { getUserCompany } from '../../api/CompanyApi'
import CompanyNav from '../../components/common/CompanyNav'
import NoCompany from '../../components/company/NoCompany'
import { useAuthState} from '../../context/AuthContext'
import {  useCompanyUpdate } from '../../context/CompanyContext'
import CompanyProfile from './CompanyProfile'

function CompanyDashboard() {

  const {setcompany} = useCompanyUpdate()

  const {auth} = useAuthState()
  const {user} = auth;
  const [show, setshow] = useState(false);

  useEffect(() => {
    console.log(user);
   
    const getdata = async()=>{
      const res =await getUserCompany(user?._id);
      if(res.err){
        setshow(false)
      }else{
        setshow(true)
      }

      console.log(res)
    }

    getdata()
  }, []);
 
  
  return (
    <div className='w-full'>
      <CompanyNav/>
      {show && <CompanyProfile/>}
      {!show && <NoCompany/>}

    </div>
  )
}

export default CompanyDashboard