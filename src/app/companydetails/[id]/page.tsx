// /* eslint-disable @next/next/no-img-element */
// /* eslint-disable react-hooks/exhaustive-deps */
// "use client";

// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar2";
// import axios from "axios";
// import { useEffect, useState, useCallback } from "react";
// import Loader from "@/components/Loader";

// const Page = ({ params }: any) => {
//   const encodedString = params.id;
//   const decodedValue = decodeURIComponent(encodedString);

//   const [data, setData] = useState<any>({
//     job_posted_at_datetime_utc: "",
//     employer_logo: "",
//     job_title: "",
//     job_id: "",
//     employer_name: "",
//     job_publisher: "",
//     job_location: "",
//     job_description: "",
//     job_type: "",
//     job_category: "",
//     job_salary: "",
//     job_employment_type: "",
//     job_city: "",
//     job_state: "",
//     job_country: "",
//     experience: "",
//   });
//   const [remoteJob, setRemoteJob] = useState<boolean>(true);
//   const [applyOptions, setApplyOptions] = useState<any[]>([]);
//   const [requiredSkills, setRequiredSkills] = useState<any[]>([]);
//   const [requiredEducation, setRequiredEducation] = useState<any>({
//     high_school: false,
//     Inter: false,
//     bachelors_degree: false,
//     postgraduate_degree: false,
//     professional_certification: false,
//   });
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   const endpoint = "job-details";

//   // Fetch job details
//   const getCompleteCompanyDetails = useCallback(async (id: string) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.post("/api/hook/getCompleteCompanyDetails", {
//         endpoint,
//         queryList: { job_id: id },
//       });

//       const jobData = response.data.data[0] || {};

//       if (!jobData) {
//         setError("Job details not found.");
//         return;
//       }

//       setData({
//         job_posted_at_datetime_utc: jobData.job_posted_at_datetime_utc || "",
//         employer_logo: jobData.employer_logo || "",
//         job_title: jobData.job_title || "",
//         job_id: jobData.job_id || "",
//         employer_name: jobData.employer_name || "",
//         job_publisher: jobData.job_publisher || "",
//         job_location: `${jobData.job_city} ${jobData.job_state} ${jobData.job_country}`.replace(/null/g, ""),
//         job_description: jobData.job_description || "No description available",
//         job_type: jobData.job_type || "Not specified",
//         job_category: jobData.job_category || "Not specified",
//         job_salary: jobData.job_min_salary || "Not disclosed",
//         job_employment_type: jobData.job_employment_type || "Not specified",
//         experience: jobData.job_required_experience?.required_experience_in_months || "Not specified",
//       });

//       setRequiredEducation({
//         high_school: jobData.job_required_education?.high_school || false,
//         Inter: jobData.job_required_education?.associates_degree || false,
//         bachelors_degree: jobData.job_required_education?.bachelors_degree || false,
//         postgraduate_degree: jobData.job_required_education?.postgraduate_degree || false,
//         professional_certification: jobData.job_required_education?.professional_certification || false,
//       });

//       setRemoteJob(jobData.job_is_remote || false);
//       setApplyOptions(jobData.apply_options || []);
//       setRequiredSkills(jobData.job_required_skills || []);

//     } catch (error: any) {
//       setError(error.message || "Failed to fetch job details.");
//     } finally {
//       setLoading(false);
//     }
//   }, [endpoint]);

//   useEffect(() => {
//     if (decodedValue) {
//       getCompleteCompanyDetails(decodedValue);
//     }
//   }, [decodedValue, getCompleteCompanyDetails]);

//   // Convert UTC date to Indian Standard Time (IST)
//   const utcDate = data.job_posted_at_datetime_utc;
//   const indianDate = new Date(utcDate);
//   const formattedIndianDate = indianDate.toLocaleString("en-IN", {
//     year: "numeric",
//     month: "numeric",
//     day: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric",
//     timeZoneName: "short",
//   });

//   return (
//     <>
//       <Navbar />
//       {loading ? (
//         <Loader />
//       ) : error ? (
//         <div className="text-center text-red-500">{error}</div>
//       ) : (
//         <div className="grid grid-cols-1 m-7 gap-4 lg:grid-cols-3 lg:gap-8">
//           {/* Part 1 */}
//           <div className="rounded-lg lg:col-span-2">
//             {/* Job Overview Card */}
//             <article className="rounded-xl bg-white dark:bg-dark p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
//               <div className="flex items-start sm:gap-8">
//                 <div className="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500">
//                   <img src={data.employer_logo} alt="Employer Logo" />
//                 </div>

//                 <div>
//                   <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
//                     {data.job_title}
//                   </strong>

//                   <h3 className="mt-4 text-lg font-medium sm:text-xl">
//                     <a href="#" className="hover:underline">
//                       {data.employer_name}
//                     </a>
//                   </h3>

//                   <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
//                     Location: {data.job_location} | Salary: ₹ {data.job_salary}
//                   </p>
//                   <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
//                     Experience: {data.experience}
//                   </p>

//                   <div className="mt-4 sm:flex sm:items-center sm:gap-2">
//                     <div className="flex items-center gap-1 text-gray-500 dark:text-gray-300">
//                       <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                       </svg>
//                       <p className="text-xs font-medium">Posted: {formattedIndianDate}</p>
//                     </div>
//                     <span className="hidden sm:block" aria-hidden="true"> &middot; </span>
//                     <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0 dark:text-gray-400">
//                       Publisher: <a href="#" className="underline hover:text-gray-700">{data.job_publisher}</a>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </article>

//             {/* Job Description Card */}
//             <article className="mt-5 rounded-xl bg-white dark:bg-dark p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
//               <h3 className="text-lg font-medium sm:text-xl">Job Description</h3>
//               <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{data.job_description}</p>
//             </article>

//             {/* Key Points Card */}
//             <article className="mt-5 rounded-xl bg-white dark:bg-dark p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
//               <h3 className="text-lg font-medium sm:text-xl">Key Points</h3>
//               <ul className="mt-1 text-sm text-gray-700 dark:text-gray-300 ml-5 list-disc">
//                 <li><b>Role:</b> {data.job_title}</li>
//                 <li><b>Employment Type:</b> {data.job_employment_type}</li>
//                 <li><b>Remote Job:</b> {remoteJob ? "Yes" : "No"}</li>
//               </ul>
//             </article>

//             {/* Required Skills */}
//             <article className="mt-5 rounded-xl bg-white dark:bg-dark p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
//               <h3 className="text-lg font-medium sm:text-xl">Required Skills</h3>
//               <ul className="mt-1 text-sm text-gray-700 dark:text-gray-300 ml-5 list-disc">
//                 {requiredSkills.length > 0 ? requiredSkills.map((skill, index) => <li key={index}>{skill}</li>) : "No skills required"}
//               </ul>
//             </article>

//             {/* Education Requirements */}
//             <article className="mt-5 rounded-xl bg-white dark:bg-dark p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
//               <h3 className="text-lg font-medium sm:text-xl">Education Requirements</h3>
//               <ul className="mt-1 text-sm text-gray-700 dark:text-gray-300 ml-5 list-disc">
//                 <li><b>High School:</b> {requiredEducation.high_school ? "Yes" : "No"}</li>
//                 <li><b>Intermediate/12th:</b> {requiredEducation.Inter ? "Yes" : "No"}</li>
//                 <li><b>Bachelor's Degree:</b> {requiredEducation.bachelors_degree ? "Yes" : "No"}</li>
//                 <li><b>Master's Degree:</b> {requiredEducation.postgraduate_degree ? "Yes" : "No"}</li>
//                 <li><b>Professional Certifications:</b> {requiredEducation.professional_certification ? "Yes" : "No"}</li>
//               </ul>
//             </article>
//           </div>

//           {/* Apply Links */}
//           <div className="rounded-lg">
//             <article className="rounded-xl bg-white dark:bg-dark p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
//               <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
//                 Apply Links
//               </strong>
//               {applyOptions.length > 0 ? (
//                 <ul className="mt-4 list-disc">
//                   {applyOptions.map((applyOption, index) => (
//                     <li key={index} className="flex flex-row justify-between m-4">
//                       <h3 className="mt-4 text-lg font-medium sm:text-xl">
//                         <a href={applyOption.apply_link} target="_blank" rel="noopener noreferrer" className="hover:underline">
//                           {applyOption.publisher}
//                         </a>
//                       </h3>
//                       <a
//                         href={applyOption.apply_link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-block rounded bg-indigo-600 ml-3 px-3 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
//                       >
//                         Apply Now
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">No apply links available</p>
//               )}
//             </article>
//           </div>
//         </div>
//       )}
//       <Footer />
//     </>
//   );
// };

// export default Page;

"use client";
/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar2";
import Loader from "@/components/Loader";
import axios from "axios";
import { useEffect, useState } from "react";

const Page = ({ params }: any) => {
  const jobId = decodeURIComponent(params.id);
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [visibleLinks, setVisibleLinks] = useState(8); // Control how many links to show initially
  const [experience, setExperience] = useState("");

  function extractExperience(jobDescription: String) {
    // Regular expression to find "Experience" line containing "total work"
    const regex =
      /(total work:.*?(\d+\s*year[s]?\s*\(Preferred\))|Experience:.*?\(\d+(\.\d+)?-\d+(\.\d+)?\)\s*years)/;

    const match = jobDescription.match(regex);

    if (match) {
      setExperience(match[0]); // Set the experience state with the matched string
      return match[0]; // Return the full "total work: X years" line
    } else {
      return "Experience section not found or no 'total work' mentioned";
    }
  }

  useEffect(() => {
    const fetchJob = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await axios.post("/api/hook/getCompleteCompanyDetails", {
          endpoint: "job-details",
          queryList: { job_id: jobId },
        });

        if (res.data?.data?.length > 0) {
          setJob(res.data.data[0]);
          extractExperience(res.data.data[0].job_description);
        } else {
          setError("Job not found.");
        }
      } catch (err) {
        setError("Failed to load job. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [jobId]);

  const formatDate = (utc: string) => {
    try {
      return new Date(utc).toLocaleString("en-IN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      });
    } catch {
      return "N/A";
    }
  };

  const location = [job?.job_city, job?.job_state, job?.job_country]
    .filter(Boolean)
    .join(", ");

  const education = job?.job_required_education || {};
  const skills = job?.job_required_skills || [];
  const applyOptions = job?.apply_options || [];

  // Function to handle "Show More" button click
  const handleShowMore = () => {
    setVisibleLinks(applyOptions.length); // Show all links when clicked
  };

  return (
    <>
      <Navbar />

      {loading ? (
        <div className="min-h-screen flex items-center justify-center">
          <Loader />
        </div>
      ) : error ? (
        <div className="min-h-screen text-center text-red-500 mt-10">
          {error}
        </div>
      ) : (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Logo + Role + Company */}
            <div className="bg-white dark:bg-dark p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
              <img
                src={job?.employer_logo || "/default-logo.png"}
                alt="Logo"
                className="w-24 h-24 mb-4 rounded-full object-cover border-4 border-indigo-600"
              />
              <h2 className="text-2xl font-semibold text-indigo-800 dark:text-indigo-400 mb-2">
                {job?.job_title}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                {job?.employer_name}
              </p>
            </div>

            {/* Location / Experience / Date */}
            <div className="bg-white dark:bg-dark p-8 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-400 mb-4">
                Job Info
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  <strong>Location:</strong> {location || "N/A"}
                </p>
                <p>
                  {job?.job_required_experience
                    ?.required_experience_in_months || experience ? (
                    <>
                      <strong>Experience:</strong>{" "}
                      {job?.job_required_experience
                        ?.required_experience_in_months ||
                        experience
                        ?.replace(/Experience:/, "")
                        ?.replace(/ total work:/, "")
                        .trim() ||
                        "No experience required"}
                    </>
                  ) : (
                    "No experience required"
                  )}
                </p>

                <p>
                  <strong>Posted:</strong>{" "}
                  {formatDate(job?.job_posted_at_datetime_utc)}
                </p>
              </div>
            </div>

            {/* Apply Links */}
            <div className="bg-white dark:bg-dark p-8 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-400 mb-4">
                Apply Links
              </h3>
              {applyOptions.length > 0 ? (
                <ul className="text-sm text-indigo-600 list-disc ml-4 space-y-1">
                  {applyOptions
                    .slice(0, visibleLinks)
                    .map((opt: any, idx: number) => (
                      <li key={idx}>
                        <a
                          href={opt.apply_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline dark:text-white hover:text-indigo-900 hover:dark:text-indigo-400"
                        >
                          {opt.publisher}
                        </a>
                      </li>
                    ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">No links available</p>
              )}

              {/* Show More button */}
              {applyOptions.length > visibleLinks && (
                <button
                  onClick={handleShowMore}
                  className="mt-4 text-sm text-indigo-600 hover:underline"
                >
                  Show More
                </button>
              )}
            </div>

            {/* Description */}
            <div className="bg-white dark:bg-dark p-8 rounded-xl shadow-lg col-span-full lg:col-span-3">
              <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-400 mb-4">
                Job Description
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">
                {job?.job_description}
              </p>
            </div>

            {/* Education */}
            {Object.values(education).some((value) => value) && (
              <div className="bg-white dark:bg-dark p-8 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-400 mb-4">
                  Education Requirements
                </h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc ml-4 space-y-1">
                  <li>High School: {education.high_school ? "Yes" : "No"}</li>
                  <li>
                    Intermediate: {education.associates_degree ? "Yes" : "No"}
                  </li>
                  <li>
                    Bachelor's: {education.bachelors_degree ? "Yes" : "No"}
                  </li>
                  <li>
                    Master's: {education.postgraduate_degree ? "Yes" : "No"}
                  </li>
                  <li>
                    Certification:{" "}
                    {education.professional_certification ? "Yes" : "No"}
                  </li>
                </ul>
              </div>
            )}

            {/* Skills */}
            {skills.length > 0 && (
              <div className="bg-white dark:bg-dark p-8 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-400 mb-4">
                  Skills
                </h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc ml-4 space-y-1">
                  {skills.map((skill: string, idx: number) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Page;
