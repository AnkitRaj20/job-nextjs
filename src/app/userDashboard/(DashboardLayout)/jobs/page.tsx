"use client"
import React, { useEffect,useState } from 'react';
import postedJob from "@/models/postJobModels";
import { connect } from '@/dbConfig/dbConfig';
import axios from 'axios';
import Link from 'next/link';

connect();


const page = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([])

 
  const fetchData = async () => {
    
    try {
      const response = await axios.get("/api/users/getJob");
      console.log("Success", response.data.data);
     
      setData(response.data.data);
    
    } catch (error: any) {
      console.log(error.response.data.error);
      // toast.error(error.response.data.error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  

  const searchButton = async (e:any) => {
    e.preventDefault();
    console.log("search::"+search);
    try {
      if(search === ""){
        fetchData()
        return
      }
      const response = await axios.post("/api/users/getJobByTitle", { role: search });
      console.log("Success", response.data.data);
     
      setData(response.data.data);
    
    } catch (error: any) {
      console.log(error.response.data.error);
      // toast.error(error.response.data.error);
    }
  } 


  return (
<div className='bg-white'>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Find jobs that are suitable for you</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>

    
<form>   
    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by Title" 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        required />
        <button onClick={searchButton} type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>


    {
      data.length >0 ? <div className="flex flex-wrap -m-4">
      {
        
        data.map((item:any) => {
          return(
      
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg hover:shadow-2xl m-4 ">
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
        <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">OOps.Looks like There is no job right now.</h1>
        
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