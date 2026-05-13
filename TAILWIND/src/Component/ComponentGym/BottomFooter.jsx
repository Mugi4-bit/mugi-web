import React from "react";

const BottomFooter = () => {
  return (
    <div className="flex w-full h-15 bg-gray-800 md:flex-row sm:flex-col md:gap-200 items-center ">
      <div className="text-white ml-30">
        <h1 className="font-bold text-xl text-green-500 sm:justify-center sm:mr-35">
          Fitzone
        </h1>
      </div>
      <div className="flex flex-row gap-5 text-white justify-end md:ml-100   ">
        <a href="">About</a>
        <a href="">Classes</a>
        <a href="">Membership</a>
        <a href="">Support</a>
      </div>
    </div>
  );
};

export default BottomFooter;
