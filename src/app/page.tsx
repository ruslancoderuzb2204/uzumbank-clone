import Cards from "@/containers/Cards";
import HomeBanner from "@/containers/HomeBanner";
import Navbar from "@/containers/Navbar";
import Main from "@/containers/WhatIsUzum";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto w-full">
      <Navbar/>
      <HomeBanner/>
      <Main/>
      <Cards/>
    </main>
  );
}
