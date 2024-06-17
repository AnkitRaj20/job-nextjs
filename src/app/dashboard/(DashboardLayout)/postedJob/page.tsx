/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { connect } from "@/dbConfig/dbConfig";
import axios from "axios";
import { IconTrash, IconPencil } from "@tabler/icons-react";
import {
  Grid,
  TextField,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  Button,
  Box,
} from "@mui/material";
import avatar from "../../../../../public/images/avatar/avatar1.jpg"


import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

connect();

const Page = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [data, setData]: any = useState([]);
  const [showModal, setShowModal] = useState({
    visible: false,
    id: "",
    employerId: "",
  });
  const [showDeleteModal, setShowDeleteModal] = useState({
    visible: false,
    id: "",
  });
  const [updateData, setUpdateData] = useState({
    id: "",
    role: "",
    location: "",
    education: "",
    experience: "",
    salary: "",
    mobile: "",
    english: "",
    jobType: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const getUserDetails = async () => {
    const response = await axios.get("/api/provider/userData");
    // console.log(response.data.data);
    setId(response.data.data._id);
    setName(
      response.data.data.firstName +
        " " +
        response.data.data.middleName +
        " " +
        response.data.data.lastName
    );
  };

  const fetchData = async () => {
    try {
      const response = await axios.post("/api/provider/getPostedJobData", {
        _id: id,
      });
      // console.log("Success", response.data.data);
      setData(response.data.data);
    } catch (error: any) {
      console.log(error.response.data.error);
      // toast.error(error.response.data.error);
    }
  };
  const isFieldEmpty = () => {
    if(updateData.role.trim() === "" || updateData.location.trim() === "" || updateData.education.trim() === "" || updateData.experience.trim() === "" || updateData.salary.trim() === "" || updateData.mobile.trim() === "" || updateData.english.trim() === "" || updateData.jobType.trim() === ""){
      setButtonDisabled(true)
    }else{
      setButtonDisabled(false)
    }
  }

  useEffect(() => {
    isFieldEmpty();
  } ,[updateData] )
  
  useEffect(() => {
    getUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const deleteIcon = async (model: any) => {
    setShowDeleteModal({
      ...showDeleteModal,
      visible: false,
    });
    const id = model.id;

    try {
      const response = await axios.post("/api/provider/deletePostedJob", {
        _id: id,
      });
      // console.log("Success", response.data);
      toast.success("Job deleted successfully");
      fetchData();
    } catch (error: any) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error);
    }
  };

  const update = async (modal: any) => {
    setShowModal({
      ...showModal,
      visible: false,
    });

    try {
      if(updateData.mobile.length !=10){
        toast.error("Please enter 10 digit mobile number")
        return
      }
      const response = await axios.post("/api/provider/updatePostedJobData", {
        updateData,
        modal,
        name: name,
      });
      // console.log(response);
      toast.success("Updated successfully");
      fetchData();
    } catch (error: any) {
      // console.log(error.response.data.error);
      toast.error(error.response.data.error);
    }
  };

  return (
    <div className="bg-white dark:bg-dark dark:text-white rounded">
       <Toaster />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="dark:text-white sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Your Job Posted
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="dark:text-white lg:w-1/2 w-full leading-relaxed text-gray-500">
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
                    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden capitalize rounded-lg shadow-2xl bg-gray-50 text-gray-800  dark:bg-gray-600 dark:text-white">
                      <div className="flex space-x-4">
                        <Image
                        src={avatar}
                        alt="avatar"
                        height={100}
                        width={100}
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
                          ROLE: {item.role}
                        </span>

                        <h2 className="mb-1 text-xl font-semibold">
                          Location: {item.location}
                        </h2>

                        <p className="font-semibold text-gray-600">
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
                      <div className="flex flex-wrap justify-between">
                        <div className="space-x-2">
                          <button
                            aria-label="Bookmark this post"
                            type="button"
                            className="p-2 hover:bg-green-600 rounded-full hover:text-white
                            dark:bg-green-400 dark:hover:bg-green-700 
                            "
                            
                          >
                            <IconPencil
                              onClick={() =>
                                setShowModal({
                                  id: item._id,
                                  visible: true,
                                  employerId: item.employerId,
                                })
                              }
                            />
                          </button>
                        </div>
                        <div className="flex space-x-2 text-sm text-gray-600">
                          <button
                            aria-label="Bookmark this post"
                            type="button"
                            className="p-2 hover:bg-red-600 rounded-full hover:text-white
                            dark:bg-red-400 dark:hover:bg-red-700 "
                          >
                            <IconTrash
                              onClick={() =>
                                setShowDeleteModal({
                                  id: item._id,
                                  visible: true,
                                })
                              }
                            />
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

      {/* Modal */}
      <>
        {showModal.visible ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
              <div className="relative w-auto my-6 mx-auto max-w-3xl mt-32 dark:bg-dark">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-dark outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 dark:border-white rounded-t">
                    <h3 className="text-3xl font-semibold dark:text-white">Update Job</h3>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <div>
                      <Grid container spacing={3}>
                        <Grid item xs={12} lg={12}>
                          <Box
                            component="form"
                            sx={{
                              "& .MuiTextField-root": { m: 1.8, width: "30ch" },
                            }}
                            noValidate
                            autoComplete="off"
                          >
                            <div>
                              <TextField
                              className="dark:bg-slate-200"
                                required
                                id="role"
                                label="Role"
                                value={updateData.role}
                                onChange={(e) => {
                                  setUpdateData({
                                    ...updateData,
                                    role: e.target.value,
                                  });
                                }}
                              />
                              <TextField
                              className="dark:bg-slate-200"
                                required
                                id="location"
                                label="Location"
                                value={updateData.location}
                                onChange={(e) => {
                                  setUpdateData({
                                    ...updateData,
                                    location: e.target.value,
                                  });
                                }}
                              />
                              <TextField
                              className="dark:bg-slate-200"
                              required
                                id="minEducation"
                                label="Minimum Education"
                                value={updateData.education}
                                onChange={(e) => {
                                  setUpdateData({
                                    ...updateData,
                                    education: e.target.value,
                                  });
                                }}
                              />

                              <TextField
                              className="dark:bg-slate-200"
                              required
                                id="experience"
                                label="Experience"
                                variant="outlined"
                                value={updateData.experience}
                                onChange={(e) => {
                                  setUpdateData({
                                    ...updateData,
                                    experience: e.target.value,
                                  });
                                }}
                              />
                              <TextField
                              className="dark:bg-slate-200"
                                required
                                id="salary"
                                label="Salary"
                                variant="outlined"
                                type="number"
                                value={updateData.salary}
                                onChange={(e) => {
                                  setUpdateData({
                                    ...updateData,
                                    salary: e.target.value,
                                  });
                                }}
                              />
                              <TextField
                              className="dark:bg-slate-200"
                                required
                                id="standard-number"
                                label="Mobile Number"
                                type="number"
                                value={updateData.mobile}
                                onChange={(e) => {
                                  setUpdateData({
                                    ...updateData,
                                    mobile: e.target.value,
                                  });
                                }}
                              />
                              <TextField
                              className="dark:bg-slate-200"
                              required
                                id="english"
                                label="English"
                                variant="outlined"
                                value={updateData.english}
                                onChange={(e) => {
                                  setUpdateData({
                                    ...updateData,
                                    english: e.target.value,
                                  });
                                }}
                              />

                              <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label"className="dark:text-white">
                                  Job Type
                                </FormLabel>
                                <RadioGroup
                                
                                  row
                                  aria-labelledby="demo-radio-buttons-group-label"
                                  name="radio-buttons-group"
                                  onChange={(e) => {
                                    setUpdateData({
                                      ...updateData,
                                      jobType: e.target.value,
                                    });
                                  }}
                                >
                                  <FormControlLabel
                                    value="Full Time"
                                    control={<Radio />}
                                    label="Full Time"
                                  />
                                  <FormControlLabel
                                    value="Part Time"
                                    control={<Radio />}
                                    label="Part Time"
                                  />
                                  <FormControlLabel
                                    value="Both Full Time and Part Time"
                                    control={<Radio />}
                                    label="Both Full Time and Part Time"
                                  />
                                </RadioGroup>
                              </FormControl>
                            </div>
                          </Box>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 dark:border-white rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() =>
                        setShowModal({
                          ...showModal,
                          visible: false,
                        })
                      }
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150
                      disabled:opacity-25 disabled:cursor-not-allowed"
                      type="button"
                      disabled={buttonDisabled}
                      onClick={() => update(showModal)}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>

      {/*Delete Modal */}
      <>
        {showDeleteModal.visible ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
              <div className="relative w-auto my-6 mx-auto max-w-3xl mt-32">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-dark outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 dark:border-white rounded-t">
                    <h3 className="text-3xl font-semibold">Delete Job</h3>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <div>Are you sure you want to delete this job?</div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 dark:border-white rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() =>
                        setShowDeleteModal({
                          ...showDeleteModal,
                          visible: false,
                        })
                      }
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => deleteIcon(showDeleteModal)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    </div>
  );
};

export default Page;
