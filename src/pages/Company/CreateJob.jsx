import React from "react";
import CompanyNav from "../../components/common/CompanyNav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik } from "formik";
import * as Yup from "yup";
import {useParams, useNavigate} from 'react-router-dom';
import { createJobAPI } from "../../api/JobApi";

function CreateJob() {
  // const {j_name, j_desc, j_mode, j_duedate, j_skills, j_whocanapply, j_openings, j_salary, j_validAge} = req.body

  const ValidationSchema = Yup.object({
    j_name: Yup.string().required("Job Name is Required"),
    j_desc: Yup.string().min(20).max(500).required("Job Description is Required"),
    j_openings: Yup.string().required("Job Opening is Required"),
    j_salary: Yup.string().required("Job Salary is Required"),
    j_validAge: Yup.string().required("Age is required"),
  });

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  const navigate = useNavigate()
  today = yyyy + "-" + mm + "-" + dd;
  const {id} = useParams()
  const jobTypes = ["Work From Home", "Offline", "Hybrid"];
  const whocanapply = [
    "Locomotor Disability",
    "Visual Impairment",
    "Hearing Impairment",
    "Intellectual Disability",
    "Multiple Disabilities",
  ];

  return (
    <div className="w-full">
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
     <div className="fixed w-full z-50 top-0">
     <CompanyNav />

     </div>
      <div className="w-11/12  mx-auto grid grid-cols-2 min-h-screen">
        <div className="col pt-[10vh]">
          <Formik
            validationSchema={ValidationSchema}
            enableReinitialize={true}
            onSubmit={async (values) => {
              // Alert the input values of the form that we filled
              // console.log(values) 
              const{j_name, j_desc, j_mode, j_duedate, j_skills, j_whocanapply, j_openings, j_salary, j_validAge, } = values;

              const payload = { j_skills:j_skills.split(',') , j_name , j_desc, j_mode, j_duedate, company:id , j_whocanapply, j_openings, j_salary, j_validAge, }
              console.log(payload)
     
              const res = await createJobAPI(payload,id)
              if(res.success){
                console.log("here")
                toast('Job Created Successfully !!')
                navigate('/companydashboard')
              
              }else{
                console.log(res.err)
                toast(res.err)
              }
            }}

            initialValues={{
              j_name: "Data Entry Job",
              j_desc: `Be part of the world’s most successful, purpose-led business. Work with brands that are well-loved around the world, that improve the lives of our consumers and the communities around us.`,                            j_mode: "Work From Home",
              j_duedate: today,
              j_skills: "Data Entry , Microsoft Word , Making Food ",
              j_whocanapply: "Locomotor Disability",
              j_openings: "2",
              j_salary: "20000",
              j_validAge: "20",
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              setFieldError,
            }) => (
              <form
                noValidate
                onSubmit={handleSubmit}
                className="mx-auto py-10  w-10/12"
              >
                <h1 className="w-full text-2xl font-medium  text-center font-Poppins ">
                  {" "}
                  Create Job
                </h1>

                <div className="mb-3">
                  <label
                    htmlfor="success"
                    className="block mb-2 w-full text-left text-sm font-medium text-black-500 "
                  >
                    Enter Job Name
                  </label>
                  <input
                    name="j_name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.j_name}
                    type="text"
                    className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-md focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                    placeholder="Typing Job"
                  />
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.j_name && touched.j_name && errors.j_name}
                  </p>
                </div>

                <div className="mb-3">
                  <label
                    htmlfor="success"
                    className="block mb-2 w-full text-left text-sm font-medium text-black-500 "
                  >
                    Enter Job Salary
                  </label>
                  <input
                    name="j_salary"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.j_salary}
                    type="text"
                    className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-md focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                    placeholder="Typing Job"
                  />
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.j_salary && touched.j_salary && errors.j_salary}
                  </p>
                </div>

                <div className="mb-3">
                  <label
                    htmlfor="success"
                    className="block mb-2 w-full text-left text-sm font-medium text-black-500 "
                  >
                    Enter Job Description
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    name="j_desc"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.j_desc}
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                  ></textarea>
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.j_desc && touched.j_desc && errors.j_desc}
                  </p>
                </div>

                <div className="grid gap-5 grid-cols-2 my-2">
                  <div className="mb-3">
                    <label
                      htmlfor="success"
                      className="block mb-2 w-full text-left text-sm font-medium text-black-500 "
                    >
                      Enter Number Of Openings
                    </label>
                    <input
                      name="j_openings"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.j_openings}
                      type="number"
                      className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-md focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                      placeholder="Enter Number of openings"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlfor="success"
                      className="block mb-2 w-full text-left text-sm font-medium text-black-500 "
                    >
                      Enter Due Date
                    </label>
                    <input
                      name="j_duedate"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.j_duedate}
                      type="date"
                      min={today}
                      className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-md focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                      placeholder="Enter Job Description"
                    />
                  </div>
                </div>

                <div className="grid mt-5  gap-5 grid-cols-2">
                  <div className="mb-2">
                    <label
                      htmlfor="success"
                      className="block mb-2 w-full text-left text-sm font-medium text-black-500 "
                    >
                      Select Who Can Apply For This Job
                    </label>
                    <select
                      name="j_whocanapply"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      value={values.j_whocanapply}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ display: "block" }}
                    >
                      {whocanapply.map((sel) => {
                        return <option value={sel}>{sel}</option>;
                      })}
                    </select>
                  </div>

                  <div className="mb-2">
                    <label
                      htmlfor="success"
                      className="block mb-2 w-full text-left text-sm font-medium text-black-500 "
                    >
                      Select Work Mode
                    </label>
                    <select
                      name="j_mode"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      value={values.j_mode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ display: "block" }}
                    >
                      {jobTypes.map((sel) => {
                        return <option value={sel}>{sel}</option>;
                      })}
                    </select>
                  </div>
                </div>

                <div className="grid mt-5 gap-5 grid-cols-2">
                  <div className="mb-3">
                    <label
                      htmlfor="success"
                      className="block mb-2 w-full text-left text-sm font-medium text-black-500 "
                    >
                      Enter Skills Required For Job Name
                    </label>
                    <input
                      name="j_skills"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.j_skills}
                      type="text"
                      className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-md focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                      placeholder="Enter Comma Seperated Skills !! e.g typing , data entry"
                    />
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      {errors.j_skills && touched.j_skills && errors.j_skills}
                    </p>
                  </div>

                  <div className="mb-3">
                    <label
                      htmlfor="success"
                      className="block mb-2 w-full text-left text-sm font-medium text-black-500 "
                    >
                      Enter Minimum Age Requirement
                    </label>
                    <input
                      name="j_validAge"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.j_validAge}
                      type="text"
                      min={18}
                      className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-md focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                      placeholder="Enter Valid Minimum age"
                    />
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      {errors.j_validAge &&
                        touched.j_validAge &&
                        errors.j_validAge}
                    </p>
                  </div>
                </div>

                <button type="submit" className="px-10 w-full rounded-md py-2 5 bg-primary text-white text-center font-Poppins">
                  Create Job 
                </button>

              </form>
            )}
          </Formik>
        </div>
        <div className="col">
          <img
            className="w-full fixed h-screen object-cover"
            src="https://cdn.dribbble.com/users/2311550/screenshots/17323184/media/017bf80c2dc22f431ff30e67b6ed44e7.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default CreateJob;
