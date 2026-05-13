import React from "react";
import { trainers } from "./data/data";
const TrainerSection = () => {
  return (
    <div id="trainers" className="w-full flex flex-col  bg-black items-center">
      <div className="w-1/2 flex flex-col px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white flex items-center justify-center">
          Meet our trainers
        </h1>

        <p className="flex justify-center items-center items-center text-gray-500">
          Learn from experienced coaches
        </p>
      </div>
      <div className="w-1/2 flex flex-col px-8 py-4  gap-8 md:flex-row">
        {trainers.map((item) => (
          <div
            key={item.name}
            className="w-full flex flex-col bg-gray-800 rounded-xl p-3 md:flex-col"
          >
            <div className=" text-white text-3xl w-full">
              <img src={item.image} />
            </div>
            <h2 className="text-xl font-semibold mb-2 text-green-500">
              {item.name}
            </h2>
            <p className="text-gray-600 mb-4 text-white         ">
              {item.specialty}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerSection;
