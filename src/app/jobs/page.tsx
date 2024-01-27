/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import Navbar from "@/components/Navbar2";
import Footer from "@/components/Footer";

import Jobs from "@/components/Jobs";

const Page = () => {
  return (
    <>
      <Navbar />
      <Jobs />
      <Footer />
    </>
  );
};

export default Page;
