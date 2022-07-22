import React from "react";

const Main = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between bg-[#E9E9ED]">
        <div className="flex">
          <img
            className="h-24 w-24 rounded-lg"
            src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="placeholder"
          />
          <div className="flex flex-col ml-6 justify-center text-blue-600">
            <p>title</p>
            <p>author</p>
          </div>
        </div>
        <div className="mr-10">
          <p>publisher</p>
          <p>publishDate</p>
        </div>
        <div className="mr-10">
          <p>Update</p>
          <p>Delete</p>
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
