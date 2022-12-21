import React, { useEffect, useState } from "react";
import CompanyNav from "../../components/common/CompanyNav";
import { useParams } from "react-router-dom";
import { getAppliedUsers } from "../../api/CompanyApi";
import { downloadFile } from "../../utils";
import { updateJobStatus } from "../../api/JobApi";
function AppliedUsers() {
  const { cid, jid } = useParams();
  const [Users, setUsers] = useState(null);
  const getData = async () => {
    const res = await getAppliedUsers(cid, jid);
    if (res.success) {
      console.log(res.data[0].j_applied);
      setUsers(res.data[0].j_applied);
    }
  };
  useEffect(() => {
    const getData = async () => {
      const res = await getAppliedUsers(cid, jid);
      if (res.success) {
        console.log(res.data[0].j_applied);
        setUsers(res.data[0].j_applied);
      }
    };
    getData();
  }, []);

  const modeOption = ["Select Status","Under Review", "Hired", "Not Selected"];
  const handleChange = async (val, id) => {
    if(val==="Select Status"){
      return;
    }
    const res = await updateJobStatus(val, cid, jid, id);
    if(res.success){
      getData()
    }
    console.log(res);
  };

  return (
    <div className="w-full">
      <CompanyNav />

      <div className="w-10/12 grid grid-cols-5 bg-gray-50 py-2.5 px-2.5 mx-auto my-5 rounded-md p-5bg-gray-50">
        <h1 className="text-left px-3 font-Poppins text-sm font-medium ">Name</h1>
        <h1 className="text-left px-3 font-Poppins text-sm font-medium ">Email</h1>
        <h1 className="text-left px-3 font-Poppins text-sm font-medium ">Certificate</h1>
        <h1 className="text-left px-3 font-Poppins text-sm font-medium ">Current Status</h1>
        <h1 className="text-left px-3 font-Poppins text-sm font-medium ">Change Status</h1>
      </div>

      <div className="w-10/12 mx-auto  py-5 ">
        {Users?.map((res) => {
          return (
            <div className="grid px-5 py-5 rounded-md mx-auto bg-gray-50/50 grid-cols-5">
              <div className="flex justify-start items-center">
                <img
                  className="w-10 h-10 mr-5 rounded-full object-cover object-center"
                  src={
                    res.user.photo === "no-file"
                      ? "https://cdn.dribbble.com/users/594316/screenshots/16557702/media/d77aa195b67473edb6c386b355126078.jpg"
                      : res.user.photo
                  }
                  alt=""
                />
                <h1 className="font-Poppins text-gray-600 font-medium text-sm">
                  {res.user?.name}
                </h1>
              </div>

             <div className="col px-4 flex justify-start items-center">
             <h1 className='font-Poppins text-gray-600  text-sm'>{res.user?.email}</h1>
             </div>

             
             <div className="col px-4 flex justify-start items-center">
             {res.user.certificate === "no-file" ? (
                <span className="text-red-600">No Certificate Uploaded</span>
              ) : (
                <button
                  className={"inline-flex justify-center items-center"}
                  onClick={() => {
                    downloadFile(res.user?.certificate);
                  }}
                >
                  <i class="bx bxs-cloud-download pr-2"></i> View Certificate
                </button>
              )}             </div>

             
             <div className="col px-4 flex justify-start items-center">
              {res.status ==="Hired" &&              <h1 className='font-Poppins text-greenDark bg-greenLight w-full rounded-md py-2.5  text-sm'>{res.status}</h1>}
              {res.status ==="Under Review" &&              <h1 className='font-Poppins text-yellowdark bg-yellowlight w-full rounded-md py-2.5  text-sm'>{res.status}</h1>}
              {res.status ==="Not Selected" &&              <h1 className='font-Poppins text-reddark bg-redlight w-full rounded-md py-2.5  text-sm'>{res.status}</h1>}
              {res.status ==="Applied" &&              <h1 className='font-Poppins text-primary bg-bluelight/20 w-full rounded-md py-2.5  text-sm'>{res.status}</h1>}

             </div>

             <div className="col px-4 flex justify-start items-center">

             <select
                     onChange={(ev)=>{
                      const val = ev.target.value;
                      handleChange(val,res.user._id)
                    }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    
                      style={{ display: "block" }}
                    >
                      {modeOption.map((sel) => {
                        return <option  value={sel}>{sel}</option>;
                      })}
                    </select>

             </div>


            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AppliedUsers;
