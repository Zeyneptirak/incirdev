import React,{useState} from 'react';
import logo from '../assets/logo.svg'
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';


import {Link } from 'react-scroll';
const Navbar = () => {
const [nav,setNav] = useState(false)
const handleClick = ()=> setNav(!nav)
const handleClose=()=> setNav(!nav)


  return (
    <div name="navbar" className='w-screen h-[80px] z-10 font-sora absolute top-0'> 
        <div className='px-2 flex items-center w-full h-full justify-between'>
            <div className='z-10'>
                <img className='h-[32px] md:h-[48px] md:ml-16' src={logo} alt="" />
            </div>
            <div className='items-center hidden md:flex mr-16'>
                <ul className='flex text-[16px] font-[400] z-10'>
                    <li className='cursor-pointer text-white font-[600]'><Link to="home" smooth={true} duration={500}>Ana Sayfa</Link></li>
                    <li className='cursor-pointer hover:text-white hover:font-[600] text-content-grey'><Link to="services" smooth={true} offset={-50} duration={500}>Hizmetlerimiz</Link></li>
                    <li className='cursor-pointer hover:text-white hover:font-[600] text-content-grey'><Link to="about" smooth={true} offset={-200} duration={500}>Hakkımızda</Link></li>
                    <li className='cursor-pointer hover:text-white hover:font-[600] text-content-grey'><Link to="works" smooth={true} offset={-50} duration={500}>Çalışmalar</Link></li>
                    <li className='cursor-pointer hover:text-white hover:font-[600] text-content-grey'><Link to="contact" smooth={true} offset={-100} duration={500}>İletişim</Link></li>
                </ul>
                <div className='border-l-2 pl-4 border-content-grey flex items-center'>
                <a href="https://www.instagram.com/incir.dev/" className="text-content-yellow mr-3 flex items-center" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
                <a className="text-content-yellow flex items-center"  href=""><ion-icon name="logo-twitter"></ion-icon></a>
                </div>
               
                
            </div>
            <div className='md:hidden text-white text-xl' onClick={handleClick}>
                {!nav ? <AiOutlineMenu/> : <AiOutlineClose/>}
            </div>
        </div>
        <ul className={!nav ? 'hidden' : 'absolute bg-card-bg  font-light w-full x-8 z-11'} >
            <li className='border-b-2 border-menuLine text-content-grey hover:text-white w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Ana Sayfa</Link></li>
            <li className='border-b-2 border-menuLine text-content-grey hover:text-white  w-full'><Link onClick={handleClose} to="services" smooth={true} offset={-200} duration={500}>Hizmetlerimiz</Link></li>
            <li className='border-b-2 border-menuLine text-content-grey hover:text-white w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-50} duration={500}>Hakkımızda</Link></li>
            <li className='border-b-2 border-menuLine text-content-grey hover:text-white w-f ull'><Link onClick={handleClose} to="works" smooth={true} offset={-100} duration={500}>Çalışmalar</Link></li>
            <li className='border-b-2 border-menuLine text-content-grey hover:text-white w-full'><Link onClick={handleClose} to="contact" smooth={true} offset={-50} duration={500}>İletişim</Link></li>
           
             <div className='border-l-2 pl-4 border-content-grey flex items-center my-4'>
                <a className="text-content-yellow hover:text-purple mr-3 flex items-center mx-auto my-auto" href=""><ion-icon name="logo-instagram"></ion-icon></a>
                <a className="text-content-yellow hover:text-purple  flex items-center mx-auto my-auto"  href=""><ion-icon name="logo-twitter"></ion-icon></a>
             </div>
        </ul>
       
    </div>
  )
}

export default Navbar