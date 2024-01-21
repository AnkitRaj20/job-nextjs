"use client"
import React from 'react'
import Lottie from "lottie-react";
import anime from "./ani.json"

const Page = () => {
  return (
    <div className='min-h-screen'>
        <Lottie animationData={anime} />
    </div>
  )
}

export default Page