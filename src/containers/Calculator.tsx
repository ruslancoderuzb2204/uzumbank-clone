"use client"
import Link from 'next/link';
import { useState } from 'react';

const Calculator = () => {
    const [usdAmount, setUsdAmount] = useState<number>(0);
    const [uzsAmount, setUzsAmount] = useState<number>(0);
    const [selectOne, setSelectOne] = useState<string>("USD");
    const [selectTwo, setSelectTwo] = useState<string>("UZS");

    const usdToUzsRate: number = 12600; // Example exchange rate: 1 USD = 12600 UZS

    const handleUsdInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue: number = parseFloat(e.target.value);
        if (selectOne === "USD") {
            setUsdAmount(inputValue);
            setUzsAmount(inputValue * usdToUzsRate);
        } else if (selectOne === "UZS") {
            setUsdAmount(inputValue / usdToUzsRate);
            setUzsAmount(inputValue);
        }
        // Automatically switch the conversion direction
        setSelectTwo(selectOne === "USD" ? "UZS" : "USD");
    };
    
    const handleUzsInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue: number = parseFloat(e.target.value);
        if (selectTwo === "UZS") {
            setUsdAmount(inputValue / usdToUzsRate);
            setUzsAmount(inputValue);
        } else if (selectTwo === "USD") {
            setUsdAmount(inputValue);
            setUzsAmount(inputValue * usdToUzsRate);
        }
        // Automatically switch the conversion direction
        setSelectOne(selectTwo === "USD" ? "UZS" : "USD");
    };
    
    const handleSelectOneChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectOne(e.target.value);
    };

    const handleSelectTwoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectTwo(e.target.value);
    };

    return (
        <div className="w-full max-w-[1300px] mx-auto  px-20  mt-20">
            <div className="container mx-auto space-y-5">
                <h1 className="text-[#7000ff] text-4xl font-semibold">
                    Currency calculator
                </h1>
                <p className="text-2xl font-extralight tracking-[.05em] mt-10">
                    At Apelsin we always use the best rate
                </p>
                <br /><br />
                <div className="grid grid-cols-2 rounded-lg border">
                    <div className="p-5 space-y-10">
                        <div className="flex justify-between">
                            <p className="text-2xl font-extralight">I have</p>
                            <span className="text-xl font-extralight">{selectOne}</span>
                        </div>
                        <div className="flex justify-between">
                            <input
                                type="number"
                                value={usdAmount}
                                onChange={handleUsdInputChange}
                                className="w-[75%] p-3 border-b-2 border-[#7000ff] outline-none text-4xl text-[#7000ff]"
                                placeholder="0"
                            />
                            <select
                                value={selectOne}
                                onChange={handleSelectOneChange}
                                className="border-b-2 border-[#7000ff] p-3 outline-none text-4xl text-[#7000ff]"
                            >
                                <option value="USD">USD</option>
                                <option value="UZS">UZS</option>
                            </select>
                        </div>
                        <p className="flex items-center text-xl font-extralight">
                            The exchange rate is automatically updated. Press F5 if the rate is not updated.
                        </p>
                    </div>
                    <div className="p-5 space-y-10 bg-slate-100">
                        <div className="flex justify-between">
                            <p className="text-2xl font-extralight">I will get</p>
                            <span className="text-xl font-extralight">{selectTwo}</span>
                        </div>
                        <div className="flex justify-between">
                            <input
                                type="number"
                                value={uzsAmount}
                                onChange={handleUzsInputChange}
                                className="bg-inherit w-[75%] p-3 border-b-2 border-[#7000ff] outline-none text-4xl text-[#7000ff]"
                                placeholder="0"
                            />
                            <select
                                value={selectTwo}
                                onChange={handleSelectTwoChange}
                                className="bg-inherit border-b-2 border-[#7000ff] p-3 outline-none text-4xl text-[#7000ff]"
                            >
                                <option value="UZS">UZS</option>
                                <option value="USD">USD</option>
                            </select>
                        </div>
                        <p className="flex items-center text-xl font-extralight">
                            1 USD = 12,600 UZS
                        </p>
                    </div>
                </div>
                <div className="w-full flex justify-end pb-10">
                    <Link className="text-[#7000ff] underline" href="https://cbu.uz/ru/arkhiv-kursov-valyut/index.php" target="_blank">
                       Archives of Exchange Rates
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
