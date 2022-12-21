import React, { useEffect } from 'react'
import CompanyNav from '../../components/common/CompanyNav'
import {useParams} from 'react-router-dom';
import { getAppliedUsers } from '../../api/CompanyApi';

function AppliedUsers() {

  const {cid,jid} = useParams()
   
  useEffect(() => {
   const getData = async()=>{
    const res = await getAppliedUsers(cid,jid)
    console.log(res)
   }
   getData()
  }, []);

  return (
    <div className='w-full'>
        <CompanyNav/>


    </div>
  )
}

export default AppliedUsers