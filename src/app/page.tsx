"use client";
import Hero2 from "../components/Hero2";
import Navbar from "../components/Navbar2";
import Footer from "../components/Footer";

import Testimonial from "@/components/Testimonial";
import Stats from "@/components/Stats";
import Article from "@/components/Article";

import Steps from "@/components/Steps";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";

export default function Home() {
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

      <Faq />
      <Footer />
    </>
  );
}
