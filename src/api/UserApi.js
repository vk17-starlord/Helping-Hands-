import axios from "axios"
import { baseURL, getMultiFormHeader, userRoute } from "./config"

export const uploadProfile = async(file,uid)=>{
    const data ={file:file}
    return await axios.put(`${baseURL}${userRoute}/${uid}/photo`,data,getMultiFormHeader());  
}

export const uploadCertificate = async(file,uid)=>{
    const data ={file:file}
    return await axios.put(`${baseURL}${userRoute}/${uid}/certificate`,data,getMultiFormHeader());  
}
