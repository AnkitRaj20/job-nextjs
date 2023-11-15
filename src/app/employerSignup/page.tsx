"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

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
    password: "",
    confirmPassword: "",
    mobile: ""
  });

  const onSignup = async (e: any) => {
    e.preventDefault();
    // console.log(user)
    try {
      setLoading(true);
      const response = await axios.post("/api/users/employerSignup", user);
      console.log("Signup success", response.data);
      toast.success("Signup success");
      router.push("/login");
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
        <Toaster />
      <section className="min-h-screen flex items-stretch text-white">
        <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center bg-[url('https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80')]">
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          <div className="w-full px-24 z-10">
            <h1 className="text-5xl font-bold text-left tracking-wide">
              Keep it special
            </h1>
            <p className="text-3xl my-4">
              Capture your personal memory in unique way, anywhere.
            </p>
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
    </div>
  );
}
