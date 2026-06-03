import { HiClipboardList } from "react-icons/hi";
import { contactItems, planDetails } from "../data/siteData.js";

const PricingSection = ({ onOpenPlans }) => {
  return (
    <section id="pricing" className="border-t border-white/10 bg-neutral-900 py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Simple plans
          </h2>
          <button
            onClick={onOpenPlans}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-3 font-black text-black hover:bg-lime-200"
          >
            <HiClipboardList />
            Compare Plans
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {planDetails.map((plan) => (
            <article
              key={plan.id}
              className="rounded-lg border border-white/10 bg-neutral-950 p-5"
            >
              <h3 className="font-black">{plan.name}</h3>
              <p className="mt-3 text-3xl font-black text-lime-300">{plan.price}</p>
              <p className="mt-2 text-sm text-neutral-300">{plan.timeline}</p>
            </article>
          ))}
        </div>
      </div>

      <div id="contact" className="mx-auto mt-10 grid max-w-6xl gap-5 px-4 md:grid-cols-2">
        {contactItems.map((item) => {
          const Icon = item.Icon;

          return (
            <div key={item.label} className="rounded-lg border border-white/10 bg-neutral-950 p-5">
              <Icon className="h-6 w-6 text-cyan-200" />
              <p className="mt-3 text-sm font-black uppercase tracking-[0.2em] text-neutral-400">
                {item.label}
              </p>
              <p className="mt-2 text-lg font-bold">{item.value}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PricingSection;
