import React from 'react'

function ProfileContainer({children}) {
  return (
    <div className='w-10/12 mt-[-10vh] pb-20 mx-auto gap-4 grid grid-cols-[3fr_9fr] min-h-max'>
        {children}
    </div>
  )
}

export default ProfileContainer