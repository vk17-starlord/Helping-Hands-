import axios from "axios"
import { baseURL, getMultiFormHeader, companyRoute, getHeader } from "./config"


export const uploadCompanyProfile = async(file,cid)=>{
    const data ={file:file}
    return await axios.put(`${baseURL}${companyRoute}/${cid}/c_photo`,data,getMultiFormHeader());  
}

export const uploadCompanyLicense = async(file,cid)=>{
    const data ={file:file}
    return await axios.put(`${baseURL}${companyRoute}/${cid}/license`,data,getMultiFormHeader());  
}

export const getUserCompany = async(id)=>{
    return await axios.get(`${baseURL}${companyRoute}/getcompany/${id}`,getHeader()).then((res)=>{
        console.log(res.data)
        return res.data
    }).catch((err)=>{
        console.log(err.response.data)
        return {err:err.response.data.error}
    })
}

export const createCompany = async(payload)=>{
    return await axios.post(`${baseURL}${companyRoute}`,payload,getHeader()).then((res)=>{
          return res.data
      }).catch((err)=>{
          console.log()
          return {err:err.response.data.error}
      })
  }

