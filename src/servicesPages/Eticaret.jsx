import React from "react";
import tik from "../assets/tik2.svg";
import carpi from "../assets/carpi2.svg";

function Eticaret() {
  return (
    <div className=" h-full flex flex-col w-full px-6 py-7 items-center ">
         <h1 className="flex mx-auto text-center text-[25px] md:text-[36px] leading-[45px] text-transparent pb-9 text-3xl bg-clip-text bg-gradient-to-r from-white to-gray-500 font-[600]">
          E-Ticaret Paketlerimiz
        </h1>
      <div className="max-w-[1000px] w-full">
     
        <div className="rounded-xl w-full flex flex-col text-[9px] md:text-[16px]">
          <div className="grid grid-cols-5 bg-primary font-[600] text-white rounded-t-lg py-3 px-6 w-full  md:tracking-[2px]">
            <p className="col-span-2">ÖZELLİKLER</p>
            <p className="col-span-1 ">STARTER</p>
            <p className="col-span-1 ">GROWTH</p>
            <p className="col-span-1 ">PREMİUM</p>
          </div>

          <div className="text-white">
            <div className="text-[10px] md:text-[15px] grid grid-cols-5  py-4 px-6 border-b-2 border-graybg">
              <p className="col-span-2">Özel Tasarım (Mobil Uyumlu)</p>
              <img className="col-span-1 px-2 text-center w-9" src={tik} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
            </div>
            <div className="text-[10px] md:text-[15px] grid grid-cols-5  py-4 px-6 border-b-2 border-graybg">
              <p className="col-span-2">Üyelik</p>
              <img className="col-span-1 px-2 text-center w-9" src={tik} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
            </div>
            <div className="text-[10px] md:text-[15px] grid grid-cols-5  py-4 px-6 border-b-2 border-graybg">
              <p className="col-span-2">Üye Listesi Görüntüleme</p>
              <img className="col-span-1 px-2 text-center w-9 " src={carpi} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
            </div>
            <div className="text-[10px] md:text-[15px] grid grid-cols-5  py-4 px-6 border-b-2 border-graybg">
              <p className="col-span-2">İşletme Mail Heabı</p>
              <p className="col-span-1  px-3">1</p>
              <p className="col-span-1  px-3">5</p>
              <p className="col-span-1 px-3">10</p>
            </div>
            <div className="text-[10px] md:text-[15px] grid grid-cols-5  py-4 px-6 border-b-2 border-graybg">
              <p className="col-span-2">Özelleştirilebilir Üyelik Sayfsı</p>
              <img className="col-span-1 px-2 text-center w-9" src={tik} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
              <img className="col-span-1 px-3 text-center w-11 " src={tik} alt="" />
            </div>
            <div className="text-[10px] md:text-[15px] grid grid-cols-5  py-4 px-6 border-b-2 border-graybg">
              <p className="col-span-2">Stok ve Fiyat</p>
              <img className="col-span-1 px-2 text-center w-9" src={tik} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
            </div>
            <div className="text-[10px] md:text-[15px] grid grid-cols-5  py-4 px-6 border-b-2 border-graybg ">
              <p className="col-span-2">Ödeme</p>
              <img className="col-span-1 px-2 text-center w-9" src={carpi} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
            </div>
            <div className="text-[10px] md:text-[15px] grid grid-cols-5  py-4 px-6 border-b-2 border-graybg">
              <p className="col-span-2">Toplu Resim Yükleme</p>
              <img className="col-span-1 px-2 text-center w-9" src={carpi} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={carpi} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
            </div>
            <div className="text-[10px] md:text-[15px] grid grid-cols-5  py-4 px-6 border-b-2 border-graybg">
              <p className="col-span-2">Toplu Mail Gönderme</p>
              <img className="col-span-1 px-2 text-center w-9" src={carpi} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={carpi} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
            </div>
            <div className="text-[10px] md:text-[15px] grid grid-cols-5  py-4 px-6 border-b-2 border-graybg">
              <p className="col-span-2">Kampanya Modülü</p>
              <img className="col-span-1 px-2 text-center w-9" src={carpi} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
            </div>
            <div className="text-[10px] md:text-[15px] grid grid-cols-5  py-4 px-6 border-b-2 border-graybg">
              <p className="col-span-2">Hediye Kartı Modülü</p>
              <img className="col-span-1 px-2 text-center w-9" src={carpi} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={carpi} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
            </div>
            <div className="text-[10px] md:text-[15px] grid grid-cols-5  py-4 px-6 border-b-2 border-graybg">
              <p className="col-span-2">Ürün Liste Resim Slider</p>
              <img className="col-span-1 px-2 text-center w-9" src={tik} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
            </div>
            <div className="text-[10px] md:text-[15px] grid grid-cols-5  py-4 px-6 border-b-2 border-graybg">
              <p className="col-span-2">Ürün Videosu Ekleme</p>
              <img className="col-span-1 px-2 text-center w-9" src={carpi} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={carpi} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
            </div>
            <div className="text-[10px] md:text-[15px] grid grid-cols-5  py-4 px-6 border-b-2 border-graybg ">
              <p className="col-span-2">Ürün Detay Blog Ekleme</p>
              <img className="col-span-1 px-2 text-center w-9" src={carpi} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
            </div>
            <div className="text-[10px] md:text-[15px] grid grid-cols-5  py-4 px-6 border-b-2 border-graybg">
              <p className="col-span-2">Sipariş Takibi</p>
              <img className="col-span-1 px-2 text-center w-9" src={carpi} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
            </div>
            <div className="text-[10px] md:text-[15px] grid grid-cols-5  py-4 px-6 border-b-2 border-graybg">
              <p className="col-span-2">Sipariş Bildirimi</p>
              <img className="col-span-1 px-2 text-center w-9" src={carpi} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={carpi} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
            </div>
            <div className="text-[10px] md:text-[15px] grid grid-cols-5  py-4 px-6 border-b-2 border-graybg">
              <p className="col-span-2">Üyeliksiz Alışveriş</p>
              <img className="col-span-1 px-2 text-center w-9" src={carpi} alt="" />
              <img className="col-span-1 px-3 text-center" src={tik} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
            </div>
            <div className="text-[10px] md:text-[15px] grid grid-cols-5  py-4 px-6 border-b-2 border-graybg">
              <p className="col-span-2">Favroi Ürünler Listesi</p>
              <img className="col-span-1 px-2 text-center w-9" src={carpi} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
            </div>
            <div className="text-[10px] md:text-[15px] grid grid-cols-5  py-4 px-6 border-b-2 border-graybg">
              <p className="col-span-2">Chat Bot</p>
              <img className="col-span-1 px-2 text-center w-9" src={carpi} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={carpi} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
            </div>
            <div className="text-[10px] md:text-[15px] grid grid-cols-5  py-4 px-6 border-b-2 border-graybg">
              <p className="col-span-2">Soru Sor Modülü</p>
              <img className="col-span-1 px-2 text-center w-9" src={carpi} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
            </div>
            <div className="text-[10px] md:text-[15px] grid grid-cols-5  py-4 px-6 border-b-2 border-graybg">
              <p className="col-span-2">Detaylı Filtreleme</p>
              <img className="col-span-1 px-2 text-center w-9" src={carpi} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={carpi} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
            </div>
            <div className="text-[10px] md:text-[15px] grid grid-cols-5  py-4 px-6 border-b-2 border-graybg">
              <p className="col-span-2">Süreli Popup Modülü</p>
              <img className="col-span-1 px-2 text-center w-9" src={carpi} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={carpi} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
            </div>
            <div className="text-[10px] md:text-[15px] grid grid-cols-5  py-4 px-6 border-b-2 border-graybg">
              <p className="col-span-2">Puanlama ve Yorumlama</p>
              <img className="col-span-1 px-2 text-center w-9" src={carpi} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={carpi} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
            </div>
            <div className="text-[10px] md:text-[15px] grid grid-cols-5  py-4 px-6 border-b-2 border-graybg">
              <p className="col-span-2">Sosyal Medyaya Yönlendirme</p>
              <img className="col-span-1 px-2 text-center w-9" src={tik} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
            </div>
            <div className="text-[10px] md:text-[15px] grid grid-cols-5  py-4 px-6 border-b-2 border-graybg">
              <p className="col-span-2">Aylık Site Seansı Raporu</p>
              <img className="col-span-1 px-2 text-center w-9" src={carpi} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={carpi} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
            </div>
            <div className="text-[10px] md:text-[15px] grid grid-cols-5  py-4 px-6 ">
              <p className="col-span-2">Aylık Sipariş Geliri Raporu</p>
              <img className="col-span-1 px-2 text-center w-9" src={carpi} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
              <img className="col-span-1 px-3 text-center w-11" src={tik} alt="" />
            </div>


            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eticaret;
