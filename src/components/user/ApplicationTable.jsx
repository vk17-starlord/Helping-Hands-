import React from 'react'

function ApplicationTable({heading , data}) {
  console.log(data)
  return (
    <div className='w-10/12 my-10 mx-auto'>

        <div className={`w-full grid grid-cols-${heading.length} p-5 bg-gray-50`}>
            {
                heading.map((ele)=>{
                 return   <h1 className='font-Poppins text-left text-sm font-medium'>{ele}</h1>
                })
            }
        </div>
        <div className={`w-full grid grid-cols-${heading.length} p-5 bg-gray-50 my-5`}>
          <div className="col flex justify-start items-center w-full px-5">
          <div className="flex justify-start items-center">
          </div>
          </div>
        </div>

    </div>
  )
}

export default ApplicationTable