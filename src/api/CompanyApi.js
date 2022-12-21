import axios from "axios"
import { baseURL, getMultiFormHeader, companyRoute, getHeader, jobRoute } from "./config"


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

  export const DeleteCompany = async(id)=>{
    return await axios.delete(`${baseURL}${companyRoute}/${id}`,getHeader()).then((res)=>{
        return res.data;
    }).catch(()=>{
        return {err:"error occurred"}
    })
}

export const getCompanyById = async(id)=>{
    return await axios.get(`${baseURL}${companyRoute}/${id}`,getHeader()).then((res)=>{
        return res.data;
    }).catch((err)=>{
        return {err:"Error occurred"}
    })
}

export const UpdateCompanyById = async(id,payload)=>{

    return await axios.put(`${baseURL}${companyRoute}/${id}`,payload,getHeader()).then((res)=>{
        return res.data;
    }).catch((err)=>{
        return {err:"Error occurred"}
    })
    
}


export const getAppliedUsers = async(cid,jid)=>{
    return axios.get(`${baseURL}${jobRoute}/${cid}/jobs/${jid}`,getHeader()).then((res)=>{
        return res.data
    }).catch((err)=>{
        return err;
    })
}