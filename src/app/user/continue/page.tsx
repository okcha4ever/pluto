"use client"
import React from "react";
import { Navbar } from "@/components/ReusableComponents/Navbar";
import { Footer } from "@/components/ReusableComponents/Footer";

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-[#f0f2f5]">
        <div className="text-center px-4 py-10 sm:m-10 shadow-lg bg-[#3b49df11] rounded-lg max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold  mb-4 text-[#3b49df]">Continue Signing Up</h2>
          <p className="text-md sm:text-lg text-gray-600 mb-8">Select your profile:</p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-10 my-4 sm:my-10">
            <a href="/signup/investor" className="transition-transform transform hover:scale-105 max-w-sm w-full sm:w-auto p-6 bg-white border-2 border-gray-300 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-600 hover:bg-gray-800">
               <h5 className="mb-2 text-lg sm:text-xl font-bold tracking-tight  text-[#3b49df]">Investor</h5>
              
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Discover investment opportunities and connect with innovative startups tailored to your interests.
              </p>
            </a>

            <a href="/signup/startup" className="transition-transform transform hover:scale-105 max-w-sm w-full sm:w-auto p-6 bg-white border-2 border-gray-300 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-600 hover:bg-gray-800">
               <h5 className="mb-2 text-lg sm:text-xl font-bold tracking-tight  text-[#3b49df]">Startup</h5>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Join our platform to gain visibility and access resources, mentorship, and funding opportunities.
              </p>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;

