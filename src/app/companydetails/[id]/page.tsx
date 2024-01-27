/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar2";
import axios from "axios";
import { useEffect, useState } from "react";

// Components
import Loader from "@/components/Loader"

const Page = ({ params }: any) => {
  const encodedString = params.id;
  const decodedValue = decodeURIComponent(encodedString);
  const [data, setData] = useState({
    job_posted_at_datetime_utc: "",
    employer_logo: "",
    job_title: "",
    job_id: "",
    employer_name: "",
    job_publisher: "",
    job_location: "",
    job_description: "",
    job_type: "",
    job_category: "",
    job_salary: "",
    job_employment_type: "",
    job_city: "",
    job_state: "",
    job_country: "",
    experience: ""
  });
  const [remoteJob, setRemoteJob] = useState(true);
  const [applyOptions, setapplyOptions] = useState([]);
  const [requiredSkills, setrequiredSkills] = useState([]);
  const [requiredEducation, setrequiredEducation] = useState(
    {
        high_school: false,
        Inter: false,
        bachelors_degree: false,
        postgraduate_degree: false,
        professional_certification:false
    }
  );
  const [loading, setLoading] = useState(true);
  const [queryList, setQueryList] = useState({
    job_id: decodedValue,
  });

  const endpoint = "job-details";

  const getCompleteCompanyDetails = async (id: any) => {
    setQueryList(id);
    setLoading(true);
    try {
      const response = await axios.post("/api/hook/getCompleteCompanyDetails", {
        endpoint,
        queryList,
      });
      setData({
        ...data,
        job_posted_at_datetime_utc:
          response.data.data[0].job_posted_at_datetime_utc,
        employer_logo: response.data.data[0].employer_logo,
        job_title: response.data.data[0].job_title,
        job_id: response.data.data[0].job_id,
        employer_name: response.data.data[0].employer_name,
        job_publisher: response.data.data[0].job_publisher,
        job_location:
          response.data.data[0].job_city +
          " " +
          response.data.data[0].job_state +
          " " +
          response.data.data[0].job_country,
        job_description: response.data.data[0].job_description,
        job_type: response.data.data[0].job_type,
        job_category: response.data.data[0].job_category,
        job_salary: response.data.data[0].job_min_salary,
        job_employment_type: response.data.data[0].job_employment_type,
        experience: response.data.data[0].job_required_experience.required_experience_in_months
      });
      setrequiredEducation({
        high_school: response.data.data[0].job_required_education.high_school,
        Inter: response.data.data[0].job_required_education.associates_degree,
        bachelors_degree: response.data.data[0].job_required_education.bachelors_degree,
        postgraduate_degree: response.data.data[0].job_required_education.postgraduate_degree,
        professional_certification:response.data.data[0].job_required_education.professional_certification
      })
      setRemoteJob(response.data.data[0].job_is_remote);
      setapplyOptions(response.data.data[0].apply_options);
      setrequiredSkills(response.data.data[0].job_required_skills);
      
      console.log(response.data.data);
      setLoading(false);
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCompleteCompanyDetails(decodedValue);
  }, []);

  const utcDate = data.job_posted_at_datetime_utc;
  const indianDate = new Date(utcDate.toLocaleString());

  // Format the date for display
  const dateOptions = {
    year: "numeric" as const,
    month: "numeric" as const,
    day: "numeric" as const,
    hour: "numeric" as const,
    minute: "numeric" as const,
    second: "numeric" as const,
    timeZoneName: "short" as const,
  };

  const formattedIndianDate = indianDate.toLocaleString("en-IN", dateOptions);

  let location = data.job_location.replace(/null/g, '');
 
  return (
    <>
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        //    **Grid Start
        <div className="grid grid-cols-1 m-7 gap-4 lg:grid-cols-3 lg:gap-8">
          {/* Part 1 */}
          <div className="rounded-lg  lg:col-span-2">
            {/* card 1 */}
            <article className="rounded-xl bg-white dark:bg-dark p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
              <div className="flex items-start sm:gap-8">
                <div
                  className="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
                  aria-hidden="true"
                >
                  <div className="flex items-center gap-1">
                    <img src={data.employer_logo} alt="logo" />
                  </div>
                </div>

                <div>
                  <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
                    {data.job_title}
                  </strong>

                  <h3 className="mt-4 text-lg font-medium sm:text-xl ">
                    <a href="#" className="hover:underline">
                      {data.employer_name}
                    </a>
                  </h3>

                  <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                    Location: {location} | Salary : ₹{" "}
                    {data.job_salary ? data.job_salary : "Not Disclosed"}
                  </p>
                  <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                    Experiece (in months): {data.experience ? data.experience  : "No experience required"}
                  </p>

                  <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-300">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>

                      <p className="text-xs font-medium">
                        {" "}
                        Posted : {formattedIndianDate}{" "}
                      </p>
                    </div>

                    <span className="hidden sm:block" aria-hidden="true">
                      &middot;
                    </span>

                    <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0 dark:text-gray-400">
                      job_publisher :-{" "}
                      <a href="#" className="underline hover:text-gray-700">
                        {data.job_publisher}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* card 2 */}
           
             {/*  //* Description */}
            <article className="mt-5 rounded-xl bg-white dark:bg-dark p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
              <div className="flex items-start sm:gap-8">
                <div>
                  <h3 className="text-lg font-medium sm:text-xl ">
                    <p className="hover:underline">Job description</p>
                  </h3>

                  <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                    {data.job_description}
                  </p>
                </div>
              </div>

             {/*  //* Key Points */}
              <div className="flex mt-3 items-start sm:gap-8">
                <div>
                  <h3 className="text-lg font-medium sm:text-xl ">
                    <p className="hover:underline">Key Points</p>
                  </h3>

                  <div className="mt-1 text-sm text-gray-700 dark:text-gray-300 ml-5">
                    <ul className="list-disc">
                      <li>
                        {" "}
                        <b> Role : </b> {data.job_title}
                      </li>
                      <li>
                        {" "}
                        <b> Employment Type : </b> {data.job_employment_type}
                      </li>
                      <li>
                        {" "}
                        <b> Remote Job : </b> {remoteJob ? "Yes" : "No"}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

               {/*  //* Required Skills */}
              <div className="flex mt-3 items-start sm:gap-8">
                <div>
                  <h3 className="text-lg font-medium sm:text-xl ">
                    <p className="hover:underline">Required Skills</p>
                  </h3>

                  <div className="mt-1 text-sm text-gray-700 dark:text-gray-300 ml-5">
                    
                    <ul className="list-disc">
                    {
                        requiredSkills ? requiredSkills.map((skill: any, index: any) => {
                          return (
                            <li key={index}>
                              {skill}
                            </li>
                          );
                        }) : "No skills required"
  
                    }
                    </ul>
                  </div>
                </div>
              </div>

               {/*  //* Required Education */}
              <div className="flex mt-3 items-start sm:gap-8">
                <div>
                  <h3 className="text-lg font-medium sm:text-xl ">
                    <p className="hover:underline">Education</p>
                  </h3>

                  <div className="mt-1 text-sm text-gray-700 dark:text-gray-300 ml-5">
                    
                    <ul className="list-disc">
                        <li>
                            <b>High School :</b> {requiredEducation.high_school ? "Yes" : "No"}
                        </li>
                        <li>
                            <b>Intermediate/12th :</b> {requiredEducation.Inter ? "Yes" : "No"}
                        </li>
                        <li>
                            <b>Bachelors Degree :</b> {requiredEducation.bachelors_degree ? "Yes" : "No"}
                        </li>
                        <li>
                            <b>Masters Degree :</b> {requiredEducation.postgraduate_degree ? "Yes" : "No"}
                        </li>
                        <li>
                            <b>Professional Certifications :</b> {requiredEducation.postgraduate_degree ? "Yes" : "No"}
                        </li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Part 2 */}
          <div className=" rounded-lg ">
            {/* Card 1 */}
            <article className="rounded-xl bg-white dark:bg-dark p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
              <div className="flex items-start sm:gap-8">
                <div>
                  <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
                    Apply Links
                  </strong>

                  {applyOptions.length > 0 ? (
                    <ul className="mt-4 list-disc">
                      {applyOptions.map((applyOption: any, index:any) => (
                        <li key={index} className="flex flex-row justify-between m-4">
                          <h3 className="mt-4 text-lg font-medium sm:text-xl ">
                            <p className="hover:underline">
                              {applyOption.publisher}
                            </p>
                          </h3>
                          <span>
                          <a
                             className="inline-block rounded bg-indigo-600 ml-3  px-3 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                            target="_blank"
                            href= {applyOption.apply_link}
                          >
                            

                            <span className="text-sm font-medium transition-all group-hover:me-4">
                              {" "}
                              Apply Now{" "}
                            </span>
                          </a>
                          </span>
                         
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
                      No apply links available
                    </p>
                  )}
                </div>
              </div>
            </article>

          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Page;
