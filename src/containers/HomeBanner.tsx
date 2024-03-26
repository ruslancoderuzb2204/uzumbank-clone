'use client';
import Image from 'next/image';

const HomeBanner = () => {
 return (
  <header className=' max-w-[1300px] px-20 mx-auto py-10'>
   <div className='container mx-auto flex items-center gap-10 justify-center'>
    <div className='flex flex-col justify-center'>
     <div>
      <h2 className='text-4xl  font-bold text-[#6a3bac] mb-10'>
       A reliable bank <br />
       is always at hand
      </h2>
      <p className='text-xl text-gray-600'>
       Uzum Bank is a payment system and a reliable online bank in one <br />
       mobile application.
      </p>
     </div>
     <div className='flex gap-4 mt-4'>
      <div className='w-52'>
       <Image width={200} height={200} src={'https://media.istockphoto.com/id/828088276/vector/qr-code-illustration.jpg?s=612x612&w=0&k=20&c=FnA7agr57XpFi081ZT5sEmxhLytMBlK4vzdQxt8A70M='} alt='Qr code imgi' />
      </div>
      <div className=' flex gap-4 mt-28'>
       <div className='w-52'>
        <Image width={200} height={200} src={'https://uzumbank.uz/_nuxt/img/en_apple_badge.8a99f76.svg'} alt='Apple' />
       </div>
       <div className='w-52'>
        <Image width={200} height={50} src={'https://uzumbank.uz/_nuxt/img/en_google_badge.c987ead.svg'} alt='Google' />
       </div>
      </div>
     </div>
    </div>

    <div>
     <Image width={400} className=' ml-10' height={300} src={'https://uzumbank.uz/_nuxt/img/applications.59d741a.png'} alt='Phone' />
    </div>
   </div>
  </header>
 );
};

export default HomeBanner;
//
