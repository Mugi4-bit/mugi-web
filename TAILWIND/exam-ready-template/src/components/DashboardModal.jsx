import { useState } from "react";
import { HiPlus, HiTrash, HiX } from "react-icons/hi";
import { programs } from "../data/siteData.js";

const DashboardModal = ({
  open,
  savedPrograms,
  onClose,
  onAddProgram,
  onRemoveProgram,
}) => {
  const [addPopupOpen, setAddPopupOpen] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] overflow-y-auto bg-neutral-950">
      <div className="mx-auto min-h-screen max-w-6xl px-4 py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
              Dashboard
            </p>
            <h2 className="mt-3 text-4xl font-black">My active programs</h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-neutral-300">
              Saved classes appear here with a simple progress layout.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setAddPopupOpen(true)}
              className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 px-5 py-3 font-bold text-cyan-200 hover:bg-cyan-300/10"
            >
              <HiPlus />
              Add Program
            </button>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-3 font-black text-black hover:bg-lime-200"
            >
              <HiX />
              Back Home
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {savedPrograms.map((program) => (
            <article
              key={program.id}
              className="rounded-lg border border-white/10 bg-neutral-900 p-5"
            >
              <span className="text-sm font-black uppercase tracking-[0.2em] text-lime-300">
                {program.status}
              </span>
              <h3 className="mt-3 text-2xl font-black">{program.title}</h3>
              <div className="mt-4 space-y-2 text-sm text-neutral-300">
                <p>Coach: {program.coach}</p>
                <p>Schedule: {program.schedule}</p>
              </div>

              <div className="mt-5 rounded-lg bg-neutral-950 p-4 text-sm text-neutral-200">
                Progress: {program.progress.completed} of {program.progress.total} sessions
              </div>

              <button
                onClick={() => onRemoveProgram(program.id)}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-rose-300/30 px-4 py-3 font-bold text-rose-200 hover:bg-rose-300/10"
              >
                <HiTrash />
                Cancel
              </button>
            </article>
          ))}
        </div>
      </div>

      {addPopupOpen && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto bg-black/80 p-4">
          <div className="w-full max-w-5xl rounded-lg border border-white/10 bg-neutral-950 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">
                  Add Program
                </p>
                <h3 className="mt-3 text-3xl font-black">
                  Choose from available classes
                </h3>
              </div>
              <button
                onClick={() => setAddPopupOpen(false)}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-3 font-bold hover:bg-white/10"
              >
                <HiX />
                Close
              </button>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {programs.map((program) => {
                const alreadySaved = savedPrograms.some((item) => item.id === program.id);
                const Icon = program.Icon;

                return (
                  <article
                    key={program.id}
                    className="rounded-lg border border-white/10 bg-neutral-900 p-5"
                  >
                    <Icon className="h-8 w-8 text-cyan-200" />
                    <h4 className="mt-4 text-xl font-black">{program.title}</h4>
                    <p className="mt-3 min-h-16 text-sm leading-7 text-neutral-300">
                      {program.description}
                    </p>
                    <button
                      disabled={alreadySaved}
                      onClick={() => onAddProgram(program)}
                      className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 font-black ${
                        alreadySaved
                          ? "bg-neutral-800 text-neutral-400"
                          : "bg-cyan-300 text-black hover:bg-cyan-200"
                      }`}
                    >
                      <HiPlus />
                      {alreadySaved ? "Added" : "Add"}
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardModal;
