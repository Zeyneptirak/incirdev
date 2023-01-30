import React, { useState } from "react";
import starter from "../assets/starter.svg";
import growth from "../assets/growth.svg";
import premium from "../assets/premium.svg";
import tercih from "../assets/tercih.svg";
import tik from "../assets/tik.svg";
import simsek from "../assets/simsek.svg";
import carpi from "../assets/carpi.svg";
import ecommerce from "../assets/ecommerce.svg";
import { Link } from "react-scroll";
import Navbar from '../components/Navbar'
const Ecommerce = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <section className="flex mx-auto max-w-[1200px] h-full md:mt-[200px] items-center justify-center">
      <Navbar></Navbar>
      <div className="flex flex-col">
        <h1 className="flex mx-auto text-[32px] md:text-[36px] leading-[45px] text-transparent pb-9 text-3xl bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center font-[600]">
          E-Ticaret Paketlerimiz
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-2 md:w-[1200px] h-full md:mt-10 gap-y-4 md:gap-y-0">
          <div className="bg-graybg rounded-lg flex flex-col">
            <img
              className="flex mx-auto mt-[17px] w-[86px] md:w-0"
              src={starter}
              alt=""
            />
            <p className="text-white text-[18px] md:text-[20px] tracking-[5px] text-center mt-[24px]">
              STARTER
            </p>
            <p className="text-etext text-[13px] md:text-[16px] tracking-[3px] font-[300] mt-[12px] text-center">
              E-ticarete yeni başlayan küçük işletmeler için uygundur
            </p>
            <p className="text-white text-[30px] md:text-[48px] font-[600] text-center mt-[24px]">
             

            </p>
            <p className="text-etext text-[14px] md:text-[16px] tracking-[1px] font-[300] mt-[12px] text-center">
              Tamamen site teslimi !
            </p>
            <p className="cursor-pointer hover:text-white hover:font-[600] text-content-grey">
              <Link to="contact" smooth={true} offset={-100} duration={500}>
                <div className="w-[230px] md:w-[306px] h-[35px] md:h-[47px] mt-[24px] bg-primary rounded-lg flex mx-auto">
                  <p className="text-white text-center flex mx-auto my-auto text-[16px] md:text-[19px] font-[400]">
                    Starter Edin
                  </p>
                </div>
              </Link>
            </p>

            <div className="text-white flex flex-col ml-[44px] my-[24px] text-[13px] md:text-[15px] font-[300] tracking-[1px] gap-y-[16px]">
              <div className="flex flex-row gap-x-2">
                <img className="" src={tik} alt="" />{" "}
                <p>Özel Tasarım (Mobil Uyumlu)</p>
              </div>
              <div className="flex flex-row gap-x-2">
                <img className="" src={tik} alt="" /> <p>Üyelik</p>
              </div>
              <div className="flex flex-row gap-x-2">
                <img className="" src={carpi} alt="" />{" "}
                <p>Üye Listesi Görüntüleme</p>
              </div>
              <div className="flex flex-row gap-x-2">
                <img className="" src={simsek} alt="" />{" "}
                <p>İşletme Mail Heabı(1)</p>
              </div>
              <div className="flex flex-row gap-x-2">
                <img className="" src={tik} alt="" />{" "}
                <p>Özelleştirilebilir Üyelik Sayfsı</p>
              </div>
              <div className="flex flex-row gap-x-2">
                <img className="" src={tik} alt="" /> <p>Stok ve Fiyat</p>
              </div>
              <div className="flex flex-row gap-x-2">
                <img className="" src={carpi} alt="" /> <p>Ödeme</p>
              </div>
              <div className="flex flex-row gap-x-2">
                <img className="" src={carpi} alt="" />{" "}
                <p>Toplu Resim Yükleme</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={carpi} alt="" />{" "}
                <p>Toplu Mail Gönderme</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={carpi} alt="" /> <p>Kampanya Modülü</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={carpi} alt="" />{" "}
                <p>Hediye Kartı Modülü</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={tik} alt="" />{" "}
                <p>Ürün Liste Resim Slider</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={carpi} alt="" /> <p>Video Ekleme</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={carpi} alt="" />{" "}
                <p>Ürün Detay Blog Ekleme</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={carpi} alt="" /> <p>Sipariş Takibi</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={carpi} alt="" /> <p>Sipariş Bildirimi</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={carpi} alt="" />{" "}
                <p>Üyeliksiz Alışveriş</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={carpi} alt="" />{" "}
                <p>Favroi Ürünler Listesi</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={carpi} alt="" /> <p>Chat Bot</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={carpi} alt="" /> <p>Soru Sor Modülü</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={carpi} alt="" />{" "}
                <p>Detaylı Filtreleme</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={carpi} alt="" />{" "}
                <p>Süreli Popup Modülü</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={carpi} alt="" />{" "}
                <p>Puanlama ve Yorumlama</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={tik} alt="" />{" "}
                <p>Sosyal Medyaya Yönlendirme</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={carpi} alt="" />{" "}
                <p>Aylık Site Seansı Raporu</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={carpi} alt="" />{" "}
                <p>Aylık Sipariş Geliri Raporu</p>
              </div>
            </div>
            <a href="/eticaret">
              <div className="my-6 flex md:hidden text-[14px] justify-center">
                <p className="bg-primary text-white text-wihte rounded-lg w-[130px] h-[30px] flex justify-center items-center">
                  Detaylı Gör
                </p>
              </div>{" "}
            </a>
          </div>
          <div className="bg-primary rounded-lg">
            <img
              className="flex mx-auto mt-[17px] w-[86px] md:w-0"
              src={growth}
              alt=""
            />
            <p className="text-white text-[18px] md:text-[20px] tracking-[5px] text-center mt-[24px]">
              GROWTH
            </p>
            <p className="text-etext text-[13px] md:text-[16px] tracking-[3px] font-[300] mt-[12px] text-center">
              İşletmenizi ileri seviyeye taşımak için size özel özellikler
            </p>
            <p className="text-white text-[30px] md:text-[48px] font-[600] text-center mt-[24px]">
              

            </p>
            <p className="text-etext text-[14px] md:text-[16px] tracking-[1px] font-[300] mt-[12px] text-center">
              Tamamen site teslimi !
            </p>
            <p className="cursor-pointer hover:text-white hover:font-[600] text-content-grey">
              <Link to="contact" smooth={true} offset={-100} duration={500}>
                <div className="w-[230px] md:w-[306px] h-[35px] md:h-[47px] mt-[24px] bg-white rounded-lg flex mx-auto">
                  <p className="text-primary text-center flex mx-auto my-auto text-[16px] md:text-[19px] font-[400]">
                    Growth Edin
                  </p>
                </div>
              </Link>
            </p>
            <div className="text-white flex flex-col ml-[44px] my-[24px] md:text-[15px] font-[300] tracking-[1px] gap-y-[16px]">
              <div className="flex flex-row gap-x-2">
                <img className="" src={tik} alt="" />{" "}
                <p>Özel Tasarım (Mobil Uyumlu)</p>
              </div>
              <div className="flex flex-row gap-x-2">
                <img className="" src={tik} alt="" /> <p>Üyelik</p>
              </div>
              <div className="flex flex-row gap-x-2">
                <img className="" src={tik} alt="" />{" "}
                <p>Üye Listesi Görüntüleme</p>
              </div>
              <div className="flex flex-row gap-x-2">
                <img className="" src={simsek} alt="" />{" "}
                <p>İşletme Mail Heabı(5)</p>
              </div>
              <div className="flex flex-row gap-x-2">
                <img className="" src={tik} alt="" />{" "}
                <p>Özelleştirilebilir Üyelik Sayfsı</p>
              </div>
              <div className="flex flex-row gap-x-2">
                <img className="" src={tik} alt="" /> <p>Stok ve Fiyat</p>
              </div>
              <div className="flex flex-row gap-x-2">
                <img className="" src={tik} alt="" /> <p>Ödeme</p>
              </div>
              <div className="flex flex-row gap-x-2">
                <img className="" src={carpi} alt="" />{" "}
                <p>Toplu Resim Yükleme</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={carpi} alt="" />{" "}
                <p>Toplu Mail Gönderme</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={tik} alt="" /> <p>Kampanya Modülü</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={carpi} alt="" />{" "}
                <p>Hediye Kartı Modülü</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={tik} alt="" />{" "}
                <p>Ürün Liste Resim Slider</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={carpi} alt="" /> <p>Video Ekleme</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={tik} alt="" />{" "}
                <p>Ürün Detay Blog Ekleme</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={tik} alt="" /> <p>Sipariş Takibi</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={carpi} alt="" /> <p>Sipariş Bildirimi</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={tik} alt="" /> <p>Üyeliksiz Alışveriş</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={tik} alt="" />{" "}
                <p>Favroi Ürünler Listesi</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={carpi} alt="" /> <p>Chat Bot</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={tik} alt="" /> <p>Soru Sor Modülü</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={carpi} alt="" />{" "}
                <p>Detaylı Filtreleme</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={carpi} alt="" />{" "}
                <p>Süreli Popup Modülü</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={carpi} alt="" />{" "}
                <p>Puanlama ve Yorumlama</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={tik} alt="" />{" "}
                <p>Sosyal Medyaya Yönlendirme</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={carpi} alt="" />{" "}
                <p>Aylık Site Seansı Raporu</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={tik} alt="" />{" "}
                <p>Aylık Sipariş Geliri Raporu</p>
              </div>
            </div>
            <a href="/eticaret">
                <div className="my-6 flex md:hidden text-[14px] justify-center">
                  <p className="bg-white text-primary rounded-lg w-[130px] h-[30px] flex justify-center items-center">
                    Detaylı Gör
                  </p>
                </div>
              </a>
          </div>
          <div className="bg-graybg rounded-lg">
            <img
              className="flex mx-auto mt-[17px] w-[86px] md:w-0"
              src={premium}
              alt=""
            />
            <p className="text-white text-[18px] md:text-[20px] tracking-[5px] text-center mt-[24px]">
              PREMIUM
            </p>
            <p className="text-etext text-[13px] md:text-[16px] tracking-[3px] font-[300] mt-[12px] text-center">
              E-ticaret dünyasında işletmenizi daha güçlü bir yerde
              konumlandırın
            </p>
            <p className="text-white text-[30px] md:text-[48px] font-[600] text-center mt-[24px]">
              
              
            </p>
            <p className="text-etext text-[14px] md:text-[16px] tracking-[1px] font-[300] mt-[12px] text-center">
              Tamamen site teslimi !
            </p>
            <p className="cursor-pointer hover:text-white hover:font-[600] text-content-grey">
              <Link to="contact" smooth={true} offset={-100} duration={500}>
                <div className="w-[230px] md:w-[306px] h-[35px] md:h-[47px] mt-[24px] bg-primary rounded-lg flex mx-auto">
                  <p className="text-white text-center flex mx-auto my-auto text-[16px] md:text-[19px] font-[400]">
                    Premium Edin
                  </p>
                </div>
              </Link>
            </p>
            <div className="text-white flex flex-col ml-[44px] my-[24px] md:text-[15px] font-[300] tracking-[1px] gap-y-[16px]">
              <div className="flex flex-row gap-x-2">
                <img className="" src={tik} alt="" />{" "}
                <p>Özel Tasarım (Mobil Uyumlu)</p>
              </div>
              <div className="flex flex-row gap-x-2">
                <img className="" src={tik} alt="" /> <p>Üyelik</p>
              </div>
              <div className="flex flex-row gap-x-2">
                <img className="" src={tik} alt="" />{" "}
                <p>Üye Listesi Görüntüleme</p>
              </div>
              <div className="flex flex-row gap-x-2">
                <img className="" src={simsek} alt="" />{" "}
                <p>İşletme Mail Heabı(10)</p>
              </div>
              <div className="flex flex-row gap-x-2">
                <img className="" src={tik} alt="" />{" "}
                <p>Özelleştirilebilir Üyelik Sayfsı</p>
              </div>
              <div className="flex flex-row gap-x-2">
                <img className="" src={tik} alt="" /> <p>Stok ve Fiyat</p>
              </div>
              <div className="flex flex-row gap-x-2">
                <img className="" src={tik} alt="" /> <p>Ödeme</p>
              </div>
              <div className="flex flex-row gap-x-2">
                <img className="" src={tik} alt="" /> <p>Toplu Resim Yükleme</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={tik} alt="" /> <p>Toplu Mail Gönderme</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={tik} alt="" /> <p>Kampanya Modülü</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={tik} alt="" /> <p>Hediye Kartı Modülü</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={tik} alt="" />{" "}
                <p>Ürün Liste Resim Slider</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={tik} alt="" /> <p>Video Ekleme</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={tik} alt="" />{" "}
                <p>Ürün Detay Blog Ekleme</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={tik} alt="" /> <p>Sipariş Takibi</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={tik} alt="" /> <p>Sipariş Bildirimi</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={tik} alt="" /> <p>Üyeliksiz Alışveriş</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={tik} alt="" />{" "}
                <p>Favroi Ürünler Listesi</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={tik} alt="" /> <p>Chat Bot</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={tik} alt="" /> <p>Soru Sor Modülü</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={tik} alt="" /> <p>Detaylı Filtreleme</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={tik} alt="" /> <p>Süreli Popup Modülü</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={tik} alt="" />{" "}
                <p>Puanlama ve Yorumlama</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={tik} alt="" />{" "}
                <p>Sosyal Medyaya Yönlendirme</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={tik} alt="" />{" "}
                <p>Aylık Site Seansı Raporu</p>
              </div>
              <div className="hidden md:flex flex-row gap-x-2">
                <img className="" src={tik} alt="" />{" "}
                <p>Aylık Sipariş Geliri Raporu</p>
              </div>
            </div>
            <a href="/eticaret">
              <div className="my-6 flex md:hidden text-[14px] justify-center">
                <p className="bg-primary text-white rounded-lg w-[130px] h-[30px] flex justify-center items-center">
                  Detaylı Gör
                </p>
              </div>{" "}
            </a>
          </div>
        </div>
        <div className="hiden md:flex mx-auto my-auto mt-[24px] max-w-[1200px] h-[241px]">
          <img className="hidden md:flex" src={ecommerce} alt="" />
          <div className="hidden md:flex flex-col absolute z-10 ml-[80px] mt-[50px]">
            <p className="text-white font-[400] text-[30px] tracking-[1px]">
              Diğer hizmetler ve daha özel bir plan için lütfen iletişime geçin.
            </p>
            <Link to="contact" smooth={true} offset={-100} duration={500}>
              <div className="md:w-[266px] md:h-[47px] mt-[24px] bg-primary rounded-lg flex mx-auto">
                <p className="text-white text-center flex mx-auto my-auto text-[19px] font-[400]">
                  İletişime Geçin
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecommerce;
