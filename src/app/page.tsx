import Calculator from "@/containers/Calculator";
import Cards from "@/containers/Cards";
import HomeBanner from "@/containers/HomeBanner";
import Navbar from "@/containers/Navbar";
import News from "@/containers/News";
import PhonePay from "@/containers/PhonePay";
import Subscribe from "@/containers/Subscribe";
import Main from "@/containers/WhatIsUzum";
import Border from "@/ui/Border";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Border/>
      <HomeBanner/>
      <Border/>

      <Main/>
      <Border/>

      <Calculator/>
      <Border/>

      <Cards/>
      <Border/>

      <PhonePay/>
      <Border/>

      <News/>
      <Border/>

      <Subscribe/>

    </main>
  );
}
