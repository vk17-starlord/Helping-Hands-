import React from 'react'

function UploadFile({label,accept,onChange}) {

  return (
       <div className='w-full overflow-hidden  flex flex-col justify-center items-center'>
       


<input  accept={accept}  onChange={(ev)=>{
   onChange(ev)  
}} type="file" id="actual-btn" className='opacity-0 w-full z-50' />
<label className='label text-center mt-[-20px] bg-redlight text-reddark w-full '  htmlFor="actual-btn"> {label} </label>

       </div>
              
    
  )
}

export default UploadFile