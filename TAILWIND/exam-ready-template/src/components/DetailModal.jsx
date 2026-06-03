import { HiCheck, HiPlus, HiX } from "react-icons/hi";

const DetailModal = ({ item, onClose, onSaveProgram }) => {
  if (!item) return null;

  const Icon = item.Icon;
  const isProgram = Boolean(item.price);

  return (
    <div
      className="fixed inset-0 z-[75] flex items-center justify-center bg-black/75 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl rounded-lg border border-white/10 bg-neutral-950 p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 text-cyan-200">
              {Icon && <Icon className="h-6 w-6" />}
              <span className="text-sm font-black uppercase tracking-[0.2em]">
                {item.category || item.role}
              </span>
            </div>
            <h2 className="mt-4 text-4xl font-black">{item.title || item.name}</h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg border border-white/15 p-2 hover:bg-white/10"
            aria-label="Close"
          >
            <HiX />
          </button>
        </div>

        {item.image && (
          <img
            src={item.image}
            alt={item.name}
            className="mt-6 aspect-[16/9] w-full rounded-lg object-cover"
          />
        )}

        <p className="mt-6 text-base leading-8 text-neutral-300">{item.details}</p>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {item.highlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-3 text-sm"
            >
              <HiCheck className="text-lime-300" />
              {highlight}
            </div>
          ))}
        </div>

        {isProgram && (
          <button
            onClick={() => onSaveProgram(item)}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-3 font-black text-black hover:bg-lime-200"
          >
            <HiPlus />
            Save Program
          </button>
        )}
      </div>
    </div>
  );
};

export default DetailModal;
