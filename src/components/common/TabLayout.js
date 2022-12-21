import React, { useEffect, useState } from "react";
import { getCompanies, getUsers } from "../../api/AdminApi";
import TableLayout from "./TableLayout";
import { downloadFile } from "../../utils";
import TableData from "./TableData";
import CompanyData from "./CompanyData";

function TabLayout() {
  const [showUser, setshowUser] = useState(true);
  
  const toggle = () => {
    setshowUser(!showUser);
  };

  const [Users, setUsers] = useState([]);
  const [Companies, setCompanies] = useState([]);

//   get companies
  useEffect(() => {
    const getData = async()=>{
        const res =await getCompanies();
        console.log(res.data)
        setCompanies(res.data)
    }

    getData()
  
  }, []);
const getUserData = async()=>{
    const res =await getUsers();
  
    setUsers(res.data)
}
 
const getCompanyData = async()=>{
  const res =await getCompanies();
  console.log("now here")
  setCompanies(res.data)

}


//   get users
useEffect(() => {
    const getData = async()=>{
        const res =await getUsers();
        console.log(res.data)
        setUsers(res.data)
    }

    getData()
  
  }, []);


  const active="cursor-pointer bg-primary/10 text-primary px-5 py-2.5 rounded-md "
  const notactive = "cursor-pointer hover:bg-primary/10 hover:text-primary text-gray-600 px-5 py-2.5 rounded-md"
  return (
    <div className="w-10/12 mx-auto">
      <div className="px-2 gap-1 font-Poppins flex justify-start items-center py-2.5 mx-auto my-5 rounded-lg w-full bg-gray-50">
        <div className="col px-2 ">
          <h1 onClick={()=>{toggle()}} className={showUser ? active : notactive}>
            Disabled User's List{" "}
          </h1>
        </div>

        <div  className="col cursor-pointer px-2 ">
         <h1 onClick={()=>{toggle()}} className={ !showUser ? active : notactive}>
            Companies List{}
          </h1>
        </div>
      </div>
      <div className="w-full">
      
        { showUser && 
          <TableLayout heading={["Full Name ","Email Address","Certificate","Verification Status","Modify Status"]} >
          <TableData setUser={getUserData} Users={Users} ></TableData>

          </TableLayout>
          }
        {!showUser &&
         <TableLayout  heading={["Company Name ","Email Address","License","Verification Status","Modify Status"]}>
         <CompanyData setCompanies={getCompanyData} companies={Companies} />
         </TableLayout>
          }
        
      </div>
    </div>
  );
}

export default TabLayout;
