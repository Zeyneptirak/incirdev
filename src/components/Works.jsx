import React from 'react'
import {  ExportSquare} from 'iconsax-react';
import video from '../assets/video.mp4'
function Works() {
    return (
        <div name="works" className='max-w-[1200px] h-full md:mt-[200px] mt-[136px] md:mx-auto flex flex-col items-center justify-center mb-[256px]'>
            
            <h1 className='text-[36px] leading-[45px] text-transparent pb-9 text-3xl bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center font-[600]'>Geçmiş Çalışmalarımız</h1>
           
            <div className="flex flex-col gap-y-5 gap-x-7 m-5 w-[100%] md:w-[80%]">
                
            <video autoPlay loop muted>
      <source src={video} type='video/mp4'/>
</video>
            
                <div className="transition duration-300 ease-in-out group p-[24px] hover:bg-card-bg hover:border-[1px] hover:border-[#484848] bg-[#292929] text-white z-10 rounded-xl">
                <div className='flex justify-between mb-4'>
                    <h1 className='font-[400] text-2xl'>nirvanadijital.com</h1>
                    <a href='https://nirvanadijital.com/' className='group-hover:text-[#EAED69] text-white' target="_blank">
                        <ExportSquare size="16" variant="Outline" />
                    </a>
                    </div>
                    <p className='text-content-grey text-[14px] mt-2 font-[300]'>Design, Develop & Deploy</p>
                </div>
                <div className="transition duration-300 ease-in-out group p-[24px] hover:bg-card-bg hover:border-[1px] hover:border-[#484848] bg-[#292929] text-white z-10 rounded-xl">
                <div className='flex justify-between mb-4'>
                    <h1 className='font-[400] text-2xl'>dekorzade.net</h1>
                    <a href='https://dekorzade.net/' className='group-hover:text-[#EAED69] text-white' target="_blank">
                        <ExportSquare size="16" variant="Outline" />
                    </a>
                    </div>
                    <p className='text-content-grey text-[14px] mt-2 font-[300]'>Design, Develop & Deploy</p>
                </div>
                <div className="transition duration-300 ease-in-out group hover:border-[1px] hover:border-[#484848] bg-[#292929] p-[24px] hover:bg-card-bg text-white z-10 rounded-xl">
                    <div className='flex justify-between mb-4'>
                    <h1 className='font-[400] text-2xl'>erosnotary.com</h1>
                    <a href='https://erosnotary.com/' target="_blank" className='group-hover:text-[#EAED69] text-white'>
                        <ExportSquare size="16" variant="Outline" />
                    </a>
                    </div>
                    <p className='text-content-grey text-[14px] mt-2 font-[300]'>Design, Develop & Deploy </p>
                </div>
                
            </div>

        </div>
    )
}

export default Works