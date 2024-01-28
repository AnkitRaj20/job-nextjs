"use client";
import axios from "axios";
import Image from "next/image";
import  { useEffect, useState } from "react";
import avatar from "../../../../../public/images/avatar/avatar1.jpg"

const Page = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/users/getUserProfile");
      // console.log("Success", response.data.data);
      setData(response.data.data);
    } catch (error: any) {
      console.log(error.response.data.error);
      // toast.error(error.response.data.error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchButton = async (e: any) => {
    e.preventDefault();
    console.log("search::" + search);
    try {
      if (search === "") {
        fetchData();
        return;
      }
      const response = await axios.post("/api/users/getProfileByTitle", {
        role: search,
      });
      // console.log("Success", response.data.data);

      setData(response.data.data);
    } catch (error: any) {
      console.log(error.response.data.error);
      // toast.error(error.response.data.error);
    }
  };

  return (
    <div className="bg-white dark:bg-dark dark:text-white rounded">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white">
                Find profiles that are suitable for you
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 dark:text-white">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>

          <form>
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search by Title"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                required
              />
              <button
                onClick={searchButton}
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>

          {data.length > 0 ? (
            <div className="flex flex-wrap -m-4">
             {data.map((item: any) => {
                return (
                  <div key={item._id} className=" m-5 shadow-2xl">
                    <div className="flex flex-col max-w-lg p-6 space-y-6 space-x-5 overflow-hidden rounded-lg capitalize shadow-2xl bg-gray-50 text-gray-800 dark:bg-gray-600 dark:text-white">
                      <div className="flex space-x-4 w-72">
                        <Image
                        src={avatar}
                        alt="avatar"
                        height={100}
                        width={100}
                        className="object-cover w-12 h-12 rounded-full shadow bg-gray-500"
                        />
                        {/* <img
                          alt=""
                          src="https://source.unsplash.com/100x100/?portrait"
                          
                        /> */}
                        <div className="flex flex-col space-y-1">
                          <a
                            rel="noopener noreferrer"
                            href="#"
                            className="text-sm font-semibold"
                          >
                            {item.userName}
                          </a>
                          {/* <span className="text-xs text-gray-600">
                           4 hours ago
                          </span> */}
                        </div>
                      </div>
                      <div>
                        {/* <img src="https://source.unsplash.com/random/100x100/?5" alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" /> */}

                        <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-700 text-lg font-bold tracking-widest mb-2">
                          ROLE: {item.role}
                        </span>

                        <h2 className="mb-1 text-xl font-semibold">
                          Location: {item.address}
                        </h2>

                        <p className="font-semibold text-gray-600 dark:text-white">
                          Job Type: {item.jobType}
                        </p>

                        <p className="leading-relaxed text-base font-medium">
                          Education:{item.education}
                        </p>
                        <p className="leading-relaxed  font-medium">
                          Experience:{item.experience}
                        </p>
                        <p className="leading-relaxed  font-medium">
                          English:{item.english}
                        </p>
                        <p className="leading-relaxed  font-medium">
                          Gender:{item.gender}
                        </p>
                        <p className="mt-1 leading-relaxed font-medium">
                          Salary:₹{item.salary}
                        </p>

                        <div className="flex items-center flex-wrap ">
                          <a className=" inline-flex items-center mt-2 md:mb-2 lg:mb-0 font-medium space-x-5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              aria-label="Phonenumber"
                              className="w-4 h-4"
                            >
                              <path
                                fill="currentColor"
                                d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
                              ></path>
                            </svg>

                            <p className="leading-relaxed text-base">
                              {item.mobile}
                            </p>
                          </a>
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
                  <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 dark:text-white">
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

export default Page;
