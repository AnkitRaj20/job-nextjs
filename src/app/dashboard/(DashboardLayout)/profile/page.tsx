/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {
  Paper,
  Grid,
  Stack,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  Button,
  Box,
} from "@mui/material";

import toast, { Toaster } from "react-hot-toast";

import BaseCard from "@/app/dashboard/(DashboardLayout)/components/shared/BaseCard";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import avatar from "../../../../../public/images/avatar/avatar5.png";

const Page = () => {
  const [id, setId] = useState("");
  const [data, setData] = useState({
    id: "",
    firstName: "",
    middleName: "",
    lastName: "",
    mobile: "",
    email: "",
    // gender: ""
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  

  const getUserDetails = async () => {
    const response = await axios.get("/api/provider/userData");
    setId(response.data.data._id);
  };

  const fetchData = async () => {
    try {
      const response = await axios.post("/api/provider/profile", { _id: id });
      setData({
        id: response.data._id,
        firstName: response.data.firstName,
        middleName: response.data.middleName,
        lastName: response.data.lastName,
        mobile: response.data.mobile,
        email: response.data.email,
      });
      if (typeof window !== "undefined") {
        // Perform localStorage action
        localStorage.setItem("name", response.data.firstName);
      }
    } catch (error: any) {
      console.log(error.response.data.error);
      // toast.error(error.response.data.error);
    }
  };

  const isFieldEmpty = () => {
    if(data.firstName.trim() === "" || data.lastName.trim() === ""  || data.email.trim() === "" || data.mobile.length != 10 ){
      setButtonDisabled(true)
    }else{
      setButtonDisabled(false)
    }
  }

  useEffect(() => {
    isFieldEmpty();
  } ,[data] )
  useEffect(() => {
    getUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // Update the profile
  const update = async () => {
    try {
      const response = await axios.post("/api/provider/updateProfile", {
        data,
      });
      toast.success("Update success");
      // console.log(response);
    } catch (error: any) {
      // console.log(error.response.data.error);
      toast.error(error.response.data.error);
    }
  };

  return (
    <>
      <Toaster />
      <Grid container spacing={3}>
        <Grid item xs={12} lg={9}>
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
                  className="dark:bg-slate-200"
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
                  className="dark:bg-slate-200"
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
                  className="dark:bg-slate-200"
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

                <TextField
                  className="dark:bg-slate-200"
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
                  className="dark:bg-slate-200"
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

                {/* <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
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
                </FormControl> */}

                <div>
                  <Button variant="text"  color="primary" onClick={update} disabled={buttonDisabled} className="disabled:text-gray-300 disabled:cursor-not-allowed">
                    Update
                  </Button>
                </div>
              </div>
            </Box>
          </BaseCard>
        </Grid>

        {/* User Card */}
        <Grid item xs={12} lg={3} className="grid gap-4 content-center">
          <div className="flex flex-col  max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
            <Image
              src={avatar}
              alt="avatar"
              className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
            <div className="space-y-4 text-center divide-y dark:divide-gray-700">
              <div className="my-2 space-y-1">
                <h2 className="text-xl font-semibold sm:text-2xl">
                  {data.firstName + " " + data.middleName + " " + data.lastName}
                </h2>
                <p className="px-5 text-xs sm:text-base dark:text-gray-400">
                  {data.email}
                </p>
              </div>
              <div className="flex justify-center pt-2 space-x-4 align-center">
                {data.mobile}
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Page;
