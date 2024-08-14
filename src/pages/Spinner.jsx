import React from "react";
import loader from "../assets/spinner.gif";

const Spinner = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <img className="h-24 w-24" src={loader} alt="loading" />
    </div>
  );
};

export default Spinner;
