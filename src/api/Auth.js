import axios from "axios"
import { baseURL, getHeader, userRoute } from "./config"

export const LoginUser = async(payload)=>{

    return await axios.post(`${baseURL}${userRoute}/login`,payload).then((res)=>{
        return res.data;
    }).catch((err)=>{
        return {err:err.response.data.error}
    })

}

export const RegisterUser = async(payload)=>{
    return await axios.post(`${baseURL}${userRoute}/register`,payload).then((res)=>{
        return res.data;
    }).catch((err)=>{
        return {err:err.response.data.error}
    })
}

export const LogoutUser = async(useAuthUpdate)=>{
 
    axios.put(  `${baseURL}${userRoute}/logout` , {} , getHeader() )

    localStorage.clear()
    useAuthUpdate({user:null , token:null})

}


export const getUserById = async(id)=>{
  return await axios.get(`${baseURL}${userRoute}/${id}`,getHeader()).then((res)=>{
        return res.data;
    }).catch((err)=>{
        return {err:err}
    })
}

