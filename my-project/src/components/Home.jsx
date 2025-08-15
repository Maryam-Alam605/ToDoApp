import React from "react";

function Home() {
  return (
    <div className="max-w-[90%] bg-yellow-100 rounded-xl mx-auto p-5 my-5 text-center min-h-[70vh]">
      <img
        src="/checklist.png"
        alt="Checklist"
        className="mx-auto mb-4 w-50 h-50"
      />
      <h1 className="text-4xl mb-2 font-sans underline decoration-yellow-600 underline-offset-8">
        Welcome to Your Task Manager
      </h1>

      <p className="m-4 text-base font-sans">
        Manage your tasks efficiently and effectively.
      </p>
    </div>
  );
}
export default Home;
