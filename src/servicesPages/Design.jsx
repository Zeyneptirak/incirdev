import React from 'react'
import bgImg from "../assets/bgImg.svg"
function Design() {
  return (
    <div className='w-full h-screen  flex flex-col mx-auto items-center '> 
      <img className='w-full object-cover absolute z-1' src={bgImg} alt=" "></img>
      <div className='flex flex-col max-w-[1280px] mx-auto  absolute z-1 items-center my-20 mt-[80px]'>
      <p className='text-white'>UI/UX DESİGN</p>

      </div>
    </div>
  )
}

export default Design