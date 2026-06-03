import { HiCheck, HiInformationCircle, HiPlus } from "react-icons/hi";
import { programs } from "../data/siteData.js";

const ProgramSection = ({ savedPrograms, onCardClick, onSaveProgram }) => {
  return (
    <section id="programs" className="border-t border-white/10 bg-neutral-900 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
              Programs
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Choose your class
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-neutral-300">
            Click any card for the detail popup, or save it to the dashboard.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {programs.map((program) => {
            const alreadySaved = savedPrograms.some((item) => item.id === program.id);
            const Icon = program.Icon;

            return (
              <article
                key={program.id}
                className="rounded-lg border border-white/10 bg-neutral-950 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-lg bg-lime-300 p-3 text-black">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-lg border border-amber-200/30 px-3 py-1 text-xs font-bold text-amber-100">
                    {program.category}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-black">{program.title}</h3>
                <p className="mt-3 min-h-14 text-sm leading-7 text-neutral-300">
                  {program.description}
                </p>

                <div className="mt-5 space-y-2 text-sm text-neutral-300">
                  <p>Coach: {program.coach}</p>
                  <p>Schedule: {program.schedule}</p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => onCardClick(program)}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-4 py-3 text-sm font-bold hover:bg-white/10"
                  >
                    <HiInformationCircle />
                    Details
                  </button>
                  <button
                    onClick={() => onSaveProgram(program)}
                    disabled={alreadySaved}
                    className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-black ${
                      alreadySaved
                        ? "bg-neutral-800 text-neutral-400"
                        : "bg-cyan-300 text-black hover:bg-cyan-200"
                    }`}
                  >
                    {alreadySaved ? <HiCheck /> : <HiPlus />}
                    {alreadySaved ? "Saved" : "Save"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
