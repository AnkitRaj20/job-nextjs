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

import BaseCard from "@/app/dashboard/(DashboardLayout)/components/shared/BaseCard";

import { useEffect, useState } from "react";
import axios from "axios";



const page = ({params}:any) => {
  console.log("id::"+params.id)
  const id = params.id

  const [data, setData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    mobile:"",
    email:"",
  })

  useEffect(() => {
    const fetchData = async () => {
     try {
      const response = await axios.post("/api/users/profile", {_id:id});
      console.log("Success",response.data)
      setData({
        firstName: response.data.firstName,
        middleName: response.data.middleName,
        lastName: response.data.lastName,
        mobile: response.data.mobile,
        email: response.data.email,
      })
     }catch (error:any) {
      console.log(error.response.data.error);
      // toast.error(error.response.data.error);
  }
    };
    fetchData();
  },[])

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
                id="outlined-required"
                label="First Name"
                value={data.firstName}
                
              />
              <TextField
                required
                id="outlined-required"
                label="Middle Name"
                value={data.middleName}
              />
              <TextField
                required
                id="outlined-required"
                label="Last Name"
                value={data.lastName}
              />

              <div>
                <TextField
                  required
                  id="email-basic"
                  label="Email"
                  variant="outlined"
                  value={data.email}
                />
                <TextField id="outlined-number" label="Number" type="number"
                value={data.mobile}
                />

                <FormControl>
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
                </FormControl>
              </div>
            </div>
          </Box>
        </BaseCard>
      </Grid>
    </Grid>
  );
};

export default page;
