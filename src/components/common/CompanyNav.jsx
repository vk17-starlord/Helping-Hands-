import React from 'react'
import { NavbarLayout } from './NavbarLayout'

function CompanyNav() {
  return (
    <NavbarLayout>
        <div className="flex ">
            <h1 className='mx-2 cursor-pointer hover:font-medium text-gray-500 hover:text-primary  hover:underline '>Link1 </h1>
            <h1 className='mx-2 cursor-pointer hover:font-medium text-gray-500 hover:text-primary  hover:underline '>Link2 </h1>
            <h1 className='mx-2 cursor-pointer hover:font-medium text-gray-500 hover:text-primary  hover:underline '>Link3 </h1>
        </div>
        
    </NavbarLayout>
  )
}

export default CompanyNav