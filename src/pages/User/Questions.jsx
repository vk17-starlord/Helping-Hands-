import React from 'react'
import QuestionCard from './QuestionCard'

function Questions() {
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-gray-50'>

      <div className="modal  rounded-lg pb-5 bg-white shadow-xl px-5 ">
        <QuestionCard/>
        <div className="flex justify-between items-center">
        <button className='inline-flex justify-center items-center text-sm px-5 py-2.5 mb-2.5 hover:bg-blue-200 hover:text-blue-600 bg-blue-600 rounded-md text-white mt-5'> <i class='bx rotate-180 bx-skip-next'></i> Prev </button>

          <button className='inline-flex justify-center items-center text-sm px-5 py-2.5 mb-2.5 hover:bg-blue-200 hover:text-blue-600 bg-blue-600 rounded-md text-white mt-5'> Next <i class='bx bx-skip-next'></i></button>
        </div>
      </div>      
        
    </div>
  )
}

export default Questions