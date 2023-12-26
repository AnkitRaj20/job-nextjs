"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import axios from "axios";

export default function App() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data: any) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", data);
      console.log("Signup success", response.data);
      // toast.success("Signup success");
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.response.data.error);
      // toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Navbar />
      <section className="min-h-screen flex items-stretch text-white">
        <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center bg-[url('https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80')]">
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          <div className="w-full px-24 z-10">
            <h1 className="text-5xl font-bold text-left tracking-wide">
              Want to Hire?
            </h1>
            <p className="text-3xl my-4">Find the best people for your job</p>

            <Link
              href="/employerSignup"
              type="button"
              className="
            bg-white px-5 py-3
            text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-lg  text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 w-96"
            >
              Post a job
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-[#161616]">
          <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center bg-[url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)]">
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          </div>
          <div className="w-full py-6 z-20">
            <h1 className="my-6 text-4xl">
          
              {loading ? (
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400 justify-center text-center"></div>
              ) : (
                "Create New Account"
              )}
              
            </h1>
            <div>
              <form
                className=" w-full px-4 lg:px-0 mx-auto"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="grid grid-cols-3 gap-4 pb-4">
                  <input
                    className="block w-full p-4 text-lg rounded-sm bg-black"
                    type="text"
                    placeholder="First name"
                    {...register("firstName", {
                      required: 'Enter First Name',
                      maxLength : {
                        value: 20,
                        message: 'Enter First Name'
                      }
                    })}
                  />
                    
                  <input
                    className="block w-full p-4 text-lg rounded-sm bg-black"
                    type="text"
                    placeholder="middleName"
                    {...register("middleName", {})}
                  />
                  <input
                    className="block w-full p-4 text-lg rounded-sm bg-black"
                    type="text"
                    placeholder="Last name"
                    {...register("lastName", {
                      required: 'Enter Last Name',
                      maxLength : {
                        value: 20,
                        message: 'Enter Last Name'
                      }
                    })}
                  />
                </div>
                <span className={errors.firstName ? "justify-between pb-1 flex flex-row" : "justify-end pb-1 flex flex-row"}>
                {errors.firstName && <p className="bg-red-500 text-white  rounded w-1/3">{errors.firstName.message?.toString()}</p>}
                {errors.lastName && <p className="bg-red-500 text-white  rounded w-1/3">{errors.lastName.message?.toString()}</p>}
                </span>
                
                <div className="grid grid-cols-2 gap-4">
                  <input
                    className="block w-full p-4 text-lg rounded-sm bg-black"
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: 'Enter valid email',
                      pattern: {
                        value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/i,
                        message: 'Enter a valid email' 
                      }
                    })}
                  />
                  <input
                    className="block w-full p-4 text-lg rounded-sm bg-black"
                    type="tel"
                    placeholder="Mobile number"
                    {...register("mobile", {
                      required: 'Enter mobile number',
                      validate:{
                        value: (value) => value.length === 10,
                      },
                      pattern:{
                        value: /^[6-9]\d{9}$/i,
                        message: 'Enter a valid 10 digit mobile number'
                      }
                    })}
                  />
                </div>
                <span className= {errors.email ? "justify-between pb-1 flex flex-row" : "justify-end pb-1 flex flex-row"}>
                {errors.email && <p className="bg-red-500 text-white  rounded w-1/3">{errors.email.message?.toString()}</p>}
                {errors.mobile && <p className="bg-red-500 text-white  rounded w-1/3">{errors.mobile.message?.toString()}</p>}
                </span>

                <div>
                  <div className="main flex  rounded-full overflow-hidden m-4 select-none">
                    <div className="title py-3 my-auto px-5 bg-blue-500 text-white text-sm font-semibold mr-3">
                      Gender
                    </div>
                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        className="my-auto transform scale-125"
                        {...register("gender", { required: 'Enter Gender' })}
                        type="radio"
                        value="male"
                      />
                      <div className="title px-2">male</div>
                    </label>

                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        className="my-auto transform scale-125"
                        {...register("gender", { required: 'Enter Gender' })}
                        type="radio"
                        value="female"
                      />
                      <div className="title px-2">female</div>
                    </label>

                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        className="my-auto transform scale-125"
                        {...register("gender", { required: 'Enter Gender' })}
                        type="radio"
                        value="other"
                      />
                      <div className="title px-2">Others</div>
                    </label>
                  </div><span className="justify-between pb-1 flex flex-row ">
                {errors.gender && <p className="bg-red-500 text-white  rounded w-1/3">{errors.gender.message?.toString()}</p>}
                </span>
                </div>
                

                <div>
                  <label className="block text-start mb-2 text-xl font-medium ">
                    Your Address
                  </label>
                  <textarea
                    rows={4}
                    className="block p-2.5 w-full text-sm   bg-black rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your address here..."
                    {...register("address", { 
                      required: 'Enter Address' })}
                  />
                </div>
                <span className="justify-between pb-1 flex flex-row ">
                {errors.address && <p className="bg-red-500 text-white  rounded w-1/3">{errors.address.message?.toString()}</p>}
                </span>

                <div className="grid grid-cols-2 gap-4 pt-4 pb-4">
                  <input
                    className="block w-full p-4 text-lg rounded-sm bg-black"
                    type="text"
                    placeholder="password"
                    {...register("password", { required: 'Enter Password',
                      maxLength : {
                        value: 12,
                        message: 'Password Should less than 12 characters' 
                      },
                      minLength: {
                        value: 8,
                        message: 'Password should be greater than 8 characters'
                      }
                    })}
                  />
                  <input
                    className="block w-full p-4 text-lg rounded-sm bg-black"
                    type="text"
                    placeholder="Confirm Password"
                    {...register("confirmPassword", {
                      required: 'Enter Confirm Password',
                      maxLength : {
                        value: 12,
                        message: 'Password Should less than 12 characters' 
                      },
                      minLength: {
                        value: 8,
                        message: 'Password should be greater than 8 characters'
                      }
                    })}
                  />
                </div>
                <span className={errors.password ? "justify-between pb-1 flex flex-row" : "justify-end pb-1 flex flex-row"}>
                {errors.password && <p className="bg-red-500 text-white  rounded w-1/3">{errors.password.message?.toString()}</p>}
                {errors.confirmPassword && <p className="bg-red-500 text-white  rounded w-1/3">{errors.confirmPassword.message?.toString()}</p>}
                </span>
                <input
                  type="submit"
                  className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none
                 "
                />
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
