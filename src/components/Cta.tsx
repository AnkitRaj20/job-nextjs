/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Cta = () => {
  return (
    <div>
         <div className="bg-white dark:bg-dark  py-6 sm:py-8 lg:py-12 ">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-2xl text-center sm:flex-row md:h-80">
     
      <div className="order-first h-96 w-full bg-whitesm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
        <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Andras Vas" className="h-full w-full object-cover object-center" />
      </div>
      
      <div className="flex w-full text-center items-center flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5 dark:bg-slate-800">
    <p className="text-sm dark:text-white dark:bg-slate-800 font-semibold uppercase tracking-widest ">
      Signup Now
    </p>

    <h2 className="mt-6 font-black  uppercase">
      <span className="text-4xl font-black dark:text-white sm:text-5xl lg:text-6xl">
      Want to hire people?
      </span>

      <span className="mt-2 block text-sm">Find the best people for your job</span>
    </h2>

    <a
      className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
      href="/employerSignup"
    >
      Post a Job
    </a>

    <p className="mt-8 text-xs font-medium uppercase text-gray-400 dark:text=gray-100">
      Offer valid until 24th March, 2024 *
    </p>
  </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cta