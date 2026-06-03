import { HiCheck, HiX } from "react-icons/hi";
import { planDetails } from "../data/siteData.js";

const PlanModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[72] overflow-y-auto bg-neutral-950">
      <div className="mx-auto min-h-screen max-w-6xl px-4 py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">
              Plans
            </p>
            <h2 className="mt-3 text-4xl font-black">Membership options</h2>
          </div>
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-3 font-black text-black hover:bg-lime-200"
          >
            <HiX />
            Back Home
          </button>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {planDetails.map((plan) => (
            <article
              key={plan.id}
              className="rounded-lg border border-white/10 bg-neutral-900 p-5"
            >
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-200">
                {plan.timeline}
              </p>
              <h3 className="mt-4 text-2xl font-black">{plan.name}</h3>
              <p className="mt-3 text-4xl font-black text-lime-300">{plan.price}</p>
              <div className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <p key={feature} className="flex items-center gap-2 text-sm text-neutral-200">
                    <HiCheck className="text-lime-300" />
                    {feature}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanModal;
