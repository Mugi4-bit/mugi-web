import React, { useState } from "react";
import { addProgramModalContent } from "./data/data";
import AvailableProgramsModal from "./AvailableProgramsModal";

const MyPrograms = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePrograms, setActivePrograms] = useState([]);

  const handleJoinProgram = (program) => {
    setActivePrograms((prevPrograms) => {
      const alreadyJoined = prevPrograms.some(
        (activeProgram) => activeProgram.title === program.title,
      );

      if (alreadyJoined) {
        return prevPrograms;
      }

      return [
        ...prevPrograms,
        {
          id: program.id,
          title: program.title,
          coach: program.coach || "TBD",
          schedule: program.schedule || "TBD",
          progress: { completed: 0, total: 10 },
          status: "Active Program",
        },
      ];
    });
  };

  const handleCancelProgram = (programId) => {
    setActivePrograms((prevPrograms) =>
      prevPrograms.filter((program) => program.id !== programId),
    );
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-start mb-12">
          <div>
            <p className="text-green-500 font-semibold mb-2">MY PROGRAMS</p>

            <h1 className="text-4xl font-bold mb-2">
              Your active fitness programs
            </h1>

            <p className="text-gray-400">
              Track the training plans you joined and stay consistent with your
              weekly routine.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-green-500/10 border border-green-500/30 text-green-500 font-bold px-6 py-3 rounded-lg hover:bg-green-500/20 transition"
            >
              + {addProgramModalContent.addProgramButtonLabel}
            </button>

            <button className="bg-green-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-green-600 transition">
              Back to Home
            </button>
          </div>
        </div>

        <AvailableProgramsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          activePrograms={activePrograms}
          onJoinProgram={handleJoinProgram}
          onCancelProgram={handleCancelProgram}
        />
      </div>
    </div>
  );
};

export default MyPrograms;
