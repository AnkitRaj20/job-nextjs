import React from "react";

const Steps = () => {
  return (
    <div className="bg-white">
      <div className="container flex px-5 bg-white">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto flex flex-wrap">
            <h2 className="text-4xl pt-3 items-center text-center">
              Get jobs in easy steps
            </h2>
            <div className="flex flex-wrap w-full">
              <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      STEP 1
                    </h2>
                    <p className="leading-relaxed">Build your Job Profile</p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      STEP 2
                    </h2>
                    <p className="leading-relaxed">
                      Find jobs that matches your profile.
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="5" r="3"></circle>
                      <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      STEP 3
                    </h2>
                    <p className="leading-relaxed">
                      Connect with people who can help you to get your desired
                      Job.
                    </p>
                  </div>
                </div>

                <div className="flex relative">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      FINISH
                    </h2>
                    <p className="leading-relaxed">
                      Congratulations.. You got your desired job.
                    </p>
                  </div>
                </div>
              </div>

              {/* <img className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="https://dummyimage.com/1200x500" alt="step" /> */}
              <div className="max-w-2xl mx-auto">
                <div
                  id="default-carousel"
                  className="relative"
                  data-carousel="static"
                >
                  <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
                    <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item
                    >
                      <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
                        First Slide
                      </span>
                      <img
                        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                        className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                        alt="..."
                      />
                    </div>
                    <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item
                    >
                      <img
                        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                        className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                        alt="..."
                      />
                    </div>
                    <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item
                    >
                      <img
                        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                        className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="false"
                      aria-label="Slide 1"
                      data-carousel-slide-to="0"
                    ></button>
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="false"
                      aria-label="Slide 2"
                      data-carousel-slide-to="1"
                    ></button>
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="false"
                      aria-label="Slide 3"
                      data-carousel-slide-to="2"
                    ></button>
                  </div>
                  <button
                    type="button"
                    className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                    data-carousel-prev
                  >
                    <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg
                        className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 19l-7-7 7-7"
                        ></path>
                      </svg>
                      <span className="hidden">Previous</span>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                    data-carousel-next
                  >
                    <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg
                        className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                      <span className="hidden">Next</span>
                    </span>
                  </button>
                </div>

                <p className="mt-5">
                  This carousel slider component is part of a larger,
                  open-source library of Tailwind CSS components. Learn more by
                  going to the official{" "}
                  <a
                    className="text-blue-600 hover:underline"
                    href="https://flowbite.com/docs/getting-started/introduction/"
                    target="_blank"
                  >
                    Flowbite Documentation
                  </a>
                  .
                </p>
                <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Steps;
