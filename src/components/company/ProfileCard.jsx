import React from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DeleteCompany } from '../../api/CompanyApi';
import { uploadCompanyLicense, uploadCompanyProfile } from '../../api/CompanyApi';
import { useCompanyState, useCompanyUpdate } from '../../context/CompanyContext';
import { downloadFile } from '../../utils';

import ImageHover from '../common/ImageHover'
import UploadFile from '../common/UploadFile';
function ProfileCard({setshow}) {

  const company = useCompanyState()
  const {setcompany} = useCompanyUpdate()
    
  const notify = (msg) => toast(msg); 

  const changeProfile = async(file)=>{
   const res= await uploadCompanyProfile(file,company?._id)
   if(res.data.success){
   notify("Please Reload To See Changes !!")
   }else{
    notify("Error occurred please try again !!")
   }
  }

  const handleDelete = async(id)=>{
  const res = await DeleteCompany(id);
   if(res.success){
    notify("Company Deleted Successfully")
    setcompany([])
    setshow(false)
   }else{
    notify("Error Occurred !!")
   }
  }

  const handleLicense = async(ev)=>{
    const file = ev.target.files[0]
    const res= await uploadCompanyLicense(file,company?._id)
    if(res.data.success){
    notify("Please Reload To See Changes !!")
    }else{
     notify("Error occurred please try again !!")
    }
  }



  return (
    <div className='w-full  bg-white rounded-md  shadow-md'>
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


     <div className="profile-card flex justify-center items-center min-h-[20vh] rounded-md">

      <ImageHover keyword='no-photo.jpg' handler={changeProfile} photo={company?.c_photo}></ImageHover>
      

     </div>
     <div className="w-10/12 pb-5 mx-auto">
      
   <h1 className='font-Poppins text-[15px] text-gray-500 flex justify-start items-center  mt-5 my-2 text-left'><i class='mr-2 bx bxs-user-pin '></i> {company?.c_name}</h1>
   <h1 className='font-Poppins text-[15px] text-gray-500 flex justify-start items-center   my-2 text-left'><i class='bx bxs-info-circle mr-2'></i> {company?.c_desc}</h1>

   <h1 className='font-Poppins text-[15px] text-gray-500 flex justify-start items-center   my-2 text-left'><i class='mr-2 bx bxl-gmail'></i> {company?.c_email}</h1>
   <h1 className='font-Poppins text-[15px] text-gray-500 flex justify-start items-center   my-2 text-left'><i class='mr-2 bx bx-world'></i> <span className='text-blue-400 hover:underline hover:text-blue-600 cursor-pointer'>{company?.c_website}</span></h1>
   <h1 className='font-Poppins text-[15px] text-gray-500 flex justify-start items-center   my-2 text-left'><i class='bx bxs-phone-call mr-2' ></i> {company?.c_phone}</h1>
   <h1 className='font-Poppins text-[15px] text-gray-500 flex justify-start items-center   my-2 text-left'><i class='bx bxs-badge-check mr-2 text-blue-500 text-lg'></i>  {company?.c_isVerified?"Verified":"Not Verified"}</h1>
   <h1 className='font-Poppins text-sm text-gray-500 flex justify-start items-center   my-2 text-left'><i class='mr-2 bx bx-current-location'></i><span className=''>{company?.c_location.formattedAddress}</span></h1>

 
            <div className="flex my-2 w-full justify-between items-center">
              <div className="col pr-2">
              <h1 className='cursor-pointer font-Poppins text-sm text-gray-500 flex justify-start items-center   my-2 text-left'>
            <i class='bx bxs-file-doc pr-2 text-red-500' ></i> {company?.c_license==='no-license'?
            <UploadFile label={"Upload license"} onChange={handleLicense} accept={".pdf"}></UploadFile>  :        <span onClick={()=>{
              downloadFile(company?.c_license)
            }} className='text-blue-500 underline'> Download File </span>
            } </h1>
              </div>
            
    </div>
   
   
    <div className="col flex justify-center">
          
            <Link to={`/editcompany/${company._id}`}>
            <button type="button" class="text-white    font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
            <i class='bx bxs-edit-alt'></i>
            </button>
            </Link>
            <button type="button" onClick={()=>{
            handleDelete(company._id)
            }} class="shadow-md border-2  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 text-redlight bg-reddark">
            <i class='bx bxs-trash ' ></i>
            </button>
            </div>
     </div>

    </div>

  )
}

export default ProfileCard