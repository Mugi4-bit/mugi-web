import React from "react";
import { HiX } from "react-icons/hi";
import { authContent } from "./data/data";

const AuthModal = ({ open, mode = "login", onClose, onSwitchMode }) => {
  if (!open) return null;

  const content = authContent[mode] || authContent.login;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 "
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl border border-gray-700 bg-black p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-slate-800 px-3 py-2 text-sm text-white transition hover:bg-slate-700"
        >
          Close
        </button>

        <span className="text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
          {content.eyebrow}
        </span>
        <h2 className="mt-3 text-3xl font-bold text-white">{content.title}</h2>
        <p className="mt-4 text-sm leading-7 text-slate-400">
          {content.description}
        </p>

        <div className="mt-8 space-y-6">
          {content.fields.map((field) => (
            <label key={field.label} className="block text-sm text-slate-300">
              {field.label}
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-lime-400"
              />
            </label>
          ))}

          <button
            type="button"
            className="w-full rounded-2xl bg-lime-400 px-6 py-3 text-base font-semibold text-black transition hover:bg-lime-300"
          >
            {content.primaryLabel}
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-slate-400">
          {content.secondaryText}{" "}
          <span
            onClick={() =>
              onSwitchMode?.(mode === "signup" ? "login" : "signup")
            }
            className="font-semibold text-lime-400  cursor-pointer"
          >
            {content.secondaryAction}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
