import React from "react";
import Form from "next/form";

const compulsoryFields = () => {

}

const page = () => {
  return (
    <div className="flex flex-col h-full w-full gap-2">
      <div className="header w-full flex flex-col justify-center items-center">
        <h1 className="text-[1.5rem] font-semibold">Sign up for free</h1>
        <p className="text-[#000000] opacity-70">
          Empower your experience, sign up today
        </p>
      </div>

      <Form
        action="/api/auth/register"
        className="flex flex-col gap-4 w-full h-full justify-center items-center pt-8"
      >
        <div className="flex flex-col w-full h-full gap-4">
        {/* ----Full Name---- */}
          <div className="input flex flex-col justify-center items-stretch  w-full gap-2">
            <label htmlFor="fullName" className="text-sm text-[#414143]">
              Full Name <span className="text-[#FF0000]">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="ex. John Doe"
              className="w-full h-10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-[#FFFFFF] text-sm"
              required
            />
          </div>
          {/* ----Email---- */}
          <div className="input flex flex-col justify-center items-stretch  w-full gap-2">
            <label htmlFor="email" className="text-sm text-[#414143]">
              Your Email <span className="text-[#FF0000]">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="ex. email@johndoe.com"
              className="w-full h-10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-[#FFFFFF] text-sm"
              required
            />
          </div>
          {/* ----Phone Number---- */}
          <div className="input flex flex-col justify-center items-stretch  w-full gap-2">
            <label htmlFor="phone" className="text-sm text-[#414143]">
              Phone Number <span className="text-[#FF0000]">*</span> <span className="primary-text" >why</span>
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="ex. +1 (555) 123-4567"
              className="w-full h-10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-[#FFFFFF] text-sm"
              required
            />
          </div>
          {/* -------Password------- */}
          <div className="input flex flex-col justify-center items-stretch  w-full gap-2">
            <label htmlFor="password" className="text-sm text-[#414143]">
              Password <span className="text-[#FF0000]">*</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Create a strong password"
              className="w-full h-10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-[#FFFFFF] text-sm"
              required
            />
          </div>

        </div>

        <button className="" >
          Get Started
        </button>
      </Form>
    </div>
  );
};

export default page;
