"use client"
import { useState } from "react";

export default   () => {
  const testimonials = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Susan Parker",
      title: "Job Seeker",
      quote:
        "I was struggling to find the right job for my skill set. Thanks to NayiNaukri, I not only discovered numerous opportunities. The user-friendly interface and personalized job recommendations made my job search efficient and effective. Within weeks, I secured a position that aligned perfectly with my career goals."
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Angelina Roy",
      title: "Job Provider",
      quote:
        "The ease of posting jobs and looking user profiles has streamlined my hiring process. I've successfully hired skilled person who perfectly fit my work culture and requirement. NayiNaukri has become our go-to resource for finding quality candidates",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Karim Khan",
      title: "Career Changer",
      quote:
        "Switching to a new career can be very difficult, but NayiNaukri made the process surprisingly smooth for me.It gave me a list of jobs that suits my skills.I'm now working in my new role, and I credit NayiNaukri for providing the resources and opportunities that empowered my successful transition. ",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section className="py-14 dark:bg-dark">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center ">
          <h3 className="text-indigo-600 font-semibold pb-6">
            What people are saying
          </h3>
          <ul>
            {testimonials.map((item, idx) =>
              currentTestimonial == idx ? (
                <li key={idx}>
                  <figure>
                    <blockquote>
                      <p className="text-gray-800 dark:text-white text-xl font-semibold sm:text-2xl">
                        “{item.quote}“
                      </p>
                    </blockquote>
                    <div className="mt-6">
                      <img
                        src={item.avatar}
                        className="w-16 h-16 mx-auto rounded-full"
                      />
                      <div className="mt-3">
                        <span className="block text-gray-800 dark:text-white font-semibold">
                          {item.name}
                        </span>
                        <span className="block text-gray-600 dark:text-white text-sm mt-0.5">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </figure>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
        <div className="mt-6">
          <ul className="flex gap-x-3 justify-center">
            {testimonials.map((item, idx) => (
              <li key={idx}>
                <button
                  className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-indigo-600 focus:ring ${
                    currentTestimonial == idx ? "bg-indigo-600" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(idx)}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
