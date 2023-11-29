"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Page() {
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    mobile: 0,
    gender: "male",
    password: "",
    confirmPassword: "",
    address: "",
  });

  const onSignup = async (e: any) => {
    e.preventDefault();
    // console.log(user)
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      toast.success("Signup success");
      router.push("/login3");
    } catch (error: any) {
      console.log("Signup failed", error.response.data.error);
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.password !== user.confirmPassword) {
      setPasswordError("Passwords do not match");
    //   toast('Here is your toast.');
      setButtonDisabled(true);
      return;
    }
    if(user.firstName.length <3 || user.firstName.length > 20){
        setButtonDisabled(true);
        return;
      }
    if(user.lastName.length <3 || user.lastName.length > 20){
        setButtonDisabled(true);
        return;
      }
    if(user.email.length <3 ){ 
        setButtonDisabled(true);
        return;
      }
     
    
    
  }, [user]);

  useEffect(() => {
    if (user.password.length > 0 && user.confirmPassword.length > 0) {
      if (user.password !== user.confirmPassword) {
        setPasswordError("Passwords do not match");
        setButtonDisabled(true);
      } else {
        setPasswordError("");
        setButtonDisabled(false);
      }
    }
  }, [user.password, user.confirmPassword]);

  return (
    <div>
      <Navbar />
        <Toaster />
      <section className="min-h-screen flex items-stretch text-white">
        <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center bg-[url('https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80')]">
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          <div className="w-full px-24 z-10">
            <h1 className="text-5xl font-bold text-left tracking-wide">
              Want to Hire?
            </h1>
            <p className="text-3xl my-4">
              Find the best people for your job
            </p>
           
            <Link href="/employerSignup" type="button" className="
            bg-white px-5 py-3
            text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-lg  text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 w-96">Post a job</Link>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-[#161616]">
          <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center bg-[url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)]">
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          </div>
          <div className="w-full py-6 z-20">
            <h1 className="my-6 text-4xl">
              {loading ? "Processing" : "Create New Account"}
            </h1>
            <form action="" method="POST" className=" w-full px-4 lg:px-0 mx-auto">
              <div className="grid grid-cols-3 gap-4">
                <div className="pb-2 pt-4">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    value={user.firstName}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        firstName: e.target.value,
                      })
                    }
                    className="block w-full p-4 text-lg rounded-sm bg-black"
                  />
                </div>
                <div className="pb-2 pt-4">
                  <input
                    type="text"
                    name="middleName"
                    id="middleName"
                    placeholder="Middle Name"
                    value={user.middleName}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        middleName: e.target.value,
                      })
                    }
                    className="block w-full p-4 text-lg rounded-sm bg-black"
                  />
                </div>
                <div className="pb-2 pt-4">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    value={user.lastName}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        lastName: e.target.value,
                      })
                    }
                    className="block w-full p-4 text-lg rounded-sm bg-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="pb-2 pt-4">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        email: e.target.value,
                      })
                    }
                    className="block w-full p-4 text-lg rounded-sm bg-black "
                  />
                </div>
                <div className="pb-2 pt-4">
                  <input
                    type="number"
                    name="mobile"
                    id="mobile"
                    placeholder="Mobile Number"
                    value={user.mobile}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        mobile: e.target.value,
                      })
                    }
                    className="block w-full p-4 text-lg rounded-sm bg-black"
                  />
                </div>
              </div>

              <div>
                <div className="main flex  rounded-full overflow-hidden m-4 select-none">
                  <div className="title py-3 my-auto px-5 bg-blue-500 text-white text-sm font-semibold mr-3">
                    Gender
                  </div>
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      className="my-auto transform scale-125"
                      type="radio"
                      name="gender"
                      value="male"
                      onChange={(e) =>
                        setUser({
                          ...user,
                          gender: e.target.value,
                        })
                      }
                    />
                    <div className="title px-2">male</div>
                  </label>

                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      className="my-auto transform scale-125"
                      type="radio"
                      name="gender"
                      value="female"
                      onChange={(e) =>
                        setUser({
                          ...user,
                          gender: e.target.value,
                        })
                      }
                    />
                    <div className="title px-2">female</div>
                  </label>

                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      className="my-auto transform scale-125"
                      type="radio"
                      name="gender"
                      value="others"
                      onChange={(e) =>
                        setUser({
                          ...user,
                          gender: e.target.value,
                        })
                      }
                    />
                    <div className="title px-2">Others</div>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-start mb-2 text-xl font-medium ">
                  Your Address
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="block p-2.5 w-full text-sm   bg-black rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={user.address}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      address: e.target.value,
                    })
                  }
                  placeholder="Write your address here..."
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="pb-2 pt-4">
                  <input
                    className="block w-full p-4 text-lg rounded-sm bg-black"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        password: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="pb-2 pt-4">
                  <input
                    className="block w-full p-4 text-lg rounded-sm bg-black"
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={user.confirmPassword}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        confirmPassword: e.target.value,
                      })
                    }
                    placeholder="Confirm Password"
                  />
                </div>
              </div>

              <div className="px-4 pb-2 pt-4">
                <button
                  onClick={onSignup}
                  className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none
                 
                  disabled:opacity-50 
                 
                  disabled:cursor-not-allowed
                  "
                  disabled = {buttonDisabled}
                >
                  sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
