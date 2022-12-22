import axios from "axios"
import { baseURL, getMultiFormHeader, userRoute , getHeader, questionRouter} from "./config"

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

export const getQuestions = async()=>{
    return await axios.get(`${baseURL}${questionRouter}`,getHeader()).then((res)=>{
        return res.data;
    }).catch((err)=>{
        console.log(err)
        return {err:"error occurred"}
    })
}


export const giveAnswer = async(userId,question,answer)=>{
    return await axios.put(`${baseURL}${questionRouter}/addAnswerResponse/${userId}`,{question,answer},getHeader()).then((res)=>{
        return res.data;
    }).catch((err)=>{return {err:"error occcurred"}}
    )}
