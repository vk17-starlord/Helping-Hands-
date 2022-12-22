import React, { useEffect, useState } from 'react'
import {useAuthState} from '../../context/AuthContext';
import {useNavigate} from 'react-router-dom';
import { Load } from './Load';
import { sendFirst } from '../../api/UserApi';
import FifthRequest from './FifthRequest';

function FourthRequest() {
    const {auth} = useAuthState()
    const {user} = auth;
    const navigate = useNavigate()
    const [showNext, setshowNext] = useState(false);
    useEffect(()=>{
        const res = async()=>{
          const data =await sendFirst(user._id,'questionthirtytothirtynine')
          if(data.success){
            console.log("done fourth!!!!!!!!!!!!!!!")

             setshowNext(true)
          }else{
            navigate('/dashboard')
          }

        } 
    res()
  },[])

  return (
    <div className='w-full  bg-black/10 min-h-screen flex justify-center items-center'>
        {
            showNext && <FifthRequest/>
        }
        <div className="bg-white rounded-md px-10 my-10 py-5">
            <h1 className='my-10 font-bold font-Poppins'>Thanks For Answering Questions !! </h1>
            <Load />
        </div>

    </div>
  )
}

export default FourthRequest