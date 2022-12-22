import React, { useState } from 'react'
import { giveAnswer } from '../../api/UserApi';
import { useAuthState } from '../../context/AuthContext';

function QuestionCard({question,number,next , qid}) {
  const {auth} = useAuthState()
  const {user} = auth;
  const ans = [1,2,3,4,5]
  const [selected, setselected] = useState(3);
  const onChange = async(val)=>{
    setselected(val)
    console.log(val)
    const payload = { question:qid , answer:val }
    console.log(payload)
    const  res  = await giveAnswer(user._id,qid,val);
    console.log(res)
    if(res.success){
        next()
    }

  }
  return (
    <div className='w-full'>
        <h1 className='text-gray-300  text-xl my-5 font-medium text-left'># Question {number+1} </h1>
        <h1 className='text-blue-500 text-left my-5 font-semibold font-Poppins'>{question}</h1>
        <div className="flex mt-2.5 justify-between">
         {
            ans.map((ele)=>{
                return <button onClick={()=>{onChange(ele)}}  className='w-12 h-12 mr-2 rounded-full bg-bluelight/20 group hover:bg-blue-500'>
                <h1 className='text-blue-500 group-hover:text-white'>{ele}</h1>
            </button>

            })
         }
        </div>

    </div>
  )
}

export default QuestionCard