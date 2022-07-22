import React from "react";

const nav = () => {
  return (
    <div className="flex flex-row items-center rounded-md mt-10 bg-white">
      <div className="">
        <h1 className="p-4 text-3xl text-blue-600 sm:text-md">Book Store</h1>
      </div>
      <div className="ml-auto mr-12 sm:mr-0">
        <svg
          className="w-8 h-8 cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </div>
    </div>
  );
};

export default nav;
