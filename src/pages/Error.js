import React from "react";
import Navbar from "../components/Navbar";



export const Error = () => {
  return (
    <div>
      <Navbar />
      <h1>Error</h1>
      <p>The link you are trying to access does not exist</p>
    </div>
  );
};

export default Error;
