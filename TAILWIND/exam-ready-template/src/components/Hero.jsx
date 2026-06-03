import { HiArrowRight, HiClipboardList } from "react-icons/hi";
import { siteInfo } from "../data/siteData.js";

const Hero = ({ onStart, onViewPlans }) => {
  return (
    <section id="home" className="bg-neutral-950">
      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">
            {siteInfo.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            {siteInfo.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-neutral-300 md:text-lg">
            {siteInfo.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={onStart}
              className="inline-flex items-center gap-2 rounded-lg bg-lime-300 px-6 py-3 font-black text-black hover:bg-lime-200"
            >
              <HiArrowRight />
              Start Today
            </button>
            <button
              onClick={onViewPlans}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-bold hover:bg-white/10"
            >
              <HiClipboardList />
              View Plans
            </button>
          </div>
        </div>

        <div className="relative">
          <img
            src={siteInfo.heroImage}
            alt={siteInfo.brand}
            className="aspect-[4/3] w-full rounded-lg object-cover"
          />
          <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/15 bg-black/70 p-4 backdrop-blur">
            <p className="text-sm font-bold text-cyan-200">3 programs</p>
            <p className="mt-1 text-sm text-neutral-300">
              Flexible classes, clear schedules, simple progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
