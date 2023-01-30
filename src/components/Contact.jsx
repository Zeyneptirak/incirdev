import React from 'react';
import bgImg from '../assets/contact.png'
import bgImgMobil from '../assets/contactMobil.png'
import vector from "../assets/Vector.svg"
const Contact = () => {
    return (
        <div name="contact">
            <h1 className='text-[36px] leading-[45px] text-transparent pb-9 text-3xl bg-clip-text bg-gradient-to-r from-white to-content-grey text-center font-[600]'>İletişim</h1>
        <div  className='mx-auto my-auto grid md:grid-cols-2 max-w-[1200px]'>
           <div>
                <img className='hidden md:block mx-auto' src={bgImg} alt="" />     
                <img className='md:hidden mx-auto mb-5' src={bgImgMobil} alt="" />     
           </div>
           <div className=''>
            <form className='flex flex-col md:px-20 ' action="https://getform.io/f/52d66894-7e65-49ec-a67c-b4dfe0329145" method="POST" >
                <div className='my-2'>
                     <input className='mb-2 w-full border rounded-lg text-white border-t-color px-2 py-2 bg-transparent' type="text" name="name" required  placeholder='İsminizi ve soyisminizi giriniz'/>
                </div>
                <div className='my-2'>
                    <input className='mb-2 w-full border rounded-lg text-white border-t-color px-2 py-2 bg-transparent' type="email" name="email" required placeholder='E-mail adresinizi giriniz'/>
                </div>
                <div className='my-2'>
            <textarea className='w-full border rounded-lg text-white border-t-color px-2 py-2 pb-9 bg-transparent' cols="20" rows="6" name="message" required placeholder='Bize iletmek istediğiniz mesajınızı bu alana giriniz'></textarea>
                </div>
               <div className=''>
               <button className='mx-auto md:ml-0 py-2 px-10 text-white bg- hover:bg-[#1F0080] rounded-lg my-5 flex flex-row'>Gönder<img className='ml-8 py-1' src={vector} alt=' '></img></button>
               </div> 
            </form>
           
           </div>
          
        </div></div>
    );
}
export default Contact;
