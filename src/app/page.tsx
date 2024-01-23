"use client";
import Hero2 from "../components/Hero2";
import Navbar from "../components/Navbar2";
import Footer from "../components/Footer";

import Testimonial from "@/components/Testimonial";
import Stats from "@/components/Stats";
import Article from "@/components/Article";

// import AOS from 'aos';
// import 'aos/dist/aos.css';
import Steps from "@/components/Steps";
import Cta from "@/components/Cta";


export default function Home() {
  // AOS.init();

  return (
    <>
      <Navbar />
      <Hero2 />
      <Steps />

      {/* Stats */}

      <Stats />

      <div>
        <Article />
      </div>
      {/* CTA */}
      <Cta />

      {/* Testimonial starts here*/}
      <Testimonial />
      {/* Testimonial ends here */}
      <Footer />
    </>
  );
}
