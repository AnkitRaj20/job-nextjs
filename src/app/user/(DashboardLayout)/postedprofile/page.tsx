/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { connect } from "@/dbConfig/dbConfig";
import axios from "axios";
import {
  IconTrash,
  IconPencil,
  IconMapPin,
  IconPhoneCall,
  IconCurrencyRupee,
  IconClock,
} from "@tabler/icons-react";
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

  const update = async (modal: any) => {
    setShowModal({
      ...showModal,
      visible: false,
    });

    try {
      const response = await axios.post("/api/users/updatePostedProfile", {
        updateData,
        modal,
        name: name,
      });
      fetchData();
    } catch (error: any) {
      console.log(error.response.data.error);
    }
  };

  const deleteIcon = async (model: any) => {
    setShowDeleteModal({
      ...showDeleteModal,
      visible: false,
    });
    const id = model.id;
    try {
      const response = await axios.post("/api/users/deletePostedProfile", {
        _id: id,
      });
      fetchData();
    } catch (error: any) {
      console.log(error.response.data.error);
      // toast.error(error.response.data.error);
    }
  };

  const getUserDetails = async () => {
    const response = await axios.get("/api/users/candidateData");
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
      const response = await axios.post("/api/users/getPostedProfileData", {
        _id: id,
      });
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
    <div>
      {data.map((item: any) => {
        return (
          <div key={item._id} className="p-8 bg-white shadow mt-24 dark:bg-dark">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0 dark:text-white">
                <div>
                  <p className="font-bold dark:text-white text-gray-700 text-xl">
                    {item.experience}
                  </p>
                  <p className="text-gray-400">Year experience</p>
                </div>
                <div>
                  <p className="font-bold dark:text-white text-gray-700 text-xl">
                    {item.education}
                  </p>
                  <p className="text-gray-400">Higher Education</p>
                </div>
                <div>
                  <p className="font-bold dark:text-white text-gray-700 text-xl">
                    {item.english}
                  </p>
                  <p className="text-gray-400">English Known</p>
                </div>
              </div>
              <div className="relative">
                <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                <button
                  type="button"
                  className="
                            h-12 rounded-full
                            hover:text-white py-2 px-4 uppercase  bg-white hover:bg-green-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 
                            dark:bg-green-400 dark:hover:bg-green-700 
                            "
                  onClick={() =>
                    setShowModal({
                      id: item._id,
                      visible: true,
                      employerId: item.employerId,
                    })
                  }
                >
                  <IconPencil />
                </button>
                <button
                  className=" h-12 rounded-full
                            hover:text-white py-2 px-4 uppercase  bg-white hover:bg-red-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 
                            dark:bg-red-400 dark:hover:bg-red-700 "
                  onClick={() =>
                    setShowDeleteModal({
                      id: item._id,
                      visible: true,
                    })
                  }
                >
                  <IconTrash />
                </button>
              </div>
            </div>
            <div className="mt-20 text-center border-b pb-12">
              <h1 className="text-4xl font-medium text-gray-700 dark:text-white">
                {name},
                <span className="font-light text-gray-500 dark:text-slate-200">{item.gender}</span>
              </h1>
              <p className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-700 text-lg font-bold tracking-widest mb-2">
                Role: {item.role}
              </p>
              <div>
                <a className=" inline-flex items-center mt-2 md:mb-2 lg:mb-0 font-medium space-x-5">
                  <IconMapPin />
                  <p className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    {item.address}
                  </p>
                </a>
              </div>

              <div>
                <a className=" inline-flex items-center mt-2 md:mb-2 lg:mb-0 font-medium space-x-5 ">
                  <IconPhoneCall />
                  <p className="leading-relaxed text-base text-gray-500 dark:text-white">
                    {item.mobile}
                  </p>
                </a>
              </div>
              <div>
                <a className=" inline-flex items-center mt-2 md:mb-2 lg:mb-0 font-medium space-x-5">
                  <IconClock />
                  <p className="leading-relaxed text-base text-gray-500 dark:text-white">
                    {item.jobType}
                  </p>
                </a>
              </div>
              <div>
                <a className=" inline-flex items-center mt-2 md:mb-2 lg:mb-0 font-medium space-x-5">
                  <IconCurrencyRupee />
                  <p className="leading-relaxed text-base text-gray-500 dark:text-white">
                    {item.salary}
                  </p>
                </a>
              </div>
            </div>
            <div className="mt-12 flex flex-col justify-center">
              <p className="text-gray-600 text-center font-light lg:px-16">
                An artist of considerable range, Ryan — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure. An artist of considerable
                range.
              </p>
              <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
                Show more
              </button>
            </div>
          </div>
        );
      })}

      {/* Modal */}
      <>
        {showModal.visible ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
              <div className="relative w-auto my-6 mx-auto max-w-3xl mt-32">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Update Profile</h3>
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
                                required
                                id="salary"
                                label="Salary"
                                variant="outlined"
                                value={updateData.salary}
                                onChange={(e) => {
                                  setUpdateData({
                                    ...updateData,
                                    salary: e.target.value,
                                  });
                                }}
                              />
                              <TextField
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
                                <FormLabel id="demo-radio-buttons-group-label">
                                  Job Type
                                </FormLabel>
                                <RadioGroup
                                  row
                                  aria-labelledby="demo-radio-buttons-group-label"
                                  defaultValue="full"
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
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
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
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
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
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Delete Profile</h3>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <div>Are you sure you want to delete this Profile?</div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
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
