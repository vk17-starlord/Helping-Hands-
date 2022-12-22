import React, { useEffect, useState } from 'react'
import QuestionCard from './QuestionCard'
import {useAuthState} from '../../context/AuthContext';
import { getQuestions } from '../../api/UserApi';
import { useNavigate } from 'react-router-dom';

function Questions() {
 const [questions, setquestions] = useState(null);
 const [current, setcurrent] = useState(0);
 const navigate = useNavigate()
  useEffect(()=>{
    const getData = async()=>{
      const res = await getQuestions();
      if(res.success){
        console.log(res.data)
        if(res.data.length > 0 ){
          setquestions(res.data)
        }
      }
      
    }
    getData()
  },[])

  const next = ()=>{
    console.log(current,questions.length)
    console.log(current,questions)
    if(current<questions?.length-1){
      console.log("changed")
      setcurrent(current+1)
    }else{
      navigate('/dashboard')
    }
  }

  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-gray-50'>

      <div className="modal  rounded-lg pb-5 bg-white shadow-xl px-5 ">
        { questions && <QuestionCard next={next} qid={questions[current]._id}  question={questions[current].question} number={current}/>}
      </div>      
        
    </div>
  )
}

export default Questions