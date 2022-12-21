import React from "react";
import logo from "../logo.webp";
import { useFormik , Field} from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { RegisterUser } from "../api/Auth";
import { useAuthUpdate } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const navigate = useNavigate();
  const notify = (msg) => toast(msg);
  const { updateAuth } = useAuthUpdate();
  const selectOptions = [
    "Locomotor Disability",
    "Visual Impairment",
    "Hearing Impairment",
    "Intellectual Disability",
    "Multiple Disabilities",
  ];
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      role: "",
      disability:"Locomotor Disability"
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      password: Yup.string().min(2, "Too Short!").required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      role: Yup.string().required("Required"),

    }),

    onSubmit: async (values) => {
      console.log(values)
      const res = await RegisterUser(values);
      if (res.success) {
        const { user, token } = res;
        updateAuth({ user, token });
        localStorage.setItem("currentUser", JSON.stringify(user));
        localStorage.setItem("token", token.toString());
        if (user.role === "user") {
          navigate("/dashboard");
        } else if (user.role === "companyuser") {
          navigate("/companydashboard");
        }
      } else {
        console.log(res);
        notify(res.err);
      }
    },
  });

  return (
    <div className="w-full grid grid-cols-1 min-h-screen md:grid-cols-2 ">
      <div className="col px-10 min-h-screen flex flex-col justify-center items-center">
        <div className="w-full flex justify-start items-center px-20 py-10">
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
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
                htmlFor="text"
                className="block text-gray-500 mb-2 text-sm font-medium  "
              >
                Enter Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className='className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                onChange={formik.handleChange}
                value={formik.values.name}
              />

              {formik.touched.name && formik.errors.name && (
                <span className="text-red-400">{formik.errors.name}</span>
              )}
            </div>

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

            <div className="flex my-5">
              <div className="flex items-center mr-4">
                <input
                  id="role"
                  type="radio"
                  onChange={formik.handleChange}
                  value={"user"}
                  name="role"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                />
                <label
                  htmlFor="role"
                  className="ml-2 text-sm font-medium text-gray-900 "
                >
                  Disabled
                </label>
              </div>
              <div className="flex items-center mr-4">
                <input
                  id="role"
                  type="radio"
                  onChange={formik.handleChange}
                  value={"companyuser"}
                  name="role"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                />
                <label
                  htmlFor="role"
                  className="ml-2 text-sm font-medium text-gray-900 "
                >
                  Company
                </label>
              </div>
            </div>

          {
            formik.values.role==="user" &&
            <div  className=" w-full my-5">
      
      <select
        name="disability"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        value={formik.values.disability}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        style={{ display: 'block' }}
      >
       {
        selectOptions.map((sel)=>{
          return  <option value={sel}>{sel}</option>
        })
       }
      </select>
            </div>

          }
            <button
              type="submit"
              className="w-full text-white font-Poppins px-5 py-2.5  rounded-md my-2 bg-[#386AFD]"
            >
              Submit
            </button>
            
          </form>
          <p className="font-Poppins  ">
            Already Have An Account ?{" "}
            <Link to={"/"}>
              <span className="text-[#386AFD] cursor-pointer  ">Login</span>
            </Link>{" "}
          </p>
        </div>
      </div>
      <div className="col bg-primary login-bg"></div>
    </div>
  );
}

export default Register;
