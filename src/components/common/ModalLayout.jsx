import React from 'react'

function ModalLayout({children}) {
  return (
    <div className='w-full left-0 top-0 bg-black/40  flex justify-center items-center min-h-screen fixed'>        
     <div className="modal bg-white w-[40vw] rounded-md min-h-[50vh]">
      {children}
     </div>
    </div>
  )
}

export default ModalLayout