import React from "react";

const Main = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between text-md bg-[#E9E9ED]">
        <div className="flex">
          <img
            className="h-24 w-24 rounded-lg"
            src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="placeholder"
          />
          <div className="flex flex-col ml-6 sm:ml-4 justify-center font-bold">
            <p>Atomic Habits</p>
            <p>James Clear</p>
          </div>
        </div>
        <div className="mr-10 font-bold">
          <p>publisher</p>
          <p>publishDate</p>
        </div>
        <div className="mr-10 sm:mr-4">
          <svg
            className="w-6 h-6 stroke-red-600 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          <svg
            className="w-6 h-6 stroke-red-600 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>
      </div>
      <div className="align-center mt-6">
        {/* <button className="bg-blue-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Add Book
        </button> */}
      </div>
    </div>
  );
};

export default Main;
