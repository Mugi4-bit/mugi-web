import React from "react";
import { programmingCourses } from "./data/data";
import { HiX } from "react-icons/hi";

const ProgrammingModal = ({
  isOpen,
  onClose,
  activePrograms = [],
  onJoinProgram = () => {},
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gray-900  p-6 flex justify-between items-center">
          <div>
            <p className="text-green-500 font-semibold mb-2">
              PROGRAMMING TRACKS
            </p>
            <h2 className="text-3xl font-bold text-white">
              Start coding with structured beginner-friendly lessons
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-white w-20 h-10 rounded-xl bg-gray-700 hover:bg-gray-600 text-xl "
            aria-label="Close"
          >
            Close
          </button>
        </div>

        <div className="px-6 pb-6">
          <p className="text-gray-400 text-lg">
            Here is a demo overview of programming courses students can start
            today, from web basics to React projects.
          </p>
        </div>

        <div className="px-6 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programmingCourses.map((course) => {
              const alreadyJoined = activePrograms.some(
                (program) => program.title === course.title,
              );

              return (
                <div key={course.id} className="bg-black/70 rounded-lg p-6 ">
                  <div className="mb-4">
                    <span className="text-green-500 text-sm font-semibold">
                      {course.level.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {course.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    {course.description}
                  </p>

                  <div className="space-y-2 mb-4 text-gray-400 text-sm">
                    <p>
                      <span className="font-semibold">Duration:</span>{" "}
                      {course.duration}
                    </p>
                    <p>
                      <span className="font-semibold">Lessons:</span>{" "}
                      {course.lessons}
                    </p>
                  </div>

                  <div className=" pt-4">
                    <ul className="space-y-2">
                      {course.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          className="text-white text-sm flex items-center gap-2 w-full h-10 bg-green-900 rounded-xl"
                        >
                          <span className="text-green-500 mt-1"></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onJoinProgram(course)}
                    disabled={alreadyJoined}
                    className={`mt-6 w-full font-bold py-3 rounded-xl transition ${
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
    </div>
  );
};

export default ProgrammingModal;
