import React, { useState } from "react";
import introImage from "./GymImg/introImage.avif";
import { HiStar, HiArrowSmRight } from "react-icons/hi";
import ProgrammingModal from "./Banner";
import PlanModal from "./PlanModal";

const Intro = ({ activePrograms = [], onJoinProgram = () => {} }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);

  return (
    <div className="w-full md:flex-row flex sm:flex-col py-8 px-4 bg-black">
      <div className="sm:w-full md:w-1/2 ">
        <div className="flex items-center gap-2 w-fit p-4 bg-gray-150 text-xl">
          <span className="text-green-500 font-bold">Train Smarter</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Transform your body with daily fitness programs
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mt-8 w-2/3">
          join powerful workout sessions,expert trainers,and flexible plans
          designed for begginers
        </p>
        <div className="mt:8 p-4 flex gap-4 w-2/3">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-600 text-black font-bold px-8 py-4 rounded-xl hover:bg-green-700 transition"
          >
            Start today
          </button>
          <button
            onClick={() => setIsPlanModalOpen(true)}
            className="bg-slate-800 text-white font-bold px-8 py-4 rounded-xl shadow-sm shadow-white hover:bg-slate-700 transition"
          >
            View plans
          </button>
        </div>
      </div>

      <div className="sm:full md:w-1/2 flex justify-center  items-center ">
        <img src={introImage} alt="" className="w-5/6 rounded-xl w-200 h-125" />
      </div>

      <ProgrammingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        activePrograms={activePrograms}
        onJoinProgram={onJoinProgram}
      />
      <PlanModal
        isOpen={isPlanModalOpen}
        onClose={() => setIsPlanModalOpen(false)}
      />
    </div>
  );
};

export default Intro;
