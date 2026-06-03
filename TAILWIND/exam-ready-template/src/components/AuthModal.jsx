import { useEffect, useState } from "react";
import { HiX } from "react-icons/hi";
import { authContent } from "../data/siteData.js";

const AuthModal = ({ open, mode, onClose, onSwitchMode, onSubmit }) => {
  const content = authContent[mode] || authContent.login;
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    setFormValues({});
  }, [mode, open]);

  if (!open) return null;

  const handleChange = (label, value) => {
    setFormValues((values) => ({ ...values, [label]: value }));
  };

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-lg border border-white/10 bg-neutral-950 p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg border border-white/10 p-2 hover:bg-white/10"
          aria-label="Close"
        >
          <HiX />
        </button>

        <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">
          {content.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-black">{content.title}</h2>
        <p className="mt-3 text-sm leading-7 text-neutral-300">
          {content.description}
        </p>

        <form
          className="mt-6 space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit(formValues);
          }}
        >
          {content.fields.map((field) => (
            <label key={field.label} className="block text-sm font-bold">
              {field.label}
              <input
                type={field.type}
                placeholder={field.placeholder}
                value={formValues[field.label] || ""}
                onChange={(event) => handleChange(field.label, event.target.value)}
                className="mt-2 w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 font-normal outline-none focus:border-lime-300"
              />
            </label>
          ))}

          <button
            type="submit"
            className="w-full rounded-lg bg-lime-300 px-5 py-3 font-black text-black hover:bg-lime-200"
          >
            {content.button}
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-neutral-300">
          {content.switchText}{" "}
          <button
            className="font-black text-cyan-200"
            onClick={() => onSwitchMode(mode === "login" ? "signup" : "login")}
          >
            {content.switchAction}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
