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

import BaseCard from "@/app/dashboard/(DashboardLayout)/components/shared/BaseCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Page = () => {
  const [data, setData] = useState({
    employerId: "",
    employerName: "",
    role: "",
    location: "",
    education: "",
    experience: "",
    salary: "",
    mobile: "",
    english: "",
    jobType: "",
  });
  const getUserDetails = async () => {
    const response = await axios.get("/api/provider/userData");
    console.log(response.data);
    setData({
      ...data,
      employerId: response.data.data._id,
      employerName:
        response.data.data.firstName +
        " " +
        response.data.data.middleName +
        " " +
        response.data.data.lastName,
    });
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const post = async () => {
    try {
      const response = await axios.post("/api/provider/postJob", data);
      console.log(response);
      toast.success("Job Posted Successfully");
    } catch (error: any) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error);
    }
  };

  return (
    <div>
      <Toaster />
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <BaseCard title="Post Job">
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
                  id="id"
                  label="Employee Id"
                  disabled
                  hidden
                  value={data.employerId}
                />
                <TextField
                className="dark:bg-slate-200"
                  required
                  id="role"
                  label="Role"
                  value={data.role}
                  onChange={(e) => {
                    setData({
                      ...data,
                      role: e.target.value,
                    });
                  }}
                />
                <TextField
                className="dark:bg-slate-200"
                  required
                  id="location"
                  label="Location"
                  value={data.location}
                  onChange={(e) => {
                    setData({
                      ...data,
                      location: e.target.value,
                    });
                  }}
                />
                <TextField
                className="dark:bg-slate-200"
                  id="minEducation"
                  label="Minimum Education"
                  value={data.education}
                  onChange={(e) => {
                    setData({
                      ...data,
                      education: e.target.value,
                    });
                  }}
                />

                <div>
                  <TextField
                  className="dark:bg-slate-200"
                    id="experience"
                    label="Experience"
                    variant="outlined"
                    value={data.experience}
                    onChange={(e) => {
                      setData({
                        ...data,
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
                    value={data.salary}
                    onChange={(e) => {
                      setData({
                        ...data,
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
                    value={data.mobile}
                    onChange={(e) => {
                      setData({
                        ...data,
                        mobile: e.target.value,
                      });
                    }}
                  />
                  <TextField
                  className="dark:bg-slate-200"
                    id="english"
                    label="English"
                    variant="outlined"
                    value={data.english}
                    onChange={(e) => {
                      setData({
                        ...data,
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
                        setData({
                          ...data,
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
                <Button variant="text" color="primary" onClick={post}>
                  Post Job
                </Button>
              </div>
            </Box>
          </BaseCard>
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
