"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar2";
import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const Page = () => {
   const router = useRouter()
  const [loading, setLoading] = useState(false);
  const[tokenData, setTokenData] = useState("");
  const [token, setToken] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(()=>{
    // Getting the token from the URL to verify
    const urlToken = window.location.search.split("=")[1];
    setTokenData(urlToken || "")
},[])

  const onSubmit = async (data: any) => {
    const match = data.password.match(data.confirmPassword);
      
    if( match){
        try {
            const response = await axios.post("/api/users/resetPassword", {data,tokenData});
            console.log(response);
            toast.success("Password updated successfully");
          } catch (error: any) {
            toast.error(error.response.data)
            console.log(error.response.data);
          }
    }else{
        toast.error("Password and confirm password are not same");
    }
   
  };
  return (
    <>
      <Navbar />
      <Toaster />
      <div className="antialiased">
        <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
          <h1 className="text-4xl font-medium">Reset Password</h1>
          <p className="text-slate-500">
            Fill up the form to reset the password
          </p>

          <form className="my-10" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-2">
              <p className="font-medium text-slate-700">Password</p>
              <input
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                type="password"
                placeholder="password"
                {...register("password", {
                  required: "Enter Password",
                  maxLength: {
                    value: 12,
                    message: "Password Should less than 12 characters",
                  },
                  minLength: {
                    value: 8,
                    message: "Password should be greater than 8 characters",
                  },
                })}
              />

              <p className="font-medium text-slate-700">
                Confirm Password
              </p>
              <input
               className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: "Enter Confirm Password",
                  maxLength: {
                    value: 12,
                    message: "Password Should less than 12 characters",
                  },
                  minLength: {
                    value: 8,
                    message: "Password should be greater than 8 characters",
                  },
                })}
              />
            </div>
            <span
              className={
                errors.password
                  ? "justify-between pb-1 flex flex-row"
                  : "justify-end pb-1 flex flex-row"
              }
            >
              {errors.password && (
                <p className="bg-red-500 text-white  rounded w-1/3">
                  {errors.password.message?.toString()}
                </p>
              )}
              {errors.confirmPassword && (
                <p className="bg-red-500 text-white  rounded w-1/3">
                  {errors.confirmPassword.message?.toString()}
                </p>
              )}
            </span>
            <button
              type="submit"
              className="flex items-center justify-between px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              <span>Change Password </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 rtl:-scale-x-100"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
