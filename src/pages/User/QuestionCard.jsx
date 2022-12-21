import React from 'react'

function QuestionCard({question,sendAnswer,next}) {
  return (
    <div className='w-full'>
        <h1 className='text-gray-300  text-xl my-5 font-medium text-left'># Question 1</h1>
        <h1 className='text-blue-500 text-left my-3 font-semibold font-Poppins'>What Type Of Person  Are You ?</h1>
        <div className="flex mt-2.5 justify-between">
            <button className='w-12 h-12 mr-2 rounded-full bg-bluelight/20 group hover:bg-blue-500'>
                <h1 className='text-blue-500 group-hover:text-white'>1</h1>
            </button>
            <button className='w-12 h-12 mr-2 rounded-full bg-bluelight/20 group hover:bg-blue-500'>
                <h1 className='text-blue-500 group-hover:text-white'>2</h1>
            </button>
            <button className='w-12 h-12 mr-2 rounded-full bg-bluelight/20 group hover:bg-blue-500'>
                <h1 className='text-blue-500 group-hover:text-white'>3</h1>
            </button>
            <button className='w-12 h-12 mr-2 rounded-full bg-bluelight/20 group hover:bg-blue-500'>
                <h1 className='text-blue-500 group-hover:text-white'>4</h1>
            </button>
            <button className='w-12 h-12 mr-2 rounded-full bg-bluelight/20 group hover:bg-blue-500'>
                <h1 className='text-blue-500 group-hover:text-white'>5</h1>
            </button>
        </div>

    </div>
  )
}

export default QuestionCard