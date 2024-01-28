/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";

import axios from "axios";
import { useRouter } from "next/navigation";

// Components
import Loader from "@/components/Loader"

const Page = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchItem, setSearchItem] = useState("frontend developer")
  const [queryList, setQueryList] = useState({
    query: searchItem,
    page: 1,
    num_pages: "1",
  });

  const endpoint = "search";

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/hook/getJob", {
        endpoint , queryList,
      });
      setData(response.data.data);
      setLoading(false);
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const prevButton = () => {
    if (queryList.page > 1) {
      setQueryList({
        ...queryList,
        page: queryList.page - 1,
      });
    }
  };

  const nextButton = () => {
    if (queryList.page < 5) {
      setQueryList({
        ...queryList,
        page: queryList.page + 1,
      });
    }
  };

  const searchButton = async(e:any) => {
    console.log(searchItem)
    e.preventDefault();
    setQueryList({
      ...queryList,
      query: searchItem
    })
    setLoading(true);
    fetchData();
  }

  const detailPage = async(id:any) => {
    router.push(`/companydetails/${id}`);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [queryList]);
  
  return (
    <>
      {/* Search bar start */}
      <div className="mx-auto max-w-7xl sm:px-6 my-4 lg:px-8">
        <div className="relative isolate overflow-hidden  px-6  text-center sm:px-16 sm:shadow-sm dark:bg-transparent">
          <p className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
            Didn't find Job you were looking for?
          </p>
         
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
                  placeholder="Search by Job Title"
                  value={searchItem}
                  onChange={(e) => setSearchItem(e.target.value)}
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

        </div>
      </div>
      {/* form ends */}
      <div className="min-h-full">
        <div className="m-5">
          {loading ? (
           <Loader />
          ) : (
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
              {data.map((item: any) => {
                return (
                  <div key={item.job_id} className=" m-5 shadow-2xl" onClick={() => detailPage(item.job_id)}>
                    <div
                      className="flex flex-col h-64 max-w-lg p-6 space-y-6 overflow-hidden rounded-lg  capitalize shadow-2xl bg-gray-50 text-gray-800 
                  dark:bg-gray-600 dark:text-white
                  "
                    >
                      <div className="flex space-x-4 w-72">
                        <img
                          alt="logo"
                          src={item.employer_logo}
                          className="object-cover w-12 h-12 rounded-full shadow bg-gray-500"
                        />
                        <div className="flex flex-col space-y-1">
                          <a
                            rel="noopener noreferrer"
                            href="#"
                            className="text-sm font-semibold"
                          >
                            {item.employer_name}
                          </a>
                          {/* <span className="text-xs text-gray-600">
                         4 hours ago
                        </span> */}
                        </div>
                      </div>
                      <div>
                        <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-700 text-lg font-bold tracking-widest mb-2">
                          ROLE: {item.job_title}
                        </span>

                        <h2 className="mb-1 text-xl font-semibold">
                          Location:{" "}
                          {item.job_city ? item.job_city : item.job_country}
                        </h2>

                        <p className="mt-1 leading-relaxed font-medium">
                          Salary:₹
                          {item.job_max_salary
                            ? item.job_max_salary
                            : "Not Disclosed"}
                        </p>

                        
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex justify-center items-center space-y-2 text-xs sm:space-y-0 sm:space-x-3 sm:flex">
          <span className="block">Page {queryList.page} of 5</span>
          <div className="space-x-1">
            <button
              title="previous"
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow
            disabled:text-gray-300 disabled:cursor-not-allowed"
              onClick={() => prevButton()}
              disabled={queryList.page === 1}
            >
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              title="next"
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow disabled:text-gray-300 disabled:cursor-not-allowed"
              onClick={() => nextButton()}
              disabled={queryList.page === 5}
            >
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
