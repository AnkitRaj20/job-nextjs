import React from "react";

const Faq = () => {
  const faq = [
    {
      ques: " How do I create an account on your job website?",
      ans: "To create an account, click on the Login button on the homepage and got to Sign Up. Fill your details.",
    },
    {
      ques: "How can I search for jobs on your platform?",
      ans: "Use the search bar on the homepage or go to jobs page to enter keywords, job titles, or company names. You can also use filters such as location, industry, and job type to refine your search.",
    },
    {
      ques: " I forgot my password. How can I reset it?",
      ans: "On the login page, click on the 'Forgot Password' link. Enter your registered email address, and you'll receive instructions on how to reset your password.",
    },
    {
      ques: "How do I edit my profile details?",
      ans: "Log in and go to your profile. Click on the 'Edit Profile' button to update your personal information, work experience, education, and any other relevant details.",
    },
    {
      ques: " How can I contact customer support?",
      ans: "If you have any questions or encounter issues, please visit our 'Contact Us' page for information on reaching out to our customer support team. We're here to help you!",
    },
  ];

  return (
    <div className="container">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight  mb-3 text-center">Frequently Asked Question</h1>
      <div className="space-y-4">
        

        {faq.map((item, index) => {
          return (
            <div key={index}>
              <details
                className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden "
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2 className="text-lg font-medium text-gray-900">
                    {item.ques}
                  </h2>

                  <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                  {item.ans}
                </p>
              </details>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
