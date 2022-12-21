import React from 'react'

function ApplicationTable({heading , data}) {
  return (
    <div className='w-10/12 my-10 mx-auto'>

        <div className={`w-full grid grid-cols-${heading.length} p-5 bg-gray-50`}>
            {
                heading.map((ele)=>{
                 return   <h1 className='font-Poppins text-left text-lg font-medium'>{ele}</h1>
                })
            }
        </div>

    </div>
  )
}

export default ApplicationTable