import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar2";
import React from "react";
import img from "../../../public/images/logos/NayiNaukari.png";
import Image from "next/image";

const Page = () => {
  return (
    <div>
      <Navbar />
      {/* eslint-disable react/no-unescaped-entities  */}
      <div className="bg-white dark:bg-dark py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div>
              <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                <Image
                  src={img}
                  height={1000}
                  width={1000}
                  alt="logo"
                  className="h-full w-full"
                />
              </div>
            </div>

            <div className="md:pt-8">
              <p className="text-center font-bold text-indigo-500 md:text-left">
                Who we are
              </p>

              <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
                About <span className="text-indigo-600">NayiNaukri</span>
              </h2>

              <p className="mb-6 text-gray-500 dark:text-slate-200 sm:text-lg md:mb-8">
                Looking for the perfect job? Your search ends here, India's
                largest and fastest-growing job opportunities platform. Trusted
                by over 5 crore job seekers.
                <br />
                <br />
                NayiNaukri is an online platform that connect job seekers with
                employers. These websites provide a centralized location for job
                postings, allowing individuals to search and apply for jobs in
                various industries and locations. Job websites have become an
                essential tool in the job search process, providing convenient
                access to job opportunities and a means for employers to reach a
                wide pool of potential candidates.
               
              </p>

              <div className="sm:w-1/2 p-5">
                <div className="text"></div>
              </div>

              {/* <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">About us</h2>

        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.</p> */}
            </div>
          </div>
        </div>
      </div>

    

      <Footer />
    </div>
  );
};

export default Page;
