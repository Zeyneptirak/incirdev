import React from 'react'
import Navbar from '../components/Navbar'
import ecommerce2 from '../assets/ecommerce.jpg'
import ecommerce from '../assets/ecommerce.svg'

function Nedir() {
  return (
    <div className='h-full'>
        <Navbar/>
       <div className='max-w-[1200px] mx-auto'>
       <div className='h-[100px] md:h-[158px]'></div>
       <div className="flex mx-auto my-auto  max-w-[1200px] h-[150px] md:h-[241px] justify-center items-center">
          <img className="" src={ecommerce} alt="" />
          <div className="flex-col absolute z-10 text-center">
            <p className="text-[26px] md:text-[30px] text-white font-bold tracking-[1px]">
            E-Ticaret Nedir?
            </p>
          </div>
        </div>
        <div className="hidden md:flex flex-row  md:mt-6 text-white">
         <a href='/'>  <p className=''>incir.dev&emsp;&emsp;</p></a>
           <p className=''> >&emsp;&emsp;</p>
         <a href='/blog'> <p className=''>incir blog&emsp;&emsp;</p></a> 
         <p className=''> >&emsp;&emsp;</p>
         <a href=''><p>E-Ticaret Nedir?</p></a>
        </div>
       <div className="max-w-[1200px] grid grid-cols-1 mx-auto">
        
        <img src={ecommerce2} alt="" className='w-full md:w-[900px] md:h-[500px] mx-auto mt-0 md:mt-6'/>
        <p className='text-white text-[16px] md:text-[18px] font-[300] mt-3 md:mt-5'>E-Ticaret 90’lı yılların ortasından başlayıp, günümüze kadar uzanan ve çeşitli ödeme yöntemleri, pazarlama ve reklam olanakları ile sürekli olarak gelişen, internet üzerinden web siteleri aracılığıyla ürün ya da hizmet satılmasını sağlayan bir alışveriş yöntemidir.</p>
        <h1 className='text-[18px] md:text-[22px] text-transparent leading-[30px] bg-clip-text bg-gradient-to-r from-white to-gray-500 font-bold tracking-[1px] mt-5 md:mt-8'>E-Ticaret Türleri Nelerdir?</h1>
        <p className="text-white text-[16px] md:text-[18px] font-[300] mt-2 md:mt-4">E-Ticaret, uygulama modeline göre birçok farklı türde yapılabilir. Aşağıda kısaca bu başlıklara değineceğiz. Birçok kez karşınıza çıkabilecek olan ve bazı kısaltmalar ve tanımlar ile ifade edilen bu iş modellerini birlikte inceleyelim.</p>
        <h1 className='text-[18px] md:text-[22px] text-transparent leading-[30px] bg-clip-text bg-gradient-to-r from-white to-gray-500 font-bold tracking-[1px] mt-5 md:mt-8'>B2B (Şirketten Şirkete Satış):</h1>
        <p className="text-white text-[16px] md:text-[18px] font-[300] mt-2 md:mt-4">Toptan satışlar için kullanılan iş modellerinden biridir. Genellikle ürün fiyatları, son kullanıcıların göremeyecekleri şekilde gizlenmiştir. Bu tür sitelerde satılan ürünlerin toptan satış fiyatlarının sadece toptan ürün satın alacak olan diğer üye firmaların görebilmesi istenir. Ayrıca satışı yapılan ürünler de genellikle paketler, koliler, düzineler halinde sergilenir ya da herhangi bir ürünü sepete ancak birden fazla adetle ekleyebilirsiniz.</p>
        <h1 className='text-[18px] md:text-[22px] text-transparent leading-[30px] bg-clip-text bg-gradient-to-r from-white to-gray-500 font-bold tracking-[1px] mt-5 md:mt-8'>B2C (Şirketten Tüketiciye Satış):</h1>
        <p className="text-white text-[16px] md:text-[18px] font-[300] mt-2 md:mt-4">En çok kullanılan E-Ticaret yöntemi B2C’dir. Bu E-Ticaret modelinde, işletmelerin kendi ürettikleri ürünlerini ya da başka işletmelerden tedarik ettikleri ürünleri, kendi e-ticaret siteleri üzerinden son kullanıcıya satışa sunmaları üzerine kurgulanmıştır. Bu yöntemle faaliyet gösteren E-Ticaret siteleri, ürün fiyatlarını açık ve net olarak yayınlarken, ayrıca ürün açıklamaları, detaylı ürün fotoğrafları, varsa videoları ile sunumu zenginleştirerek, son kullanıcıya ürünleri hem tanıtmaya, hem de satmaya çalışırlar. Ayrıca indirimler ve kampanyalar da B2C sitelerde oldukça sık kullanılan pazarlama araçlarındandır.
</p>
        <h1 className='text-[18px] md:text-[22px] text-transparent leading-[30px] bg-clip-text bg-gradient-to-r from-white to-gray-500 font-bold tracking-[1px] mt-5 md:mt-8'>C2C (Tüketiciden Tüketiciye Satış):</h1>
        <p className="text-white text-[16px] md:text-[18px] font-[300] mt-2 md:mt-4">Tüketicilerin kendi aralarında satış yapmalar üzerine kurgulanan E-Ticaret sistemleridir. Bu iş modeline, İkinci el ürün satışının yapıldığı platformlar örnek olarak gösterilebilir. Günümüzde Online Pazaryeri olarak adlandırılan siteler de C2C yapısıyla çalışırlar. Her bir satıcı kendi mağazasını açar ve son kullanıcılara ürünlerini satmaya çalışır. Bu yöntemle faaliyet gösteren E-Ticaret sitelerinin gelir modeli genellikle platform üzerinde yapılan satışlardan komisyon alma esasına dayanır.
</p>
        <h1 className='text-[18px] md:text-[22px] text-transparent leading-[30px] bg-clip-text bg-gradient-to-r from-white to-gray-500 font-bold tracking-[1px] mt-5 md:mt-8'>Dikey E-Ticaret:</h1>
        <p className="text-white text-[16px] md:text-[18px] font-[300] mt-2 md:mt-4"></p>
        <h1 className='text-[18px] md:text-[22px] text-transparent leading-[30px] bg-clip-text bg-gradient-to-r from-white to-gray-500 font-bold tracking-[1px] mt-5 md:mt-8'>Yatay E-Ticaret: </h1>
        <p className="text-white text-[16px] md:text-[18px] font-[300] mt-2 md:mt-4"></p>
        <h1 className='text-[18px] md:text-[22px] text-transparent leading-[30px] bg-clip-text bg-gradient-to-r from-white to-gray-500 font-bold tracking-[1px] mt-5 md:mt-8'>Eİnternetten Stoksuz Satış (Dropshipping):</h1>
        <p className="text-white text-[16px] md:text-[18px] font-[300] mt-2 md:mt-4"></p>
        <h1 className='text-[18px] md:text-[22px] text-transparent leading-[30px] bg-clip-text bg-gradient-to-r from-white to-gray-500 font-bold tracking-[1px] mt-5 md:mt-8'>E-Ticaretin Bize Sağladığı Avantajlar Nelerdir?</h1>
        <p className="text-white text-[16px] md:text-[18px] font-[300] mt-2 md:mt-4"></p>
        <h1 className='text-[18px] md:text-[22px] text-transparent leading-[30px] bg-clip-text bg-gradient-to-r from-white to-gray-500 font-bold tracking-[1px] mt-5 md:mt-8'>E-Ticaret Türleri Nelerdir?</h1>
        <p className="text-white text-[16px] md:text-[18px] font-[300] mt-2 md:mt-4"></p>
        
       
       </div>
       </div>
    </div>
  )
}

export default Nedir