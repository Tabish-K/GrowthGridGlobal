"use client"
import HeroSection from "@/components/Hero";
import Impact from "@/components/Impact";
import PreNav from "@/components/PreNav";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <PreNav/>
      <Solutions/>
      <WhyUs/>
      <Services/>
      <Testimonials/>
      <Impact/>
    </div>
  );
}
