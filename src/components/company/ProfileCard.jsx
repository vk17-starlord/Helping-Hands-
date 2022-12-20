import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadCompanyProfile } from '../../api/CompanyApi';
import { useAuthState } from "../../context/AuthContext";

import ImageHover from '../common/ImageHover'

function ProfileCard() {
  const {auth} = useAuthState()
  const {user} = auth;
  
  const changeProfile = async(file)=>{
  await uploadCompanyProfile(file,user._id)
  notify('please reload to see changes')
  }

  const notify = (msg) => toast(msg); 


  return (
    <div className='w-full bg-white rounded-md pb-5 shadow-md'>
          <ToastContainer position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"  />
     <div className="profile-card flex justify-center items-center w-full min-h-[20vh] rounded-md">

      <ImageHover handler={changeProfile} photo={user.photo}></ImageHover>
     
      

     </div>
    </div>
  )
}

export default ProfileCard