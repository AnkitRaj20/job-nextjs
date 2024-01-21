import Navbar from "@/components/Navbar2";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div>
      <Navbar />
      <main className="dark:bg-dark">
        <section className="px-4 py-24 mx-auto max-w-7xl">
          <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24 dark:text-white">
            <div>
              <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl dark:text-white">
                User Profile
              </h2>
              <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg dark:text-gray-400">
                NayiNaukri provide job seekers with the ability to create user
                profiles on their platforms. These profiles act as online
                resumes, allowing job seekers to showcase their qualifications,
                work experience, and skills.
                <br />
                <br />
                <a
                  href="#"
                  className="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                  Additionally,
                </a>
                job seekers can post their user profiles with the job provider
                to showcase their skills so that the provider can contact them
                quickly.
              </p>
            </div>
            <div className="w-full h-full  bg-gray-200  rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1587613864411-969e5288c708?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29uJTIwb24lMjBjb21wdXRlcnxlbnwwfHwwfHx8Mg%3D%3D"
                className="cover h-96 w-full  rounded-lg"
                alt="job seeker"
              />
            </div>
          </div>
          <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
            <div className="order-none md:order-2">
              <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl dark:text-white">
                Provider Profiles
              </h2>
              <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg dark:text-gray-400">
                NayiNaukri provide job provider to create their profiles and
                attract top talent people and hire them. They can post their job
                requirements and can contact the job seekers directly.
                <br /><br />
                <a
                  href="#"
                  className="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                  Additionally,
                </a>
                job provider can view the user profiles with the 
                to look at their skills so that the provider can contact them quickly.
              </p>
            </div>
            <div className="w-full h-full bg-gray-200  rounded-lg">
                <img src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8am9ifGVufDB8fDB8fHwy" className="cover h-96 w-full  rounded-lg" alt="job provider" />
            </div>
          </div>
        </section>
      </main>

      <main className="dark:bg-dark">
      <section className="px-4 py-20 mx-auto max-w-7xl">
  <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-32 gap-x-10 lg:gap-x-24 ">
    <div>
      <h2 className="mb-3 text-3xl font-extrabold leading-tight tracking-tight text-center text-black sm:text-left md:text-4xl dark:text-white">Benefits of Using NayiNaukri</h2>
      <p className="mb-6 text-lg text-center text-gray-600 sm:text-left md:text-xl dark:text-gray-400">Let's put our heads together to build a successful and easy to use job website for both provider and seeker.</p>
      <a href="/signup" className="w-full btn btn-primary btn-lg sm:w-auto">Become a member</a>
    </div>
    <div className="flex flex-col flex-grow space-y-5">
      <div className="flex items-start">
        <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-5 h-5 mt-1 mr-2 text-primary">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
        </svg>
        <p className="text-lg text-gray-700 dark:text-gray-200">Broad Job Market Access
</p>
      </div>
      <div className="flex items-start">
        <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-5 h-5 mt-1 mr-2 text-primary">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
        </svg>
        <p className="text-lg text-gray-700 dark:text-gray-200">Time and Cost Savings</p>
      </div>
      <div className="flex items-start">
        <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-5 h-5 mt-1 mr-2 text-primary">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
        </svg>
        <p className="text-lg text-gray-700 dark:text-gray-200">Enhanced Visibility
</p>
      </div>
      <div className="flex items-start">
        <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-5 h-5 mt-1 mr-2 text-primary">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
        </svg>
        <p className="text-lg text-gray-700 dark:text-gray-200">Easy to use</p>
      </div>
      <div className="flex items-start">
        <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-5 h-5 mt-1 mr-2 text-primary">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
        </svg>
        <p className="text-lg text-gray-700 dark:text-gray-200"> Secured</p>
      </div>
      <div className="flex items-start">
        <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-5 h-5 mt-1 mr-2 text-primary">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
        </svg>
        <p className="text-lg text-gray-700 dark:text-gray-200">Easy Job Search</p>
      </div>
      <div className="flex items-start">
        <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-5 h-5 mt-1 mr-2 text-primary">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
        </svg>
        <p className="text-lg text-gray-700 dark:text-gray-200">Easy to contact</p>
      </div>
      <div className="flex items-start">
        <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-5 h-5 mt-1 mr-2 text-primary">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
        </svg>
        <p className="text-lg text-gray-700 dark:text-gray-200">User Profile Posting Facility</p>
      </div>
      <div className="flex items-start">
        <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-5 h-5 mt-1 mr-2 text-primary">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
        </svg>
        <p className="text-lg text-gray-700 dark:text-gray-200">Seaparate Portal for both Job Provider and Job Seeker</p>
      </div>
      <div className="flex items-start">
        <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-5 h-5 mt-1 mr-2 text-primary">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
        </svg>
        <p className="text-lg text-gray-700 dark:text-gray-200">Reach 9000 customers via our integration page</p>
      </div>
    </div>
  </div>
</section>

      </main>
      <Footer />
    </div>
  );
};

export default Page;
