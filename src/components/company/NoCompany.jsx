import React from 'react'
import { Link } from 'react-router-dom'

function NoCompany() {
  return (
    <div className='w-full min-h-screen flex justify-center  flex-col items-center'>
        <img src="https://cdn.dribbble.com/users/246611/screenshots/10742148/media/d64b1bc4087cbf2c574a1688ecabc8ee.png?compress=1&resize=800x600&vertical=top" className='w-[30vw] h-[30vw] rounded-full' alt="" />
       <Link to={"/createcompany"}>
        <button  className='w-full bg-primary my-10 px-10 border-none text-white rounded-xl py-2.5 '> Register My Company </button>
       </Link>
     </div>
  )
}

export default NoCompany