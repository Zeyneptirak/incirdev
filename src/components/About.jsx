import React from 'react'
import codeexa from '../assets/codeexa.svg'
import Daire from '../assets/daire.svg'
export const About = () => {
  return (
    <div className='max-w-[1200px] h-full md:mt-[200px] mx-auto grid lg:grid-cols-2 gap-x-7 items-center justify-center'>
       <img className='flex absolute -z-1 md:px-[200px] mt-[200px] md:mt-0' src={Daire} alt=''/>
        <div className='mx-auto px-[16] relative'>
            <h1 name="about" className='md:text-left text-center text-transparent pb-9 text-[36px] leading-[45px] bg-clip-text bg-gradient-to-r from-white to-gray-500 font-[600] '>Hakkımızda</h1>
            <p className='text-content-grey text-[16px] mt-2 font-[300] md:text-left text-center leading-8 pb-[24px]'>İşimiz Dijital! <span className='text-white '>incir.dev </span>2021 yılında, yüksek hedefleri olan dört kişilik ekip tarafından Mersin'de kurulmuştur. Ekibimiz alanında uzmanlaşmış, eğitimini tamamlamış hevesli mühendislerden oluşmaktadır. Web Sitesi, Ürün Tasarımı, Mobil Uygulama ve diğer yazılım destekleri için sizlerin istek ve ihtiyaçları doğrultusunda en kaliteli ve en uygun hizmeti vermeyi amaçlamaktayız.</p>
        </div>
        <div className='mx-auto relative'>
          <img src={codeexa} alt="" />
        </div>
    </div>
  )
}
