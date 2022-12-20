import React from "react";
import logo from "../../logo.webp";
import { useFormik } from "formik";
import * as Yup from "yup";

import {  useNavigate } from "react-router-dom";
import { LoginAsAdmin } from "../../api/Auth";
import { useAuthUpdate } from "../../context/AuthContext";

function AdminLogin() {
  const {updateAuth} = useAuthUpdate()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      password: Yup.string().min(2, "Too Short!").required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
    }),

    onSubmit: async(values) => {
      
      const res = await LoginAsAdmin(values)
      if(res.success){
      
        const {user,token} = res;
        updateAuth({user,token})
        localStorage.setItem('currentUser',JSON.stringify(user))
        localStorage.setItem('token',token.toString())
      
        if(user.role==='admin'){
          navigate('/AdminDashboard')
        }

      }else{

      }
      
    },
  });

  return (
    <div className="w-full grid grid-cols-1 min-h-screen md:grid-cols-2 ">
      <div className="col px-10 min-h-screen flex flex-col justify-center items-center">
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
            <div class="mb-6 flex flex-col justify-start items-start">
              <label
                htmlFor="email"
                class="block text-gray-500 mb-2 text-sm font-medium  "
              >
                Enter Your email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className='class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                onChange={formik.handleChange}
                value={formik.values.email}
              />

              {formik.touched.email && formik.errors.email && (
                <span className="text-red-400">{formik.errors.email}</span>
              )}
            </div>

            <div class="mb-6 flex flex-col justify-start items-start">
              <label
                htmlFor="password"
                class="block text-gray-500 mb-2 text-sm font-medium  "
              >
                Enter Your Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className='class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
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
        </div>
      </div>
      <div className="col bg-primary login-bg"></div>
    </div>
  );
}

export default AdminLogin;
