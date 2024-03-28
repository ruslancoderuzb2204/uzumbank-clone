import Image from 'next/image';
import React from 'react';

const PhonePay = () => {
	return (
			<div className='max-w-[1300px]  mx-auto w-full px-20'>
				<div className='flex items-center gap-40 justify-center mb-10'>
					<div>
						<h2 className=' text-4xl  font-semibold text-blue-600 mb-5'>
							You only need a phone <br/>  to pay
						</h2>
						<p className='text-base mb-10'>
							It is more convenient and safer than physical bank cards and cash,  and also allows you to protect your personal data when paying in <br /> stores.
						</p>
						<div className=' flex gap-5'>
							<Image width={100} height={50} src={'https://uzumbank.uz/_nuxt/img/humo_badge.2bc3c59.svg'} alt='Humo' />
							<Image width={100} height={50} src={'https://uzumbank.uz/_nuxt/img/light_visa_badge.a828ec7.svg'} alt='Viza' />
						</div>
					</div>
					<div>
						<Image width={900} height={400} src={'https://uzumbank.uz/_nuxt/img/terminal.2d56ccc.png'} alt='Phone' />
					</div>
				</div>
			</div>
	);
};

export default PhonePay;