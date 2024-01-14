"use client";
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

import BaseCard from "@/app/userDashboard/(DashboardLayout)/components/shared/BaseCard";

import { useEffect, useState } from "react";
import axios from "axios";

const page = () => {
  const [id, setId] = useState("");
  const [checkProfilePosted, setcheckProfilePosted] = useState(false);
  const [data, setData] = useState({
    id: "",
    firstName: "",
    middleName: "",
    lastName: "",
    mobile: "",
    email: "",
    address : "",
    gender: ""
  });
  const [postProfile, setPostProfile] = useState({
    role: "",
    education: "",
    experience: "",
    english: "",
    jobType: "",
    salary: "",
  })
  const [showModal, setShowModal] = useState({
    visible: false,
    userId: "",
  });

  const getUserDetails = async () => {
    const response = await axios.get("/api/users/candidateData");
    console.log(response.data.data);
    setId(response.data.data._id);
  };

  const checkPostedProfile = async () => {
    try {
      const response = await axios.post("/api/users/checkPostedProfile",{
        _id:id
      });
      console.log("checkPostedProfile::"+response.data.data);
      if(response.data.data){
        setcheckProfilePosted(true);
      }
    } catch (error: any) {
      console.log(error.response.data.error);
    }
  }

  const fetchData = async () => {
    console.log("id::" + id);
    try {
      const response = await axios.post("/api/users/candidateProfile", {
        _id: id,
      });
      console.log("Success", response.data.data._id);
      setData({
        id: response.data.data._id,
        firstName: response.data.data.firstName,
        middleName: response.data.data.middleName,
        lastName: response.data.data.lastName,
        mobile: response.data.data.mobile,
        email: response.data.data.email,
        address: response.data.data.address,
        gender: response.data.data.gender,
      });
    } catch (error: any) {
      console.log(error.response.data.error);
      // toast.error(error.response.data.data.error);
    }
  };
  useEffect(() => {
    getUserDetails();
  }, []);

  useEffect(() => {
    fetchData();
  }, [id]);
  useEffect(() => {
    checkPostedProfile();
  }, [id]);

  // Update the profile
  const update = async () => {
    try {
      const response = await axios.post("/api/users/updateCandidateProfile", {
        data,
      });
      console.log(response);
    } catch (error: any) {
      console.log(error.response.data.error);
    }
  };

  // Post Profile
  const postProfileButton = async (modal: any) => {
    console.log("post profile");
    setShowModal({
      ...showModal,
      visible: false,
    });

    try {
      const response = await axios.post("/api/users/postUserProfile", {
        data,
        postProfile,
      });
      console.log(response);
      fetchData();
    } catch (error: any) {
      console.log(error.response.data.error);
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <BaseCard title="Profile">
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
                  id="firstName"
                  label="First Name"
                  value={data.firstName}
                  onChange={(e) => {
                    setData({
                      ...data,
                      firstName: e.target.value,
                    });
                  }}
                />
                <TextField
                  id="middleName"
                  label="Middle Name"
                  value={data.middleName}
                  onChange={(e) => {
                    setData({
                      ...data,
                      middleName: e.target.value,
                    });
                  }}
                />
                <TextField
                  required
                  id="lastName"
                  label="Last Name"
                  value={data.lastName}
                  onChange={(e) => {
                    setData({
                      ...data,
                      lastName: e.target.value,
                    });
                  }}
                />

                <div>
                  <TextField
                    required
                    id="email-basic"
                    label="Email"
                    variant="outlined"
                    value={data.email}
                    onChange={(e) => {
                      setData({
                        ...data,
                        email: e.target.value,
                      });
                    }}
                  />
                  <TextField
                    id="standard-number"
                    label="Number"
                    type="number"
                    value={data.mobile}
                    onChange={(e) => {
                      setData({
                        ...data,
                        mobile: e.target.value,
                      });
                    }}
                  />
                  <TextField
                  required
                  id="address"
                  label="Address"
                  value={data.address}
                  onChange={(e) => {
                    setData({
                      ...data,
                      address: e.target.value.toLowerCase(),
                    });
                  }}
                />
                  <TextField
                  required
                  disabled
                  id="gender"
                  label="Gender"
                  value={data.gender}
                  onChange={(e) => {
                    setData({
                      ...data,
                      gender: e.target.value,
                    });
                  }}
                />

                  {/* <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={data.gender}
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>  */}
                </div>
                <div className="flex justify-between">
                  <div>
                    <Button variant="text" color="primary" onClick={update}>
                      Update
                    </Button>
                  </div>
                  <div>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150
                      disabled:opacity-25
                      disabled:cursor-not-allowed
                      "
                      type="button"
                      onClick={() =>
                        setShowModal({
                          userId: data.id,
                          visible: true,
                        })
                      }
                      disabled={checkProfilePosted}
                    >
                      Post Profile
                    </button>
                  </div>
                </div>
              </div>
            </Box>
          </BaseCard>
        </Grid>
      </Grid>

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
                    <h3 className="text-3xl font-semibold">
                      Post Your Profile
                    </h3>
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
                            <TextField
                            required
                              id="role"
                              label="Role"
                              type="text"
                              value={postProfile.role}
                              onChange={(e) => {
                                setPostProfile({
                                  ...postProfile,
                                  role: e.target.value.toLowerCase(),
                                });
                              }}
                            />
                            <TextField
                            
                              id="education"
                              label="Education"
                              type="text"
                              value={postProfile.education}
                              onChange={(e) => {
                                setPostProfile({
                                  ...postProfile,
                                  education: e.target.value,
                                });
                              }}
                            />
                            <TextField
                            
                              id="experience"
                              label="Experience"
                              type="text"
                              value={postProfile.experience}
                              onChange={(e) => {
                                setPostProfile({
                                  ...postProfile,
                                  experience: e.target.value,
                                });
                              }}
                            />
                            <TextField
                            
                              id="English"
                              label="English"
                              type="text"
                              value={postProfile.english}
                              onChange={(e) => {
                                setPostProfile({
                                  ...postProfile,
                                  english: e.target.value,
                                });
                              }}
                            />
                            <TextField
                            required
                              id="standard-number"
                              label="salary"
                              type="text"
                              value={postProfile.salary}
                              onChange={(e) => {
                                setPostProfile({
                                  ...postProfile,
                                  salary: e.target.value,
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
                    setPostProfile({
                      ...postProfile,
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
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150
                      "
                      type="button"
                      onClick={() => postProfileButton(showModal)}
                      
                    >
                      Post Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    </>
  );
};

export default page;
