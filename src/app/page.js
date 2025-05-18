import CallToAction from "@/sections/home/CallToActiion";
import OfferSection from "@/sections/home/OfferSection";
import OurCollection from "@/sections/home/OurCollection";
import SliderSection from "@/sections/home/SliderSection";
import TopProducts from "@/sections/home/TopProducts";
import WhyChooseUs from "@/sections/home/WhyChoseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <SliderSection />
      <WhyChooseUs />
      <OfferSection />
      <TopProducts />
      <OurCollection />
      <CallToAction />
    </main>
  );
}
