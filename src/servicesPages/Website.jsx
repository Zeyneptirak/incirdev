import React, { useState } from "react";
import video from "../assets/videoweb.mp4";
import logo from "../assets/logo.svg";
import analiz from "../assets/analiz.svg";
import sektor from "../assets/sektor.svg";
import ihtiyac from "../assets/ihtiyac.svg";
import tasarim from "../assets/tasarim.svg";
import code from "../assets/code.svg";
import test from "../assets/test.svg";
import teslim from "../assets/teslim.svg";

function Website() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);
  return (
    <div className="flex flex-col h-full ">
      <div className="max-w-[1240px] mx-auto text-center ">
        <p className="text-[20px] md:text-[29px] text-transparent leading-[30px] bg-clip-text bg-gradient-to-r from-white to-gray-500 font-bold tracking-[1px]">
          WEB YAZILIM- WEB TABANLI YAZILIM
        </p>
        <p className="flex text-[13px] md:text-[16px] text-transparent leading-[30px] bg-clip-text bg-gradient-to-r from-white to-gray-300 font-extralight tracking-[1px] md:my-5 ">
          {" "}
          Kurumsal ve bireysel ihtiyaçlara yönelik web yazılım projeleri
          geliştiriyoruz. Hayalinizdeki projeleri dijital dünyaya taşıyacak
          yazılım ve kodlama çalışmalarını hayata geçiriyoruz.{" "}
        </p>
      </div>
  

      <p className="flex text-[20px] md:text-[30px] text-transparent  bg-clip-text bg-gradient-to-r from-white to-gray-500 font-bold tracking-[1px] mt-[30px] md:mt-[70px] mx-auto  ">
        Proje Sürecimiz
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 md:gap-x-[90px] gap-y-8 md:gap-y-[80px] max-w-[340px] md:max-w-[1240px] font-extralight justify-between my-10 leading-[30px] text-primary  tracking-[1px] text-[12px] text-center  md:text-[14px] mx-auto md:mt-[70px]">
        <div className="text-center border bg-card-bg hover:bg-white text-white hover:text-card-bg border-purple rounded-[24px] h-[200px] md:h-[300px] ">
          <div className="mx-2">
            <img
              className="w-[70px] h-[70px] flex mx-auto drop-shadow-xl mt-3"
              src={analiz}
              alt=""
            />
            <div className="flex flex-col mt-2">
            <p className="font-medium text-[14px] md:text-[20px] md:mt-[20px]">
              {" "}
              1. Firma Analizi{" "}
            </p>
            <p className="md:mt-[18px]">
              {" "}
              Sizlerle yaptığımız görüşmede ihtiyacınız olan projeyi
              şekillendiriyoruz.{" "}
            </p>
            </div>
          </div>
        </div>
        <div className="border bg-card-bg hover:bg-white text-white hover:text-card-bg border-purple rounded-[24px] h-[200px] md:h-[300px]">
          <div className="mx-2">
            <img
              className="w-[70px] h-[70px] flex mx-auto drop-shadow-xl mt-3"
              src={sektor}
              alt=""
            />
           <div className="flex flex-col mt-2">
           <p className="font-medium text-[14px] md:text-[20px] md:mt-[20px]">
              {" "}
              2. Sektör Araştırması{" "}
            </p>
            <p className="md:mt-[18px]">
              {" "}
              Çalışma sisteminize uygun bir web site için sektörünüz hakkında
              araştırma yapıyoruz.{" "}
            </p>
           </div>
          </div>
        </div>
        <div className="border bg-card-bg hover:bg-white text-white hover:text-card-bg border-purple rounded-[24px] h-[250px] md:h-[300px]">
          <div className="mx-2">
            <img
              className="w-[70px] h-[70px] flex mx-auto drop-shadow-xl mt-3"
              src={ihtiyac}
              alt=""
            />
           <div className=" flex mt-2 flex-col">
           <p className="font-medium text-[14px] md:text-[20px] md:mt-[20px]">
              {" "}
              3. İhtiyaç Belirlenmesi{" "}
            </p>
            <p className="md:mt-[18px]">
              {" "}
              Yapılan analizler sonucunda sizlere ihtiyaçları ve proje süresini
              bildiriyoruz. Fotoğraf, logo, içerik vb. hakkında plan yapıyoruz.{" "}
            </p>
           </div>
          </div>
        </div>
        <div className="border bg-card-bg hover:bg-white text-white hover:text-card-bg border-purple rounded-[24px] h-[220px] md:h-[300px] mt-3">
          <div className="mx-2">
            <img
              className="w-[70px] h-[70px] flex mx-auto drop-shadow-xl "
              src={tasarim}
              alt=""
            />
            <div className="flex flex-col mt-2">
            <p className="font-medium text-[14px] md:text-[20px] md:mt-[20px] ">
              {" "}
              4. Tasarım{" "}
            </p>
            <p className="md:mt-[18px]">
              {" "}
              Kişiselleştirilmiş, tamamen şahsınıza veya firmanıza özel web
              tasarımını sizlere sunuyoruz.{" "}
            </p>
            </div>
          </div>
        </div>
        <div className="border bg-card-bg hover:bg-white text-white hover:text-card-bg border-purple rounded-[24px] h-[260px] md:h-[300px]">
          <div className="mx-2">
            <img className="w-[70px] h-[70px] flex mx-auto drop-shadow-xl mt-3" src={code} alt="" />
            <div className="flex flex-col mt-2">
            <p className="font-medium text-[14px] md:text-[20px] md:mt-[20px]">
              {" "}
              5. Kodlama{" "}
            </p>
            <p className="md:mt-[18px] mt-3">
              {" "}
              Gereksiz kod yapısından arındırılan,
              Google Uyumlu, 
              Hızlı,
              Dinamik, <br />
              Tüm cihazlara uyumlu web site kodlaması tamamlıyoruz.{" "}
            </p>
            </div>
          </div>
        </div>
        <div className="border bg-card-bg hover:bg-white text-white hover:text-card-bg border-purple rounded-[24px] h-[200px] md:h-[300px]">
          <div className="mx-2">
            <img className="w-[70px] h-[70px] flex mx-auto drop-shadow-xl mt-3" src={test} alt="" />
            <div className="flex flex-col mt-2">
            <p className="font-medium text-[14px] md:text-[20px] md:mt-[20px]">
              {" "}
              6. Test{" "}
            </p>
            <p className="md:mt-[18px]">
              {" "}
              Size özel web sitenizin testini yapıyoruz.{" "}
            </p>
            </div>
          </div>
        </div>
        <div className="md:hidden border bg-card-bg hover:bg-white text-white hover:text-card-bg border-purple rounded-[24px] h-[250px]">
          <div className="mx-2">
          <img
            className="w-[110px] h-[110px] flex mx-auto drop-shadow-xl"
            src={teslim}
            alt=""
          />
           <div className="flex flex-col mt-2">
          <p className="font-medium text-[14px] text-center">
            {" "}
            7. Teslim{" "}
          </p>
          <p className="md:mt-[18px] text-center">
            {" "}
            Belirlenen süre sonucunda, tamamlanan dinamik web sitenizi
            yayınlıyoruz.{" "}
          </p>
          </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex font-extralight flex-col max-w-[1240px] mx-auto my-[60px] border bg-card-bg hover:bg-white text-white hover:text-card-bg border-purple rounded-[24px] h-[300px]">
        <div className="mx-3 ">
          <img
            className="w-[110px] h-[110px] flex mx-auto drop-shadow-xl"
            src={teslim}
            alt=""
          />
          <p className="font-medium md:text-[23px] md:mt-[20px] text-center">
            {" "}
            7. Teslim{" "}
          </p>
          <p className="md:mt-[18px] text-center">
            {" "}
            Belirlenen süre sonucunda, tamamlanan dinamik web sitenizi
            yayınlıyoruz.{" "}
          </p>
        </div>
      </div>
     
      <div className="mt-[100px] md:mt-[200px]"></div>
    </div>
  );
}

export default Website;
