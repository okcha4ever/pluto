import React from "react";

const page = () => {
  return (
    <main className="flex items-center justify-center text-center">
      <h2>Continue signing-up:</h2>
      <p>Are you a:</p>
      <div className="border border-black px-5 py-6">Founder</div>
      <div className="border border-blue-500 px-5 py-6">Investor</div>
    </main>
  );
};

export default page;
