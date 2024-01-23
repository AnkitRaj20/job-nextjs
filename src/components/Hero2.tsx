"use client";
import React, { useState } from "react";
import Lottie from "lottie-react";
import anime from "@/app/animation/anime2.json";

import { Typewriter } from "react-simple-typewriter";
import { useRouter } from "next/navigation";

const Hero2 = () => {
 const router = useRouter();
 const [search, setSearch] = useState("");
  const jobSearch = (data:string) => {
    console.log(data)
    router.push(`/user/jobs/${search}`);
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4   place-items-center   bg-white dark:bg-dark">
      <div className="max-w-xl  text-center ltr:sm:text-left rtl:sm:text-right">
        <h1 className="text-green-500  text-xl font-semibold mb-10">
          India's Best Job Platform
        </h1>
        <h1 className="text-3xl dark:text-white font-extrabold sm:text-5xl ">
          Looking For
          <strong className="block font-extrabold text-indigo-700 mt-5 dark:text-zinc-400">
            <Typewriter
              cursor
              cursorBlinking
              delaySpeed={1000}
              deleteSpeed={25}
              loop={0}
              typeSpeed={200}
              words={["a Job", "an Employee"]}
            />
          </strong>
        </h1>
        <h3 className="mt-10 font-bold dark:text-white max-w-lg sm:text-xl/relaxed">
          Your Job Search Ends Here
        </h3>

        <section className="py-14">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="max-w-xl">
              <h3 className="text-3xl font-bold dark:text-ehite">
                Search Job by Title or City
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-3">
                Seach your job by writing title or location .
              </p>
            </div>
            <div className="mt-6">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center gap-x-3"
              >
                <div className="relative">
                  <svg
                    className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 9a6 6 0 110 12 6 6 0 010-12z"
                    />
                  </svg>

                  <input
                    type="text"
                    required
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Enter 'title' or 'location"
                    className="w-full pl-12 pr-3 py-2 text-gray-500 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <button className="block w-auto py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow" onClick={() => jobSearch(search)}>
                  Search
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      <div>
        <Lottie animationData={anime} />
      </div>
    </div>
  );
};

export default Hero2;
