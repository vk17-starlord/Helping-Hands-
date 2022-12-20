import { baseURL, companyRoute, getHeader, userRoute, adminRoute} from './config';
import axios from 'axios';



export const getCompanies = async()=>{
  
    return await axios.get(`${baseURL}${companyRoute}/`,getHeader()).then((res)=>{
        return res.data
    }).catch((err)=>{
    
        return {err:err.response.data.error}
    })
}



export const getUsers = async()=>{
  
    return await axios.get(`${baseURL}${userRoute}/`,getHeader()).then((res)=>{
        return res.data
    }).catch((err)=>{
    
        return {err:err.response.data.error}
    })
}

export const verifyUser = async(id)=>{
    return await axios.put(`${baseURL}${adminRoute}/user/${id}/isVerified`,{},getHeader()).then((res)=>{
        return res.data
    }).catch((err)=>{
        return {err:err.response.data.error}
    })
}


export const verifyCompany = async(id)=>{
    return await axios.put(`${baseURL}${adminRoute}/company/${id}/isVerified`,{},getHeader()).then((res)=>{
        return res.data
    }).catch((err)=>{
        return {err:err.response.data.error}
    })
}

