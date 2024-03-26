import Image from "next/image";
import React from "react";

const Business = () => {
  return (
    <section className=" pt-20 pb-4  bg-[#f5f6f8]">
      <div className="max-w-[1300px] mx-auto w-full px-20">
        <div className="flex gap-6 items-center ">
          <div className="w-2/5 flex flex-col gap-20 justify-evenly">
            <h1 className="text-5xl font-bold">Business will be!</h1>
            <p className="text-lg">
              We have almost completed our new project for legal entities. The
              final touches remain.
            </p>
          </div>
          <div className="w-1/2">
            <Image
            className="ml-20"
              width={500}
              height={350}
              alt="img"
              src="https://uzumbank.uz/_nuxt/img/construction.69f2a3b.svg"
            />
          </div>
        </div>
        <div className="w-2/5">
            <p>
            Do you want to know about the opening?
            </p>
            <span className="text-[#817f7f] block my-5 text-sm">Leave your email or phone, we will send you a message on the day of launch</span>
            <div className="flex gap-4">
                <input type="text" className="p-3 rounded w-1/2"  placeholder="E-Mail address /  Telephone" />
                <button className="rounded bg-blue-500 text-white w-1/2">Send</button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
