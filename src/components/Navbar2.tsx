"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Logo from "../../public/images/logos/logo5.png";
import Image from "next/image";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

const Page = () => {
  const { setTheme } = useTheme()
  useEffect(() => {
    const openMenu = () => {
      const menu = document.getElementById("menu");
      menu?.classList.toggle("hidden");
    };

    const menuButton = document.getElementById("menu-button");
    menuButton?.addEventListener("click", openMenu);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      menuButton?.removeEventListener("click", openMenu);
    };
  }, []);

  const toggleMode = () => {
    console.log(setTheme);
    
    if(localStorage.theme === 'dark'){
      console.log("dark")
      setTheme("light");
    }else{
      console.log("light")
      document.documentElement.classList.add('dark')
      setTheme("dark");
    }
  }

  return (
    /* <div className={`flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700  shadow-lg sticky  shadow-indigo-500/40   ${localStorage.theme === 'dark' ? "bg-white" :" bg-slate-800" } `}> */

    <div className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white shadow-lg sticky  shadow-indigo-500/40  dark:bg-slate-800">
      <div>
        <a href="/">
          <Image
            src={Logo}
            height={100}
            width={100}
            alt="logo"
            className="rounded text-xl"
          />
        </a>
      </div>
      <button id="menu-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className="hidden w-full md:flex md:items-center md:w-auto"
        id="menu"
      >
        <ul
          className="
              pt-4
              text-base text-gray-700
              item-center
              md:flex
              md:justify-between 
              md:pt-0"
        >
          <Link
            href="/"
            className="mr-5 flex   lg:py-3  hover:text-green-500 hover:underline"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="mr-5 flex lg:py-3  hover:text-green-500 hover:underline"
          >
            About
          </Link>
          <Link
            href="/"
            className="mr-5 flex lg:py-3  hover:text-green-500 hover:underline"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="mr-5 flex lg:py-3  hover:text-green-500 hover:underline"
          >
            Contact Us
          </Link>
          <div className="font-bold ">
            <button className="inline-flex items-center bg-gray-100 border-0 py-3 px-3  mr-2 focus:outline-none hover:bg-gray-200 rounded-lg text-base mt-4 md:mt-0 ">
              <Link href="/employerLogin">Employer Login</Link>
            </button>
            <button className="inline-flex items-center bg-green-300 border-0 py-3 px-3 hover:text-white focus:outline-none hover:bg-green-500 rounded-lg text-base mt-4 md:mt-0 ">
              <Link href="/login">User Login</Link>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            {/* <button className="inline-flex items-center bg-blue-200 border-0 py-3 px-3 hover:text-white focus:outline-none hover:bg-blue-500 dark:bg-red-700 rounded-lg text-base mt-4 md:mt-0 " onClick={toggleMode}>
              dark
            </button> */}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Page;
