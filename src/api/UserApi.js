import axios from "axios"
import { baseURL, getMultiFormHeader, userRoute , getHeader} from "./config"

export const uploadProfile = async(file,uid)=>{
    const data ={file:file}
    return await axios.put(`${baseURL}${userRoute}/${uid}/photo`,data,getMultiFormHeader());  
}

export const uploadCertificate = async(file,uid)=>{
    const data ={file:file}
    return await axios.put(`${baseURL}${userRoute}/${uid}/certificate`,data,getMultiFormHeader());  
}


export const ApplyToJob = async(id,jobid)=>{
    return await axios.put(`${baseURL}${userRoute}/${id}/apply/${jobid}`,{},getHeader()).then((res)=>{
        return res.data
    }).catch((err)=>{
        return {err:err.response.data.error}
    })
}

