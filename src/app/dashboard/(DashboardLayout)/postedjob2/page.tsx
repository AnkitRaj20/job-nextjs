"use client";
import React, { useEffect, useState } from "react";
import { connect } from "@/dbConfig/dbConfig";
import axios from "axios";
import { IconTrash, IconPencil } from "@tabler/icons-react";

connect();

const page = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("")
  const [data, setData] = useState([]);

  const getUserDetails = async () => {
    const response = await axios.get("/api/users/userData");
    console.log(response.data.data);
    setId(response.data.data._id);
    setName(response.data.data.firstName+" "+response.data.data.middleName+" "+response.data.data.lastName)
  };
  console.log(data);

  const fetchData = async () => {
    console.log("id::" + id);
    try {
      const response = await axios.post("/api/users/getPostedJobData", {
        _id: id,
      });
      console.log("Success", response.data.data);
      setData(response.data.data);
    } catch (error: any) {
      console.log(error.response.data.error);
      // toast.error(error.response.data.error);
    }
  };
  useEffect(() => {
    getUserDetails();
  }, []);

  useEffect(() => {
    fetchData();
  }, [id]);
  
  

  const deleteIcon = async (id: any) => {
    if (confirm("Are you sure you want to delete this item?" + id) == true) {
      console.log("yes");
      try {
        const response = await axios.post("/api/users/deletePostedJob", {
          _id: id,
        });
        console.log("Success", response.data);
        fetchData();
      } catch (error: any) {
        console.log(error.response.data.error);
        // toast.error(error.response.data.error);
      }
    } else {
      console.log("You canceled!");
    }
  };

   // Update the profile
   const update = async () => {
    try {
      const response = await axios.post("/api/users/updatePostedJobData", { data });
      console.log(response);
    } catch (error: any) {
      console.log(error.response.data.error);
    }
  };
  return (
    <div className="bg-white">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Your Job Posted
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
          {data.length > 0 ? (
            <div className="flex flex-wrap -m-4">
              {data.map((item: any) => {
                return (
                  <div key={item._id} className="m-5 shadow-2xl">
                    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-2xl bg-gray-50 text-gray-800 ">
                      <div className="flex space-x-4">
                        <img
                          alt=""
                          src="https://source.unsplash.com/100x100/?portrait"
                          className="object-cover w-12 h-12 rounded-full shadow bg-gray-500"
                        />
                        <div className="flex flex-col space-y-1">
                          <a
                            rel="noopener noreferrer"
                            href="#"
                            className="text-sm font-semibold"
                          >
                            {name}
                          </a>
                          {/* <span className="text-xs text-gray-600">
                           4 hours ago
                          </span> */}
                        </div>
                      </div>
                      <div>
                        {/* <img src="https://source.unsplash.com/random/100x100/?5" alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" /> */}

                        <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-700 text-lg font-bold tracking-widest mb-2">
                          ROLE: {item.role}{" "}
                        </span>

                        <h2 className="mb-1 text-xl font-semibold">
                          Location: {item.location}
                        </h2>

                        <p className="font-semibold text-gray-600">
                          Job Type: {item.jobType}
                        </p>

                        <p className="leading-relaxed text-base font-medium">
                          Education:{item.education}{" "}
                        </p>
                        <p className="leading-relaxed  font-medium">
                          Experience:{item.experience}{" "}
                        </p>
                        <p className="mt-1 leading-relaxed font-medium">
                          Salary:₹{item.salary}
                        </p>
                        {/* <p className="text-sm text-gray-600">Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud atqui apeirian...</p> */}

                        <div className="flex items-center flex-wrap ">
                          <a className="text-indigo-600 inline-flex items-center mt-2 md:mb-2 lg:mb-0 font-medium">
                            Contact Here
                            <svg
                              className="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                            </svg>
                            <p className="leading-relaxed text-base">
                              {item.mobile}{" "}
                            </p>
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-wrap justify-between">
                        <div className="space-x-2">
                          <button
                            aria-label="Bookmark this post"
                            type="button"
                            className="p-2 hover:bg-green-600 rounded-full hover:text-white"
                          >
                            <IconPencil/>
                          </button>
                        </div>
                        <div className="flex space-x-2 text-sm text-gray-600">
                          <button
                            aria-label="Bookmark this post"
                            type="button"
                            className="p-2 hover:bg-red-600 rounded-full hover:text-white"
                            
                          >
                            <IconTrash onClick={() => deleteIcon(item._id)} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                  <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
                    OOps.Looks like You did not posted anyJob.
                  </h1>

                  <a href="./postJob">
                    <button className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
                      Post Now
                    </button>
                  </a>
                </div>
              </div>
            </section>
          )}
        </div>
      </section>
    </div>
  );
};

export default page;
