import React from 'react';
import {Link } from 'react-scroll';
import {  ArrowUp} from 'iconsax-react';
const Arrow = () => {

  return (
    <div className='hidden md:block w-screen h-[80px] z-10 font-sora absolute right-5'> 
        <div className='text-white border cursor-pointer border-indigo-600 bg-[#3E00FF] hover:bg-[#1F0080] rounded-md fixed bottom-0 right-0 mr-5 mb-5 p-[8px]'>
            <Link to="navbar" smooth={true} offset={-200} duration={500}>
                <ArrowUp size="20"color="#EAED69"/>
            </Link>
        </div>
    </div>
  )
}

export default Arrow