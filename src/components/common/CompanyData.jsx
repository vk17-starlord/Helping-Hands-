import React from 'react'
import { downloadFile } from '../../utils'
import profile from "../../assets/dummy.webp"
import { verifyCompany } from '../../api/AdminApi'
function CompanyData({companies,setCompanies}) {

  const updateCompany = async(id)=>{

    const res = await verifyCompany(id)
    console.log("here")
    if(res){
      setCompanies()
    }
    
  }

  return (
    <div className="bg-gray-50/50 w-full pb-5">
    {
        companies?.map((company)=>{
        
            return <div key={company._id} className="grid border-gray-50 border-1   w-full grid-cols-5">
                <div className="col flex justify-start items-center px-7 py-2.5">
                    <div className="flex justify-start items-center">
                         <img className='w-10 h-10 mr-5 rounded-full object-cover object-center' src={company?.c_photo==="no-photo.jpg"?profile:company.c_photo} alt="" />
                        <h1 className='font-Poppins text-gray-600 font-medium text-sm'>{company?.c_name}</h1>
                    </div>
                </div>
                <div className="col flex justify-start items-center text-left px-7 py-2.5">
                <h1 className='font-Poppins text-gray-600  text-sm'>{company?.c_email}</h1>

                </div>
                
                <div className="col flex justify-start items-center text-left px-7 py-2.5">
                  {  company.c_license==="no-license"  ? <span className='text-red-600'>No License Uploaded</span>:
<button className={"inline-flex justify-center items-center"} onClick={()=>{
downloadFile(companies.c_license)
}}><i class='bx bxs-cloud-download pr-2'></i> View Certificate</button>                      }
                  </div>
                <div className="col cursor-pointer text-left px-7 py-2.5">
              
                 { company.c_isVerified ? 
                  <div className="text-greenDark font-medium text-center  bg-greenLight px-10 py-2.5 rounded-md">
                  Verified
              </div>
                 :<div className="text-reddark font-medium text-center  bg-redlight px-10 py-2.5 rounded-md">
                 Not  Verified
               </div>} 
                </div>

                <div className="col">

                <button onClick={()=>{updateCompany(company?._id)}} 

class="text-white w-9/12 my-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center justify-center " type="button">
 Verify Company <i class='bx bxs-badge-check mx-2 text-xl'></i>
</button>

                </div>
            </div>

        })
    }
    </div>

  )
}

export default CompanyData