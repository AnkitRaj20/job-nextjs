"use client"
import React, { useEffect,useState } from 'react';
import postedJob from "@/models/postJobModels";
import { connect } from '@/dbConfig/dbConfig';
import axios from 'axios';
import Link from 'next/link';

connect();


const page = () => {
  const [id, setId] = useState("");
  const [data, setData] = useState([])

  const getUserDetails = async () => {
    const response = await axios.get("/api/users/userData");
    console.log(response.data.data._id);
    setId(response.data.data._id);
  };
  console.log(data)

  const fetchData = async () => {
    console.log("id::" + id);
    try {
      const response = await axios.post("/api/users/getPostedJobData", { _id: id });
      console.log("Success", response.data.data);
      // setData({
      //   id: response.data._id,
      //   firstName: response.data.firstName,
      //   middleName: response.data.middleName,
      //   lastName: response.data.lastName,
      //   mobile: response.data.mobile,
      //   email: response.data.email,
      // });
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


  return (
//     <div className='bg-white'>
//       <section className="text-gray-600 body-font">
//   <div className="container px-5 py-24 mx-auto">
//     <div className="flex flex-wrap -m-4">
//     {
//       data.map((item:any) => {
//         return(
//              <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg hover:shadow-2xl m-4 ">
//         <a className="block relative h-48 rounded overflow-hidden">
//         <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest mb-2">ROLE: {item.role} </span>
//           <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
//         </a>
//         <div className="mt-4">
//           <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Job Type: {item.jobType}</h3>
//           <h2 className="text-gray-900 title-font text-lg font-medium">Location: {item.location} </h2>
//           <p className="mt-1">₹{item.salary}</p>
//         </div>
//       </div>
          
//         )
//       })
//     }
//     </div>
//   </div>
// </section>
//     </div>
<div className='bg-white'>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Your Job Posted</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    {
      data.length >0 ? <div className="flex flex-wrap -m-4">
      {
        
        data.map((item:any) => {
          return(
      //       <div className="xl:w-1/3 md:w-1/2 p-4">
      //   <div className="border-4 border-indigo-500/50 p-6 rounded-lg w-full shadow-xl hover:shadow-2xl">
      //     <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Role:{item.role}</h3>
      //     <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Location:{item.location}</h2>
      //     <p className="leading-relaxed text-base">Education:{item.education} </p>
      //     <p className="leading-relaxed text-base">Experience:{item.experience} </p>
      //     <p className="leading-relaxed text-base">Salary:₹{item.salary} </p>
      //   </div>
      // </div>
      <div key={item._id} className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg hover:shadow-2xl m-4 ">
        <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest mb-2">ROLE: {item.role} </span>
         
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Job Type: {item.jobType}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Location: {item.location} </h2>
          <p className="leading-relaxed text-base">Education:{item.education} </p>
          <p className="leading-relaxed text-base">Experience:{item.experience} </p>
          <p className="mt-1">₹{item.salary}</p>

          <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center mt-2 md:mb-2 lg:mb-0">Contact Here
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>

                <p className="leading-relaxed text-base">{item.mobile} </p>
              </a>
            </div>
        </div>
      </div>
          )
        })
      }
      
    </div> 
    : 
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
        <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">OOps.Looks like You did not posted anyJob.</h1>
        <button className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Post Now</button>
      </div>
    </div>
  </section>
    }
    
  </div>
</section>
</div>
  )
}


export default page