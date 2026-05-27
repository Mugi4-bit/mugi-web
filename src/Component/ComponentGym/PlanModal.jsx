import React from "react";
import { HiX } from "react-icons/hi";
import { planDetails } from "./data/data.jsx";

const PlanModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90">
      <div className="bg-gray-900 w-full h-full overflow-hidden">
        <div className="sticky top-0 z-10 flex flex-col gap-4 border-b border-white/10 bg-gray-900 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-green-500 text-sm font-semibold uppercase tracking-[0.2em]">
              View Plans
            </p>
            <h2 className="mt-2 text-4xl font-bold text-white">
              Detailed training plans
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-400 md:text-base">
              Explore the structure, timeline, and weekly goals behind each
              FitZone program.
            </p>
          </div>
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-2xl bg-green-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-green-300"
          >
            Back to Home
          </button>
        </div>

        <div className="grid grid-cols-1 gap-3 p-6 md:grid-cols-3 justify-items-center">
          {planDetails.map((plan) => (
            <div
              key={plan.id}
              className="w-full max-w-md rounded-3xl bg-slate-950/90 border border-white/10 p-6 shadow-xl shadow-black/20"
            >
              <p className="text-green-500 text-sm font-semibold uppercase tracking-[0.2em]">
                {plan.duration}
              </p>
              <h3 className="mt-4 text-3xl font-bold text-white">
                {plan.title}
              </h3>
              <p className="mt-4 text-sm font-semibold text-white/90">
                Schedule:{" "}
                <span className="font-normal text-slate-300">
                  {plan.schedule}
                </span>
              </p>
              <p className="mt-4 text-sm text-slate-400">{plan.goal}</p>

              <div className="mt-6 space-y-3">
                {plan.milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-slate-900/90 px-4 py-3 text-sm text-slate-200"
                  >
                    {milestone}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanModal;
