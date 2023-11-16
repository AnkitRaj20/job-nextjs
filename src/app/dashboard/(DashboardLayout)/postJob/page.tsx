"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const page = () => {
  const [data, setData] = useState("")
    const getUserDetails = async() => {
        const response = await axios.get("/api/users/userData");
        console.log(response.data)
        setData(response.data.data._id)
    }

    useEffect(() => {
        getUserDetails();
    }, [])
    
  return (
    <div>
      
    </div>
  )
}

export default page