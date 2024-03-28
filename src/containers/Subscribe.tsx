import Link from "next/link";
import React from "react";

const Subscribe = () => {
  return (
    <div className="max-w-[1300px] mx-auto  px-20 my-6">
      <h2 className=" text-xl mb-3">Subscribe to our news and announcements</h2>
      <div className="flex items-center justify-between ">
        <form className="flex  gap-5">
          <input
            type="text"
            className=" p-2  border rounded  w-52 bg-white  text-black"
            placeholder="Email"
          />
          <button className="border w-52 p-2 rounded text-[#7000ff] bg-[#c9b8ff]">
            Send
          </button>
        </form>
        <div>
          <Link className=" text-2xl font-bold" href={"/"}>
            +998 78 777 07 99
          </Link>
          <br />
          <Link className=" ml-16 text-[#7000FF]" href={"/Telegram"}>
            Telegram
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
