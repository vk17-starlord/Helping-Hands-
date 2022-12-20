import React, { useEffect, useState } from 'react'
import {  getUserCompany } from '../api/CompanyApi';


const CompanyStateContext = React.createContext();
const CompanyUpdateContext = React.createContext();

export function useCompanyState() {
    const context = React.useContext(CompanyStateContext);

   
    return context;
  }
   
  export function useCompanyUpdate() {
    const context = React.useContext(CompanyUpdateContext);
   
    return context;
  }

function CompanyContext({children}) {


 const [company, setcompany] = useState([]);

 const refreshData  = async(userid)=>{
  const res = await getUserCompany(userid);
  console.log(res)
  if(res.success){
    setcompany(res.data)
    return true;
  }else{
    return false;
  }
 }
  

 

  return (
    <CompanyStateContext.Provider value={company}>
        <CompanyUpdateContext.Provider value={{setcompany,refreshData}}>    
            {children}
        </CompanyUpdateContext.Provider>
    </CompanyStateContext.Provider>
  )
}

export default CompanyContext