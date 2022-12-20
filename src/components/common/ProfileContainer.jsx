import React from 'react'

function ProfileContainer({children}) {
  return (
    <div className='w-10/12 mt-[-10vh] mx-auto grid grid-cols-[4fr_8fr] min-h-max'>
        {children}
    </div>
  )
}

export default ProfileContainer