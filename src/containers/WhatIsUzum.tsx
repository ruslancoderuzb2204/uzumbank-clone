import Image from 'next/image';

const Main = () => {
 return (
  <div className='max-w-[1300px] mx-auto w-[100%] px-20'>
   <h2 className='text-4xl text-blue-600 font-semibold text-center mb-14'>What is Uzum?</h2>
   <div className='flex items-center justify-between gap-20'>
    <div className='w-1/2'>
     <Image width={1100} height={600} src={'https://uzumbank.uz/_nuxt/img/Logo-transperent-04%201.ada0533.png'} alt='Img' />
    </div>
    <div className='w-1/2 mt-10'>
     <p className='text-xl mb-9'>Uzum is a group of companies developing a digital ecosystem that includes financial services and a marketplace with a wide range of products and fast delivery.</p>
     <p className='text-xl mb-9'>Uzum Bank became the third service under the Uzum brand.</p>
     <p className='text-xl'>Also, the ecosystem already includes a marketplace with a wide range and fast delivery Uzum Market, installment service Uzum Nasiya, express delivery service from restaurants and shops Uzum Tezkor.</p>
    </div>
   </div>
  </div>
 );
};

export default Main;