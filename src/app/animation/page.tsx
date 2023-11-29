"use client"
import React from 'react'
import Lottie from "lottie-react";
import anime from "./ani.json"

const page = () => {
  return (
    <div className='min-h-screen'>
        <Lottie animationData={anime} />
    </div>
  )
}

export default page