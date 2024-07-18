import React from 'react'
import  Animation from '../assets/animation.gif'
function Succuss() {
  return (
    <div className='z-20 bg-black/90 w-full h-screen fixed top-0 left-0 flex justify-center items-center'>
      <div className=' mx-auto w-48 lg:w-72 bg-white border-2  lg:border-4 border-orange-500 outline outline-2 lg:outline-4 outline-white p-2 lg:p-4 rounded-xl'>
      <img src={Animation} className='' />
      </div>
    </div>
  )
}

export default Succuss