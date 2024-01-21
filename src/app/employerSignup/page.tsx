"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar2";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { useForm } from "react-hook-form";

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/provider/employerSignup", data);
      console.log("Signup success", response.data);
      toast.success("Signup success");
      router.push("/employerLogin");
    } catch (error: any) {
      console.log("Signup failed", error.response.data.error);
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <Toaster />
      <section className="bg-white dark:bg-gray-900">
        <div className="flex justify-center items-stretch min-h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/5 items-center
        bg-[url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')]
        "
          ></div>

          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="my-6 text-4xl  font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                {loading ? (
                  <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400 justify-center text-center"></div>
                ) : (
                  "Create New Employer Account"
                )}
              </h1>

              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Let’s get you all set up so you can verify your personal account
                and begin setting up your profile.
              </p>

              {/* <div className="mt-6">
                    <h1 className="text-gray-500 dark:text-gray-300">Select type of account</h1>

                    <div className="mt-3 md:flex md:items-center md:-mx-2">
                        <button className="flex justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-lg md:w-auto md:mx-2 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>

                            <span className="mx-2">
                                client
                            </span>
                        </button>

                        <button className="flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-lg md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>

                            <span className="mx-2">
                                worker
                            </span>
                        </button>
                    </div>
                </div> */}
              <form
                method="POST"
                className=" w-full px-4 lg:px-0 mx-auto"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="grid grid-cols-3 gap-4">
                  <div className="pb-2 pt-4">
                    <input
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      type="text"
                      placeholder="First name"
                      {...register("firstName", {
                        required: "Enter First Name",
                        maxLength: {
                          value: 20,
                          message: "Enter First Name",
                        },
                      })}
                    />
                  </div>
                  <div className="pb-2 pt-4">
                    <input
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      type="text"
                      placeholder="middleName"
                      {...register("middleName", {})}
                    />
                  </div>
                  <div className="pb-2 pt-4">
                    <input
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      type="text"
                      placeholder="Last name"
                      {...register("lastName", {
                        required: "Enter Last Name",
                        maxLength: {
                          value: 20,
                          message: "Enter Last Name",
                        },
                      })}
                    />
                  </div>
                </div>
                <span
                  className={
                    errors.firstName
                      ? "justify-between pb-1 flex flex-row"
                      : "justify-end pb-1 flex flex-row"
                  }
                >
                  {errors.firstName && (
                    <p className="bg-red-500 text-white  rounded w-1/3">
                      {errors.firstName.message?.toString()}
                    </p>
                  )}
                  {errors.lastName && (
                    <p className="bg-red-500 text-white  rounded w-1/3">
                      {errors.lastName.message?.toString()}
                    </p>
                  )}
                </span>

                <div className="grid grid-cols-2 gap-4">
                  <div className="pb-2 pt-4">
                    <input
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      type="email"
                      placeholder="Email"
                      {...register("email", {
                        required: "Enter valid email",
                        pattern: {
                          value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/i,
                          message: "Enter a valid email",
                        },
                      })}
                    />
                  </div>
                  <div className="pb-2 pt-4">
                    <input
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      type="tel"
                      placeholder="Mobile number"
                      {...register("mobile", {
                        required: "Enter mobile number",
                        validate: {
                          value: (value) => value.length === 10,
                        },
                        pattern: {
                          value: /^[6-9]\d{9}$/i,
                          message: "Enter a valid 10 digit mobile number",
                        },
                      })}
                    />
                  </div>
                </div>
                <span
                  className={
                    errors.email
                      ? "justify-between pb-1 flex flex-row"
                      : "justify-end pb-1 flex flex-row"
                  }
                >
                  {errors.email && (
                    <p className="bg-red-500 text-white  rounded w-1/3">
                      {errors.email.message?.toString()}
                    </p>
                  )}
                  {errors.mobile && (
                    <p className="bg-red-500 text-white  rounded w-1/3">
                      {errors.mobile.message?.toString()}
                    </p>
                  )}
                </span>

                <div className="grid grid-cols-2 gap-4">
                  <div className="pb-2 pt-4">
                    <input
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
                          message:
                            "Password should be greater than 8 characters",
                        },
                      })}
                    />
                  </div>
                  <div className="pb-2 pt-4">
                    <input
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
                          message:
                            "Password should be greater than 8 characters",
                        },
                      })}
                    />
                  </div>
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

                {/* <div className="px-4 pb-2 pt-4">
                <input
                  type="submit"
                  className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none
                 "
                />
              </div> */}
                <button
                  type="submit"
                  className="flex items-center justify-between px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  <span>Sign Up </span>

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
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
