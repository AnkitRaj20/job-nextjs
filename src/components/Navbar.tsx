import Link from "next/link";
import React from "react";
import Logo from "../../public/images/logos/logo-1.jpeg"
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="shadow-lg sticky  shadow-indigo-500/40">
    <header className="text-gray-600 bg-white body-font ">
      <div className="container justify-between mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Jobs</span> */}
          <Image src={Logo} height={100} width={20} alt="logo"/>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-bold">
          <Link href="/" className="mr-5 hover:text-green-500 hover:underline">
          Home</Link>
          <Link href="/about" className="mr-5 hover:text-green-500 hover:underline">
          About</Link>
          <Link href="/" className="mr-5 hover:text-green-500 hover:underline">
          Services</Link>
          <Link href="/contact" className="mr-5 hover:text-green-500 hover:underline">
          Contact Us</Link>
        </nav>
		
		<div className="font-bold">

		<button className="inline-flex items-center bg-gray-100 border-0 py-3 px-3  mr-2 focus:outline-none hover:bg-gray-200 rounded-lg text-base mt-4 md:mt-0">
    <Link href="/employerLogin">Employer Login</Link>
        </button>
		<button className="inline-flex items-center bg-green-300 border-0 py-3 px-3 hover:text-white focus:outline-none hover:bg-green-500 rounded-lg text-base mt-4 md:mt-0">
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
		</div>
		</div>
    </header>
    </div>
  );
};

export default Navbar;
