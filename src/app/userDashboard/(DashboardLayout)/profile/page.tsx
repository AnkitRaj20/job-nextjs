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

import BaseCard from "@/app/userDashboard/(DashboardLayout)/components/shared/BaseCard";

import { useEffect, useState } from "react";
import axios from "axios";

const page = () => {
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

  const getUserDetails = async () => {
    const response = await axios.get("/api/users/candidateData");
    console.log(response.data.data._id);
    setId(response.data.data._id);
  };

  const fetchData = async () => {
    console.log("id::" + id);
    try {
      const response = await axios.post("/api/users/candidateProfile", { _id: id });
      console.log("Success", response.data);
      setData({
        id: response.data._id,
        firstName: response.data.firstName,
        middleName: response.data.middleName,
        lastName: response.data.lastName,
        mobile: response.data.mobile,
        email: response.data.email,
      });
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

  // Update the profile
  const update = async () => {
    try {
      const response = await axios.post("/api/users/updateCandidateProfile", { data });

      console.log(response);
    } catch (error: any) {
      console.log(error.response.data.error);
    }
  };

  return (
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
              </div>
              <Button variant="text" color="primary" onClick={update}>
                Update
              </Button>
            </div>
          </Box>
        </BaseCard>
      </Grid>
    </Grid>
  );
};

export default page;
