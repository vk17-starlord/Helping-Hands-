import React from "react";
import logo from "../logo.webp";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link, useNavigate } from "react-router-dom";
import { useAuthState, useAuthUpdate } from "../context/AuthContext";
import { LoginUser } from "../api/Auth";

function Login() {

  const navigate = useNavigate();
  const notify = (msg) => toast(msg);  
  const {updateAuth} = useAuthUpdate()
  const handleSubmit = async(values)=>{
  
    const res = await LoginUser(values)
    if(res.success){
      
      const {user,token} = res;
      updateAuth({user,token})
      localStorage.setItem('currentUser',JSON.stringify(user))
      localStorage.setItem('token',token.toString())
      if(user.role==="user"){
        navigate('/dashboard')
      }else if(user.role==='companyuser'){
        navigate('/companydashboard')
      }

    }else{
      notify(res.err)
    }
    
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      password: Yup.string().min(2, "Too Short!").required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
    }),

    onSubmit: async (values) => {
       handleSubmit(values)
    },
  });

  return (
    <div className="w-full grid grid-cols-1 min-h-screen md:grid-cols-2 ">
      
      <div className="col px-10 min-h-screen flex flex-col justify-center items-center">
      <ToastContainer position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"/>
        <div className="w-full flex justify-start items-center px-20 py-10">
      
          <img
            src={logo}
            className="w-14 bg-red-50 p-2 h-14 object-contain rounded-full"
            alt=""
          />
          <h1 className="px-5 font-bold font-Poppins text-2xl ">
            Helping Hands{" "}
          </h1>
        </div>

        <div className="form w-9/12">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-6 flex flex-col justify-start items-start">
              <label
                htmlFor="email"
                className="block text-gray-500 mb-2 text-sm font-medium  "
              >
                Enter Your email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className='className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                onChange={formik.handleChange}
                value={formik.values.email}
              />

              {formik.touched.email && formik.errors.email && (
                <span className="text-red-400">{formik.errors.email}</span>
              )}
            </div>

            <div className="mb-6 flex flex-col justify-start items-start">
              <label
                htmlFor="password"
                className="block text-gray-500 mb-2 text-sm font-medium  "
              >
                Enter Your Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className='className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <span className="text-red-400">{formik.errors.password}</span>
              )}
            </div>

            <button
              type="submit"
              className="w-full text-white font-Poppins px-5 py-2.5  rounded-md my-2 bg-[#386AFD]"
            >
              Submit
            </button>
          </form>
          <p className="font-Poppins  ">
            Don't Have An Account ?{" "}
            <Link to={"/Register"}>
              <span className="text-[#386AFD] cursor-pointer  ">Register</span>
            </Link>{" "}
          </p>
          <p className="font-Poppins  ">
           Login as   ?{" "}
            <Link to={"/adminlogin"}>
              <span className="text-[#386AFD] cursor-pointer  ">Admin</span>
            </Link>{" "}
          </p>
        </div>
      </div>
      <div className="col bg-primary login-bg"></div>
    </div>
  );
}

export default Login;
