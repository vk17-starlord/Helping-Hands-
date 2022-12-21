import React from 'react'
import {Formik} from 'formik';
import * as Yup from "yup";
import { createCompany } from '../../api/CompanyApi';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CompanyNav from '../../components/common/CompanyNav';

function CreateCompany() {
    const navigate = useNavigate()
    const ValidationSchema = Yup.object({
    c_name : Yup.string().min(2).required(),
    c_desc: Yup.string().max(250).min(10).required(),
    c_website:  Yup.string().required()
    .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Enter correct url!'
    )
    .required('Please enter website'),
    c_phone:Yup.number("Must be valid phone number").min(10).required(),
    c_email:Yup.string().email().required(),
    c_address:Yup.string().required(),
 
  })

  const notify = (msg) => toast(msg); 


  return (
   <div className="w-full">
    <CompanyNav>
        
    </CompanyNav>
     <div className='w-full min-h-screen grid grid-cols-2'>
        <div className="col px-10 flex justify-center items-center">
            <Formik
             validationSchema={ValidationSchema}
             initialValues={
                {c_name : "Microsoft",
                c_desc: "Love Windows X0X)",
                c_website:  "https://jobs.jp.com/us/",
                c_phone:8956884047,
                c_email:"microsoft@gmail.com",
                c_address:"Las vegas , Richie Rich",
          
                }
             }

             onSubmit={async(values) => {
                // Alert the input values of the form that we filled
                console.log(values)
               const res = await createCompany(values)
               console.log(res)
               if(res.success){
                notify('Company Created Successfully!!')
                navigate('/companydashboard')
               }else{
                notify(res.err,"😟")
              
               }
              }
              }
            >

{({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          setFieldError

        }) => (<form noValidate onSubmit={handleSubmit} className=" w-10/12">
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
               <h1 className='w-full my-5 font-bold font-Poppins text-2xl'>Create Company </h1>
               <div className="mb-3">
                  <label htmlfor="success" className="block mb-2 w-full text-left text-lg font-medium text-black-500 ">
                    Enter Company Name
                  </label>
                  <input 
                  name='c_name'
                   onChange={handleChange}
                    onBlur={handleBlur}
                     value={values.c_name}
                     type="text" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="John Doe" />
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.c_name
                      && touched.c_name
                      && errors.c_name
                    }
                  </p>
                </div>

                
               <div className="mb-3">
                  <label htmlfor="success" className="block mb-2 w-full text-left text-lg font-medium text-black-500 ">
                    Enter Company Email
                  </label>
                  <input 
                  name='c_email'
                   onChange={handleChange}
                    onBlur={handleBlur}
                     value={values.c_email}
                     type="text" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="John Doe" />
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.c_email
                      && touched.c_email
                      && errors.c_email
                    }
                  </p>
                </div>

                <div className="mb-3">
                  <label htmlfor="success" className="block mb-2 w-full text-left text-lg font-medium text-black-500 ">
                    Enter Company Description
                  </label>
                  <input 
                  name='c_desc'
                   onChange={handleChange}
                    onBlur={handleBlur}
                     value={values.c_desc}
                     type="textarea" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="Describe Your Company" />
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.c_desc
                      && touched.c_desc
                      && errors.c_desc
                    }
                  </p>
                </div>

                <div className="grid gap-2 grid-cols-2">
                    
                <div className="mb-3">
                  <label htmlfor="success" className="block mb-2 w-full text-left text-lg font-medium text-black-500 ">
                    Enter Company contact
                  </label>
                  <input 
                  name='c_phone'
                   onChange={handleChange}
                    onBlur={handleBlur}
                     value={values.c_phone}
                     type="number" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                      placeholder="Enter Contact Number" />
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                   
                    { 
                      errors.c_phone
                      && touched.c_phone
                      && errors.c_phone
                    }

                  </p>
                </div>



                <div className="mb-3">
                  <label htmlfor="success" className="block mb-2 w-full text-left text-lg font-medium text-black-500 ">
                    Enter  Company Address
                  </label>
                  <input 
                  name='c_address'
                   onChange={handleChange}
                    onBlur={handleBlur}
                     value={values.c_address}
                     type="textarea" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                      placeholder="Enter Company Address" />
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                   
                    { 
                      errors.c_address
                      && touched.c_address
                      && errors.c_address
                    }

                  </p>
                </div>
                </div>

                <div className="w-full">


                    
                <div className="mb-5">
                <label htmlfor="success" className="block mb-2 w-full text-left text-lg font-medium text-black-500 ">
                    Enter Company Website                  </label>
                  <input 
                  name='c_website'
                   onChange={handleChange}
                    onBlur={handleBlur}
                     value={values.c_website}
                     type="textarea" id="success" className="my-3 border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                      placeholder="Enter Company Website" />
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                   
                    { 
                      errors.c_website
                      && touched.c_website
                      && errors.c_website
                    }

                  </p>
                </div>
                <div>
{/*                     
                <label className="block mb-2 w-full text-left text-lg font-medium text-black-500 " htmlfor="file_input">Upload License file <span className='text-[12px] text-red-400'>max 5 mb*</span></label>
                <input
                accept='application/pdf'
                 onChange={(ev) => {
                  const MAX_FILE_SIZE = 5120 // 5MB
                  const file = ev.target.files[0];
                  const fileSizeKiloBytes = file.size / 1024;
                  console.log(fileSizeKiloBytes);
                  if (fileSizeKiloBytes <= MAX_FILE_SIZE) {
                    setFieldValue("c_license",file  )

                   
                    console.log(values.c_license)

                  }else{
                    setFieldError("c_license","Upload PDF less than 5 mb")
                  };
                }} className="p-3 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer  " aria-describedby="file_input_help" id="file_input" type="file" />
                <p class="mt-1 mb-4 text-[13px] text-red-500 " id="file_input_help">
                { 
                      errors.c_license
                      && touched.c_license
                      && errors.c_license
                    }

                </p> */}
                </div>
 

                </div>



                <button type="submit" className='w-full bg-primary  px-10 border-none text-white rounded-xl py-2.5 '> Register My Company </button>

        </form>)}

            </Formik>
        </div>
        <div className="col w-full h-full">
            <img src="https://images.pexels.com/photos/2078774/pexels-photo-2078774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='w-full max-h-screen object-cover' alt="" />
        </div>
    </div>
   </div>
  )
}

export default CreateCompany