import React from 'react'

function ImageHover({photo,handler,keyword='no-photo'}) {
  return (
    <div className="group flex justify-center items-center ">
    <input
     accept="image/png, image/gif, image/jpeg"
    className='absolute opacity-0 w-24 h-24 z-50 flex justify-center items-center'   onChange={(ev)=>{
      handler(ev.target.files[0])
   }} type="file" id="actual-btn" hidden />   
    <img
      className="object-top w-24 h-24 rounded-full object-cover"
      src={
        photo === keyword
          ? "https://cdn.dribbble.com/userupload/4029627/file/original-1b483a3d2c180e428aa5fddbfc192e77.png?compress=1&resize=1504x1128"
          : photo
      }
      alt=""
    />
    <div  className="circle hidden group-hover:flex justify-center items-center text-2xl bg-black/50 absolute w-24 h-24 rounded-full">
      <i class="bx bxs-camera text-white"></i>
    </div>
  </div>
  )
}

export default ImageHover