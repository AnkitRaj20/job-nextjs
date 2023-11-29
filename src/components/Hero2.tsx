"use client"
import React from 'react'
import Lottie from "lottie-react";
import anime from "@/app/animation/ani.json"

const Hero2 = () => {
  return (
    <div className="grid item-center grid-cols-2 divide-x bg-white">
  <div>01</div>
  <div>
  <Lottie  animationData={anime} />
  </div>
</div>

  )
}

export default Hero2