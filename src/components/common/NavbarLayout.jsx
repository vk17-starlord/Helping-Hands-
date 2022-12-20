
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LogoutUser } from '../../api/Auth'
import { useAuthState, useAuthUpdate } from '../../context/AuthContext'
import logo from "../../logo.webp"
export const NavbarLayout = ({children}) => {
       

    const navigate = useNavigate();
   const {auth} = useAuthState()
   const  {updateAuth} = useAuthUpdate()
   const {user} = auth;

   

    return (
        <div className='w-full min-h-[10vh] bg-white flex justify-between items-center'>
            <div className="container w-10/12 flex justify-between items-center min-h-[10vh] mx-auto">
          
            <div className="flex justify-center items-center">
             
             <img src={logo} className=" cursor-pointer w-12 h-12 rounded-full" alt="" />
             <h1 className="px-5 font-bold font-Poppins text-sm ">
            Helping Hands
            </h1>
            
        
            </div>
              
              {
              children
              }

              
<div className="flex profile py-2.5 items-center">
            
            {
              user?.role==="companyuser"?
       
          <div className="flex items-center " >
                 <img className='w-12 object-top h-12 rounded-full object-cover' src={user?.photo==="no-file"?"https://cdn.dribbble.com/userupload/4029627/file/original-1b483a3d2c180e428aa5fddbfc192e77.png?compress=1&resize=1504x1128":user?.photo} alt="" />
               <h1 className='font-Poppins mx-2'>{user?.name}</h1>
          </div>
              :
        <Link to={`/user/${user?._id}`}>
          <div className="flex items-center " >
          <img className='w-12 h-12 object-top rounded-full object-cover' src={user?.photo==="no-file"?"https://cdn.dribbble.com/userupload/4029627/file/original-1b483a3d2c180e428aa5fddbfc192e77.png?compress=1&resize=1504x1128":user?.photo} alt="" />
               <h1 className='font-Poppins mx-2'>{user?.name}</h1>
          </div>
        </Link>
          
            }
          
              <button onClick={()=>{
                
                 LogoutUser(updateAuth)
                 localStorage.clear()
                 navigate('/')
              }} className='w-12 h-12 mx-2 bg-redlight rounded-full text-reddark text-lg'><i class='bx bxs-log-in-circle' ></i></button>
          </div>
          
     

       

        </div>
    </div>
    )
}