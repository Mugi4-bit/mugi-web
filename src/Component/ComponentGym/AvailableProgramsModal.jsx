import React, { useState } from "react";
import { programs } from "./data/data";

const AvailableProgramsModal = ({
  isOpen,
  onClose,
  activePrograms = [],
  onJoinProgram = () => {},
  onCancelProgram = () => {},
}) => {
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);

  if (!isOpen) return null;

  const handleAddProgram = (program) => {
    onJoinProgram(program);
    setIsAddPopupOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
      <div className="min-h-screen p-8 max-w-6xl mx-auto">
        <div className="flex justify-between items-start mb-12">
          <div>
            <p className="text-green-500 font-semibold mb-2">MY PROGRAMS</p>
            <h1 className="text-4xl font-bold mb-2 text-white">
              Your active fitness programs
            </h1>
            <p className="text-gray-400">
              Track the training plans you joined and stay consistent with your
              weekly routine.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setIsAddPopupOpen(true)}
              className="bg-green-500/10 border border-green-500/30 text-green-500 font-bold px-6 py-3 rounded-lg hover:bg-green-500/20 transition"
            >
              + Add Program
            </button>

            <button
              onClick={onClose}
              className="bg-green-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-green-600 transition"
            >
              Back to Home
            </button>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Your Programs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activePrograms.map((program) => (
              <div
                key={program.id}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
              >
                <span className="text-green-500 text-sm font-semibold">
                  {program.status}
                </span>

                <h3 className="text-2xl font-bold text-white mt-3 mb-6">
                  {program.title}
                </h3>

                <div className="space-y-3 text-gray-400 mb-6">
                  <p>Coach: {program.coach}</p>
                  <p>Schedule: {program.schedule}</p>
                </div>

                <div className="bg-gray-800 rounded-xl p-4 mb-4">
                  <p className="text-gray-300">
                    Progress: {program.progress.completed} of{" "}
                    {program.progress.total} sessions completed
                  </p>
                </div>

                <button
                  onClick={() => onCancelProgram(program.id)}
                  className="w-full border border-red-500/30 text-red-300 font-bold py-3 rounded-xl hover:bg-red-500/10 transition"
                >
                  Cancel
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-white">
            Available Programs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((program) => (
              <div
                key={program.id}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
              >
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {program.title}
                </h3>
                <p className="text-gray-400 text-sm">{program.description}</p>
              </div>
            ))}
          </div>
        </div>

        {isAddPopupOpen && (
          <div className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-6">
            <div className="bg-black border border-gray-800 rounded-2xl w-full max-w-6xl p-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-green-500 font-semibold mb-2 tracking-widest">
                    ADD PROGRAMS
                  </p>

                  <h1 className="text-4xl font-bold mb-4 text-white">
                    Choose from available programs
                  </h1>

                  <p className="text-gray-400">
                    Add one of the existing fitness programs to your active
                    plan.
                  </p>
                </div>

                <button
                  onClick={() => setIsAddPopupOpen(false)}
                  className="bg-gray-800 text-white font-bold px-5 py-2 rounded-full hover:bg-gray-700 transition"
                >
                  Close
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {programs.map((program) => {
                  const alreadyJoined = activePrograms.some(
                    (p) => p.title === program.title,
                  );

                  return (
                    <div
                      key={program.id}
                      className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
                    >
                      <div className="text-5xl mb-5">{program.icon}</div>

                      <p className="text-green-500 font-bold text-sm mb-3">
                        Fitness Program
                      </p>

                      <h3 className="text-2xl font-bold mb-4 text-white">
                        {program.title}
                      </h3>

                      <p className="text-gray-400 text-sm mb-6 leading-6">
                        {program.description}
                      </p>

                      <button
                        onClick={() => handleAddProgram(program)}
                        disabled={alreadyJoined}
                        className={`w-full font-bold py-3 rounded-xl transition ${
                          alreadyJoined
                            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                            : "bg-green-500 text-black hover:bg-green-600"
                        }`}
                      >
                        {alreadyJoined ? "Added" : "Add to My Programs"}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AvailableProgramsModal;
