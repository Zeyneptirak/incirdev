import React from 'react'
import ecommerce from "../assets/ecommerce.svg";
import Navbar from '../components/Navbar';
import { PenTool2, ExportSquare, Monitor, Code1, Mobile } from "iconsax-react";

function BlogListe() {
  return (
    <div className="flex flex-col text-white w-full mx-auto h-screen">
        <Navbar/>
       <div className='max-w-[1200px] mx-auto'>
       <div className="h-[60px] md:h-[150px]"></div>
       <div className="flex mx-auto my-auto  max-w-[1200px] h-[150px] md:h-[241px] justify-center">
          <img className="" src={ecommerce} alt="" />
          <div className="flex-col absolute z-10 text-center mt-[50px]">
            <p className="text-[26px] md:text-[30px] text-white font-bold tracking-[1px] mt-[4px] md:mt-0">
             incir blog
            </p>
            <p className="hidden md:flex text-white font-[400] text-[18px] text-transparent leading-[30px] bg-clip-text bg-gradient-to-r from-white to-gray-500 tracking-[1px] mt-[20px]">
            E-ticaret sektörü hakkında genel bilgiler, istatistikler ve detaylı inceleme makalelerini e-ticaret blogumuzda bulabilirsiniz.
            </p>
          </div>
        </div>
      
       <div className="hidden md:flex flex-row  md:mt-6">
         <a href='/'>  <p className=''>incir.dev&emsp;&emsp;</p></a>
           <p className=''> >&emsp;&emsp;</p>
         <a href='/blog'> <p className=''>incir blog</p></a> 
        </div>
    
      <div className="grid md:grid-cols-3 gap-y-5 gap-x-7 mt-[] md:mt-[40px] max-w-[1200px] mx-auto">
        <a href="/blogeticaret">
          <div className="transition duration-300 ease-in-out group p-[24px] border-[1px] bg-card-bg  hover:border-[1px] hover:border-[#484848] hover:bg-[#292929] text-white z-10 rounded-xl border-purple">
            <div className="flex justify-between mb-4">
              <PenTool2 size="32" color="#FFFFFF" variant="Bulk" />
              <div className="group-hover:text-purple text-white">
                <ExportSquare size="16" variant="Outline" />
              </div>
            </div>
            <h1>1. E-Ticaret Nedir?</h1>
            <p className="text-content-grey text-[14px] mt-2 font-[300]">
              E-ticaret türleri ve e-ticaretin bize sağladığı avantajlar
              hakkında...
            </p>
          </div>
        </a>
        <a href="/blogeticaret">
          <div className="transition duration-300 ease-in-out group hover:border-[1px] border-[1px] border-purple hover:border-[#484848] hover:bg-[#292929] p-[24px] bg-card-bg text-white z-10 rounded-xl">
            <div className="flex justify-between mb-4">
              <Monitor size="32" color="#FFFFFF" variant="Bulk" />
              <div className="group-hover:text-purple text-white">
                <ExportSquare size="16" variant="Outline" />
              </div>
            </div>

            <h1>2. E-Ticaret sitemizin satışlarını nasıl artırabiliriz?</h1>
            <p className="text-content-grey text-[14px] mt-2 font-[300]">
              Modern ve hızlı teknolojilerle geliştirilmiş dinamik website.
            </p>
          </div>
        </a>
        <a href="/blogeticaret">
          <div className="transition duration-300 ease-in-out group hover:border-[1px] border-[1px] border-purple hover:border-[#484848] hover:bg-[#292929] p-[24px] bg-card-bg text-white z-10 rounded-xl">
            <div className="flex justify-between mb-4">
              <Code1 size="32" color="#FFFFFF" variant="Bulk" />
              <div className="group-hover:text-purple text-white">
                <ExportSquare size="16" variant="Outline" />
              </div>
            </div>
            <h1>3. E-Ticaret`te rakiplerinizin önüne nasıl geçersiniz?</h1>
            <p className="text-content-grey text-[14px] mt-2 font-[300]">
              Güncel projeniz için teknoloji ve yazılım desteği.
            </p>
          </div>
        </a>
      </div>
       </div>

    
    </div>
  )
}

export default BlogListe