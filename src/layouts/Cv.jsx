import React from 'react'

import one from '../assets/1.png'
import two from '../assets/2.png'
function Cv() {
  return (
    <div className='flex flex-col items-center h-fit  justify-center'>
        <h1 className='text-4xl mt-4 p-4 font-semibold'>My CV</h1>
        <img src={one} alt="" className='w-screen h-fit object-fill md:w-[60%] lg:w-[40%]'/>
        <img src={two} alt="" className='w-screen h-fit object-fill md:w-[60%] lg:w-[40%]'/>
    </div>
  )
}

export default Cv