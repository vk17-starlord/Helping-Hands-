import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarLayout } from './NavbarLayout'

function UserNav() {
  return (
    <NavbarLayout>
        <div className="flex ">
<Link to={'/dashboard'}>         
<h1 className='mx-2 cursor-pointer hover:font-medium text-gray-500 hover:text-primary  hover:underline '>Jobs </h1>
</Link>
<Link to={'/myapplication'}>
<h1 className='mx-2 cursor-pointer hover:font-medium text-gray-500 hover:text-primary  hover:underline '>My Applications </h1>
</Link>
        </div>
        
    </NavbarLayout>
  )
}

export default UserNav