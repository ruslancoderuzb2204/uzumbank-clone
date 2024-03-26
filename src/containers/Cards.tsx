import React from 'react';
import Image from 'next/image';

const Cards = () => {
    return (
        <section className='max-w-[1300px] mx-auto px-20 my-12'>
            <h2 className='text-3xl text-blue-700 font-semibold mb-10'>Save on transfers and earn on payments</h2>
            <div className='flex items-center gap-10 justify-between'>
                <div className='border rounded-lg bg-blue-700 relative w-1/2 h-96'>
                    <div className='p-8'>
                        <h2 className='text-3xl font-semibold text-white mb-5'>
                            Transfers between cards <br />
                            from 0.6%
                        </h2>
                        <p className='text-xl text-white mb-5'>
                            Uzum Bank always has a low <br /> commission for transfers between <br /> cards:
                        </p>
                        <p className='text-xl text-white'>
                            0.6% from HUMO to HUMO <br /> 0.7% between UzCard and HUMO
                        </p>
                    </div>
                    <div className='absolute right-0 bottom-0'>
                        <Image width={300} height={200} src={'https://uzumbank.uz/_nuxt/img/uzjeldor.7b3c5a4.svg'} alt='icon' />
                    </div>
                </div>
                <div className='border rounded-lg bg-blue-700 relative w-1/2 h-96'>
                    <div className='p-8'>
                        <h2 className='text-4xl font-semibold text-white mb-8'>
                            Cashback up to 20% <br />
                            for payments
                        </h2>
                        <p className='text-xl text-white mb-5'>
                            Make payments for the <br /> usual services and get <br /> your money back
                        </p>
                    </div>
                    <div className='absolute right-0 bottom-0'>
                        <Image width={400} height={300} src={'https://uzumbank.uz/_nuxt/img/western.a015abc.svg'} alt='icon' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cards;
