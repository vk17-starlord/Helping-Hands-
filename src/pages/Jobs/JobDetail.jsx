import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobByID } from "../../api/JobApi";
import { ApplyToJob } from "../../api/UserApi";
import UserNav from "../../components/common/UserNav";
import { useAuthState } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
function JobDetail() {
  const { id } = useParams();
  const [job, setjob] = useState([]);
  const [jobskills, setjobskills] = useState([]);
  const [applied, setapplied] = useState(false);

  const getData = async () => {
    const res = await getJobByID(id);
    if (res.success) {
      console.log(res.data);
      setjob(res.data);
      console.log()
      setjobskills(res.data.j_skills[0].split(','))
      
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const {auth }= useAuthState()
  const {user} = auth;
  const ApplyJob = async()=>{
    const uid = user._id;
    const res = await ApplyToJob(uid,id);
    console.log(res)
    if(res.success){
        toast("Applied To Job Successfully!!")
    }else{
        toast(res.err)
    }
  }

  return (
    <div className="w-full min-h-screen ">
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
      <UserNav />
      <div className="container py-5 w-10/12 mx-auto ">
        <div className=" w-full flex justify-between items-center">
          <div className="col flex items-center justify-center mb-5">
            <img
              src={job?.company?.c_photo}
              className="w-20 h-20 mr-2 rounded-full"
              alt=""
            />
            <div className="block ">
              <h1 className="text-2xl px-2 font-bold text-black ">
                {job?.company?.c_name}
              </h1>
              <h1 className="text-lg px-2 text-left font-medium text-gray-500 ">
                {job?.j_name}
              </h1>
            </div>
          </div>

          

          <button disabled={applied} className="my-4 py-2.5 px-10  rounded-md bg-primary text-white ">
            View Company
          </button>
        </div>

        <div className="container flex justify-start items-center mt-2 mb-5">
          <h1 className="font-medium inline-flex justify-center items-center mr-10 font-Poppins text-sm text-gray-500">
            <i class="bx mr-1 bxs-briefcase-alt-2"></i><span className="text-black mr-2">  Mode </span>-  {job?.j_mode}
          </h1>
          <h1 className="font-medium inline-flex justify-center items-center mr-10 font-Poppins text-sm text-gray-500">
          <i class='bx mr-1 bxs-user-pin'></i><span className="text-black mr-2">Openings </span> -  {job?.j_openings}
          </h1>
          <h1 className="font-medium mr-10 inline-flex justify-center items-center font-Poppins text-sm text-gray-500">
          <i class='bx mr-1 bx-money ' ></i> <span className="text-black mr-2">  Salary </span> -  <i class='bx bx-rupee' ></i> {job?.j_salary}
          </h1>
          <h1 className="font-medium inline-flex justify-center items-center font-Poppins text-sm text-gray-500">
          <i class='bx bx-current-location mr-1'></i> <span className="text-black mr-2">  Location </span> -   {job?.company?.c_location?.formattedAddress}
          </h1>
        </div>

        <div className="container my-2">
          <h1 className="text-md  font-bold text-black my-2 text-left  ">
            {" "}
            About{" "}
          </h1>
          <p className="text-sm font-Poppins text-left text-gray-500">
            {job?.j_desc}{" "}
          </p>
        </div>
      </div>

       <div className="container w-10/12 mx-auto mt-2">
          <h1 className="text-md  font-bold text-black my-2 text-left  ">
           Skills Required  
          </h1>

          <div className="flex justify-start  items-center">
            {
                jobskills?.map((skill)=>{
                    return  <button className="w-max  my-6 mr-10 py-2.5 bg-bluelight/10 rounded-md text-primary px-10"> {skill} </button>
                })
            }
          </div>

       </div>



       <div className="container w-10/12 mx-auto mt-2">
          <h1 className="text-md  font-bold text-black my-2 text-left  ">
            Who Can Apply
          </h1>

          <div className="flex justify-start  items-center">
            {
                job?.j_whocanapply?.map((skill)=>{
                    return  <button className="w-max  my-6 mr-10 py-2.5 bg-bluelight/10 rounded-md text-primary px-10"> {skill} </button>
                })
            }
          </div>

       </div>

       <div className="flex mb-10 items-center justify-center">
       <button  onClick={()=>{
        ApplyJob()
       }} className="my-4 py-2.5 px-10  rounded-md bg-primary text-white ">
           Apply Job
          </button>
       </div>


    </div>
  );
}

export default JobDetail;
