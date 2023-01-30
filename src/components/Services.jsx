import React from "react";
import { PenTool2, ExportSquare, Monitor, Code1, Mobile } from "iconsax-react";

function Services() {
  return (
    <div
      name="services"
      className="max-w-[1200px] h-full pb-[136px] md:mx-auto md:pb-0 md:mt-16 flex flex-col items-center justify-center"
    >
      <h1 className="text-[32px] md:text-[36px] leading-[45px] text-transparent pb-9 text-3xl bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center font-[600]">
        Hizmetlerimiz
      </h1>
      <div className="grid md:grid-cols-3 gap-y-5 gap-x-7">
        <div className="transition duration-300 ease-in-out group p-[24px] border-[1px] bg-card-bg border-card-bg hover:border-[1px] hover:border-[#484848] hover:bg-[#292929] text-white z-10 rounded-xl">
          <div className="flex justify-between mb-4">
            <PenTool2 size="32" color="#FFFFFF" variant="Bulk" />
            <div className="group-hover:text-[#EAED69] text-white">
              <ExportSquare size="16" variant="Outline" />
            </div>
          </div>
          <h1>UI/UX Tasarım</h1>
          <p className="text-content-grey text-[14px] mt-2 font-[300]">
            Tüm dijital ürünleriniz için özel deneyim tasarımı.
          </p>
        </div>
        <div className="transition duration-300 ease-in-out group hover:border-[1px] border-[1px] border-card-bg hover:border-[#484848] hover:bg-[#292929] p-[24px] bg-card-bg text-white z-10 rounded-xl">
         
            <div className="flex justify-between mb-4">
              <Monitor size="32" color="#FFFFFF" variant="Bulk" />
              <div className="group-hover:text-[#EAED69] text-white">
                <ExportSquare size="16" variant="Outline" />
              </div>
            </div>
       
          <h1>Dinamik Websiteler</h1>
          <p className="text-content-grey text-[14px] mt-2 font-[300]">
            Modern ve hızlı teknolojilerle geliştirilmiş dinamik website.
          </p>
        </div>
        <div className="transition duration-300 ease-in-out group hover:border-[1px] border-[1px] border-card-bg hover:border-[#484848] hover:bg-[#292929] p-[24px] bg-card-bg text-white z-10 rounded-xl">
          <div className="flex justify-between mb-4">
            <Code1 size="32" color="#FFFFFF" variant="Bulk" />
            <div className="group-hover:text-[#EAED69] text-white">
              <ExportSquare size="16" variant="Outline" />
            </div>
          </div>
          <h1>Yazılım Desteği</h1>
          <p className="text-content-grey text-[14px] mt-2 font-[300]">
            Güncel projeniz için teknoloji ve yazılım desteği.
          </p>
        </div>
        <div className="transition duration-300 ease-in-out group hover:border-[1px] border-[1px] border-card-bg hover:border-[#484848] hover:bg-[#292929] p-[24px] bg-card-bg text-white z-10 rounded-xl">
            <div className="flex justify-between mb-4">
              <Mobile size="32" color="#FFFFFF" variant="Bulk" />
              <div className="group-hover:text-[#EAED69] text-white">
                <ExportSquare size="16" variant="Outline" />
              </div>
            </div>{" "}
          <h1>Mobil Uygulamalar</h1>
          <p className="text-content-grey text-[14px] mt-2 font-[300]">
            iOS ve Android platformları için mobil uygulama yazılımı.
          </p>
        </div>
        <div className="transition duration-300 ease-in-out group hover:border-[1px] border-[1px] border-card-bg hover:border-[#484848] hover:bg-[#292929] p-[24px] bg-card-bg text-white z-10 rounded-xl">
            <div className="flex justify-between mb-4">
              <Code1 size="32" color="#FFFFFF" variant="Bulk" />
              <div className="group-hover:text-[#EAED69] text-white">
                <ExportSquare size="16" variant="Outline" />
              </div>
            </div>
          <h1>E-Ticaret Sistemleri</h1>
          <p className="text-content-grey text-[14px] mt-2 font-[300]">
            Modern altyapılarla hızlı e-ticaret sistemleri.
          </p>
        </div>
        <div className="transition duration-300 ease-in-out group hover:border-[1px] border-[1px] border-card-bg hover:border-[#484848] hover:bg-[#292929] p-[24px] bg-card-bg text-white z-10 rounded-xl">
          <div className="flex justify-between mb-4">
            <Code1 size="32" color="#FFFFFF" variant="Bulk" />
            <div className="group-hover:text-[#EAED69] text-white">
              <ExportSquare size="16" variant="Outline" />
            </div>
          </div>
          <h1>Yazılım Eğitimleri</h1>
          <p className="text-content-grey text-[14px] mt-2 font-[300]">
            Çok yakında..
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
