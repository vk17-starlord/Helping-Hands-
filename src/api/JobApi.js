import axios from 'axios';
import {baseURL, jobRoute, getHeader} from './config';


export const createJobAPI = async(payload,cid)=>{
    return await axios.post(`${baseURL}${jobRoute}/${cid}/createjob`,payload,getHeader()).then((res)=>{
          return res.data
      }).catch((err)=>{
          console.log(err.response.data.err)
          return {err:err.response.data.err}
      })
  }

  export const getCompanyJobs = async(cid)=>{
    return axios.get(`${baseURL}${jobRoute}/${cid}/jobs`,getHeader()).then((res)=>{
        return res.data
    }).catch((err)=>{
        console.log(err)
        return {err:err}
    })
  }

  export const DeleteJobById = async(companyId ,jobId)=>{
    return await axios.delete(`${baseURL}${jobRoute}/${companyId}/delete/${jobId}`,getHeader()).then((res)=>{
        return res.data;
    }).catch(()=>{
        return {err:"error occurred"}
    })
  }


  export const getAllJobs = async()=>{
    return axios.get(`${baseURL}${jobRoute}/`,getHeader()).then((res)=>{
        return res.data
    }).catch((err)=>{
        console.log(err)
        return {err:err}
    })
  }

  export const getJobByID  = async(id)=>{
    return axios.get(`${baseURL}${jobRoute}/${id}`,getHeader()).then((res)=>{
        return res.data
    }).catch((err)=>{
        console.log(err)
        return {err:err}
    })
  }

  export const getFilteredJobs = async(params)=>{
    console.log({params:params})
    return axios.get(`${baseURL}${jobRoute}/`,{params:params}, getHeader()).then((res)=>{
        return res.data
    }).catch((err)=>{
        console.log(err)
        return {err:err}
    })
  }

  
  export const updateJobStatus = async(status , cid , jid , id)=>{
    return axios.put(`${baseURL}${jobRoute}/${cid}/${jid}/${id}/status`,{status:status},getHeader()).then((res)=>{
        return res.data
    }).catch((err)=>{
        return {err:"error"}
    })
  }