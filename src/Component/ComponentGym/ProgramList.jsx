import React from "react";
import { programs } from "./data/data";
const ProgramList = () => {
  return (
    <div id="programs" className="w-full flex flex-col  bg-black items-center">
      <div className="w-1/2 flex flex-col px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white flex items-center justify-center">
          Our Programs
        </h1>
        <p className="text-lg text-gray-600 mb-4 text-white flex justify-center">
          Discuss your goals, determine success metrics,identity problems{" "}
        </p>
        <p className="flex justify-start items-center">
          Choose the workout style that matches your goals
        </p>
      </div>
      <div className="w-1/2 flex flex-col px-8 py-4  gap-8 md:flex-row">
        {programs.map((item) => (
          <div
            key={item.id}
            className="w-full flex flex-col bg-gray-800 rounded-xl p-3 md:flex-col"
          >
            <div className="mb-4 text-white text-3xl">{item.icon}</div>
            <h2 className="text-xl font-semibold mb-2 text-white">
              {item.title}
            </h2>
            <p className="text-gray-600 mb-4 text-white         ">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramList;
