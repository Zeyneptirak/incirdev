import React from 'react'
import logo from '../assets/logoFooter.svg'
export default function Footer() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <h1 className='text-[24px] md:text-[36px] leading-[45px] text-transparent pb-9 text-4xl bg-clip-text bg-gradient-to-r from-white to-content-grey text-center font-[600]'></h1>
        <div className='flex flex-col md:flex-row gap-y-2 items-center justify-center gap-x-3'>
            <img src={logo} alt="" />
            <p className='text-content-grey text-[16px] font-[300] leading-8'>İncir Development Studio.</p>
            <p className='text-content-grey text-[16px] font-[300] leading-8'>© 2022 - Tüm hakları saklıdır. </p>
            <a className='text-white text-[16px]' href="mailto:incir.dev@gmail.com" target="_blank">incir.dev@gmail.com</a>
            <a className='text-white underline text-[16px]' href="">Çerez Politikası</a>

        </div>
    </div>
  )
}
