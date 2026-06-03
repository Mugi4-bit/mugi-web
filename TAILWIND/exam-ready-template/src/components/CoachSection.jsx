import { HiInformationCircle } from "react-icons/hi";
import { coaches } from "../data/siteData.js";

const CoachSection = ({ onCardClick }) => {
  return (
    <section id="coaches" className="border-t border-white/10 bg-neutral-950 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">
          Coaches
        </p>
        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          Meet the team
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {coaches.map((coach) => {
            const Icon = coach.Icon;

            return (
              <article
                key={coach.id}
                className="grid gap-5 rounded-lg border border-white/10 bg-neutral-900 p-5 md:grid-cols-[180px_1fr]"
              >
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="aspect-square w-full rounded-lg object-cover"
                />
                <div>
                  <div className="flex items-center gap-2 text-cyan-200">
                    <Icon />
                    <span className="text-sm font-bold">{coach.role}</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-black">{coach.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-300">
                    {coach.details}
                  </p>
                  <button
                    onClick={() => onCardClick(coach)}
                    className="mt-5 inline-flex items-center gap-2 rounded-lg bg-lime-300 px-4 py-3 text-sm font-black text-black hover:bg-lime-200"
                  >
                    <HiInformationCircle />
                    Read Advice
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

export default CoachSection;
