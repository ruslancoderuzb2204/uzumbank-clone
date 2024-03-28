import React from "react";

const News = () => {
  return (
    <div className="max-w-[1300px]  mx-auto w-full my-12 px-20">
      <div className=" grid grid-cols-3 items-start gap-8">
        <div className="rounded-xl bg-[#E1E5FFFF]">
          <div className="p-5 h-auto">
            <button className="rounded-lg bg-white px-2 py-1 text-sm hover:bg-gray-200">
              News
            </button>
            <p className="mt-5 text-sm  font-[400] text-gray-500">
              Dear Clients! <br />
              We notify you that from 02/02/2024 <br />
              from 10:00 to 10:00 on 02/03/2024, <br />
              maintenance work is planned, during <br /> which the Uzum Bank
              mobile application <br /> may not be available. <br /> Thank you
              for being with us 💜
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-[#E1E5FFFF]">
          <div className="p-5">
            <button className="rounded-lg bg-white px-2 py-1 text-sm hover:bg-gray-200">
              News
            </button>
            <p className="mt-5 text-sm font-[400] text-gray-500">
              «Uzum Bank» JSC informs about <br /> changes in the tariff line
              from 16 January <br /> 2024
            </p>
            <a href="https://uzumbank.uz/en/tariffs">
              <button className="mt-5 text-base font-[500] text-[#7000FFFF]">
                Tariffs &gt;
              </button>
            </a>
          </div>
        </div>
        <div className="rounded-xl bg-[#E1E5FFFF]">
          <div className="p-5 h-auto">
            <button className="rounded-lg bg-white px-2 py-1 text-sm hover:bg-gray-200">
              News
            </button>
            <p className="mt-5 text-sm font-[400] text-gray-500">
              «Uzum Bank» JSC informs about <br /> changes in the tariff line
              from 24 <br />
              December 2023
            </p>
            <a href="https://uzumbank.uz/en/tariffs">
              <button className="mt-5 text-base font-[500] text-[#7000FFFF]">
                Tariffs &gt;
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;