"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import avatar from "../../../../../../public/images/avatar/avatar5.png";

const Page = ({ params }: any) => {
  const [data, setData] = useState({
    employerId: "",
    employerName: "",
    role: "",
    location: "",
    jobType: "",
    education: "",
    experience: "",
    english: "",
    salary: "",
    mobile: "",
  });
  const [loading, setLoading] = useState(false);

  const fetchData = async (id: any) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/fullJobDetails", {
        _id: id,
      });
      // console.log(response.data.data);
      setLoading(false);
      setData({
        employerId: response.data.data.employerId,
        employerName: response.data.data.employerName,
        role: response.data.data.role,
        location: response.data.data.location,
        jobType: response.data.data.jobType,
        education: response.data.data.education,
        experience: response.data.data.experience,
        english: response.data.data.english,
        salary: response.data.data.salary,
        mobile: response.data.data.mobile,
      });
    } catch (error: any) {
      console.log(error.response.data.error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white">
            Job details for you
          </h1>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 dark:text-white">
          Embark on your job search journey with a single click on our
          user-friendly job website. Explore diverse listings matching your
          skills, opening doors to exciting career opportunities. Your dream job
          awaits; discover it today!.
        </p>
      </div>
      {loading ? (
        <div
          aria-label="Loading..."
          role="status"
          className="flex items-center space-x-2"
        >
          <svg
            className="h-20 w-20 animate-spin stroke-gray-500"
            viewBox="0 0 256 256"
          >
            <line
              x1="128"
              y1="32"
              x2="128"
              y2="64"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="195.9"
              y1="60.1"
              x2="173.3"
              y2="82.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="224"
              y1="128"
              x2="192"
              y2="128"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="195.9"
              y1="195.9"
              x2="173.3"
              y2="173.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="128"
              y1="224"
              x2="128"
              y2="192"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="60.1"
              y1="195.9"
              x2="82.7"
              y2="173.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="32"
              y1="128"
              x2="64"
              y2="128"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="60.1"
              y1="60.1"
              x2="82.7"
              y2="82.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
          </svg>
          <span className="text-4xl font-medium text-gray-500">Loading...</span>
        </div>
      ) : data.employerId ? (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div className="h-72 p-5 rounded-lg  shadow-lg dark:bg-dark">
            {/* User */}
            <div>
              <Image
                src={avatar}
                alt="avatar"
                className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
              />

              <div className="space-y-4 text-center divide-y dark:divide-gray-700">
                <div className="my-2 space-y-1">
                  <h2 className="text-xl font-semibold sm:text-2xl">
                    {data.employerName}
                  </h2>
                  <p className="px-5 text-xs sm:text-base dark:text-gray-400">
                    {data.location}
                  </p>
                </div>
                <div className="flex justify-center pt-2 space-x-4 align-center">
                  {data.mobile}
                </div>
              </div>
            </div>
          </div>
          <div className="h-32 rounded-lg  lg:col-span-2">
            {/* Details */}
            <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
              <dl className="-my-3 divide-y divide-gray-100 text-sm">
                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 dark:even:bg-dark sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900 dark:text-gray-200">
                    Role
                  </dt>
                  <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                    {data.role}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 dark:even:bg-dark sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900 dark:text-gray-200">
                    Location
                  </dt>
                  <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                    {data.location}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 dark:even:bg-dark sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900 dark:text-gray-200">
                    Job Type
                  </dt>
                  <dd className="text-gray-700 dark:text-gray-200 sm:col-span-2">
                    {data.jobType}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 dark:even:bg-dark sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900 dark:text-gray-200">
                    Education
                  </dt>
                  <dd className="text-gray-700 dark:text-gray-200 sm:col-span-2">
                    {data.education}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 dark:even:bg-dark sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900 dark:text-gray-200">
                    Experience
                  </dt>
                  <dd className="text-gray-700 dark:text-gray-200 sm:col-span-2">
                    {data.experience}
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 dark:even:bg-dark sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900 dark:text-gray-200">
                    English
                  </dt>
                  <dd className="text-gray-700 dark:text-gray-200 sm:col-span-2">
                    {data.english}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 dark:even:bg-dark sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900 dark:text-gray-200">
                    Salary
                  </dt>
                  <dd className="text-gray-700 dark:text-gray-200 sm:col-span-2">
                    Rs. {data.salary}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 dark:even:bg-dark sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900 dark:text-gray-200">
                    Contact Information
                  </dt>
                  <dd className="text-gray-700 dark:text-gray-200 sm:col-span-2">
                    {data.mobile}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      ) : (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
                OOps.Looks like no such job.
              </h1>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Page;
