/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Logo from "../../public/images/logos/logo5.png";
import Image from "next/image";
import DarkMode from "@/components/DarkMode";

// DARK MODE
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { usePathname} from 'next/navigation';

const Page = () => {
  const { setTheme } = useTheme();
  const pathname = usePathname();
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

  return (
    <div className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white shadow-lg sticky  shadow-indigo-500/40 dark:shadow-indigo-300/40  dark:bg-slate-900">
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
              dark:text-white
              item-center
              md:flex
              md:justify-between 
              md:pt-0"
        >
          <Link
            href="/"
            className={`mr-5 flex   lg:py-3  hover:text-green-500 hover:underline ${
              pathname === "/" ? "text-indigo-500" : ""
            } `}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`mr-5 flex   lg:py-3  hover:text-green-500 hover:underline ${
              pathname === "/about" ? "text-indigo-500" : ""
            } `}
          >
            About
          </Link>
          <Link
            href="/jobs"
            className={`mr-5 flex   lg:py-3  hover:text-green-500 hover:underline ${
              pathname === "/jobs" ? "text-indigo-500" : ""
            } `}
          >
            Jobs
          </Link>
          <Link
            href="/feature"
            className={`mr-5 flex   lg:py-3  hover:text-green-500 hover:underline ${
              pathname === "/feature" ? "text-indigo-500" : ""
            } `}
          >
            Features
          </Link>
          <Link
            href="/contact"
            className={`mr-5 flex   lg:py-3  hover:text-green-500 hover:underline ${
              pathname === "/contact" ? "text-indigo-500" : ""
            } `}
          >
            Contact Us
          </Link>
          <div className="font-bold ">
            <button className="inline-flex items-center bg-gray-100 border-0 py-3 px-3 text-black  mr-2 focus:outline-none hover:bg-gray-200 rounded-lg text-base mt-4 md:mt-0 ">
              <Link href="/employerLogin">Employer Login</Link>
            </button>
            <button className="inline-flex items-center bg-green-300 border-0 py-3 px-3 text-black  hover:text-white focus:outline-none hover:bg-green-500 rounded-lg text-base mt-4 md:mt-0 ">
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

            {/* <DarkMode />  */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="mx-2">
                  <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Page;
