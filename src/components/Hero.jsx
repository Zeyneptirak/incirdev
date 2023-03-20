import React from 'react'
import vector from "../assets/Vector.svg"
import Navbar from './Navbar'
import Daire from '../assets/daire.svg'
import mockup from '../assets/mockup.svg'
import { MdCall } from 'react-icons/md';
export default function Hero() {
  return (
    <div className='flex h-full items-center justify-center flex-col '>
      <Navbar></Navbar>
        <div className='flex flex-col py-[137px] md:flex-row max-w-[1480px] w-full px-[16px] md:px-[156px] items-center'>
          <div className='flex flex-col justify-center md:items-start w-full text-center md:text-left'>
            <img className='flex absolute -z-1 md:px-[500px] mt-[600px] md:mt-0' src={Daire} alt=''/>
            <p className="md:text-6xl text-4xl  py-3  my-6 font-Sora font-semibold text-white z-1 md:z-10">
              {" "}
              Sizin fikrinizi <p><span className="bg-clip-text text-transparent bg-gradient-to-r from-content-yellow to-purple">
               dijitale
              </span>{" "}
              taşıyoruz!
               </p>
            </p>
            <p className="text-[15px] md:text-[20px] text-content-grey  font-Sora font-light text-gray">
              Mersin merkezli çözüm tabanlı yazılım geliştirme stüdyosuyuz. Fikrinizi <p>dijital olarak yansıtmayı teklif ediyoruz. Hadi bize projelerinizden bahsedin.</p>
            </p>
             <div className='flex flex-col md:flex-row md:w-[405px]'>
                <a href="callto:+905522451036" target="_blank" className='md:mx-[5px] relative py-2 w-[200px] md:w-full text-white border  border-indigo-600
    hover:bg-transparent bg-[#3E00FF] hover:bg-[#1F0080] rounded-lg my-5 flex px-4 justify-between items-center mx-auto'>
                   <p>0552 245 10 36</p>
             
                   <MdCall />
                </a>
                <a href="mailto:incir.dev@gmail.com" target="_blank" className='md:mx-[5px] relative py-2 w-[200px] md:w-full text-white border  border-indigo-600
    hover:bg-transparent bg-[#3E00FF] hover:bg-[#1F0080] rounded-lg my-5 flex px-4 justify-between items-center mx-auto'>
                  <p>Bizimle Çalışın</p>
                    <img className='pl-3 ' src={vector}></img>
                   
                </a>
               
             </div>
          </div>
          <div >
            <img className='h-[300px] md:h-full relative z-10' src={mockup} alt="" />
          </div>
        </div>  
      
    </div>
  )
}
