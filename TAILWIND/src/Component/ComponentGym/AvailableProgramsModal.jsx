import React, { useState } from "react";
import { programs } from "./data/data";

const accountFields = [
  { key: "fullName", label: "Full Name", type: "text" },
  { key: "email", label: "Email", type: "email" },
  { key: "phoneNumber", label: "Phone Number", type: "text" },
  { key: "city", label: "City", type: "text" },
  { key: "preferredProgram", label: "Preferred Program", type: "text" },
  { key: "password", label: "Password", type: "password" },
];

const createAccountForm = (account) => ({
  fullName: account?.fullName || "",
  email: account?.email || "",
  phoneNumber: account?.phoneNumber || "",
  city: account?.city || "",
  preferredProgram: account?.preferredProgram || "",
  password: account?.password || "",
  fitnessGoal: account?.fitnessGoal || "",
});

const AvailableProgramsModal = ({
  isOpen,
  onClose,
  currentUser = null,
  activePrograms = [],
  onJoinProgram = () => {},
  onCancelProgram = () => {},
  onUpdateAccount = () => {},
}) => {
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [isAccountPopupOpen, setIsAccountPopupOpen] = useState(false);
  const [isAccountSaved, setIsAccountSaved] = useState(false);
  const [accountForm, setAccountForm] = useState({});

  if (!isOpen) return null;

  const handleAddProgram = (program) => {
    onJoinProgram(program);
    setIsAddPopupOpen(false);
  };

  const handleAccountChange = (key, value) => {
    setIsAccountSaved(false);
    setAccountForm((prevForm) => ({
      ...prevForm,
      [key]: value,
    }));
  };

  const handleCloseAccountPopup = () => {
    setIsAccountPopupOpen(false);
    setIsAccountSaved(false);
  };

  const handleSaveAccount = (e) => {
    e.preventDefault();

    onUpdateAccount({
      ...currentUser,
      fullName: accountForm.fullName?.trim() || "FitZone Member",
      email: accountForm.email?.trim() || currentUser?.email || "",
      phoneNumber: accountForm.phoneNumber?.trim() || "",
      city: accountForm.city?.trim() || "",
      preferredProgram: accountForm.preferredProgram?.trim() || "",
      password: accountForm.password?.trim() || currentUser?.password || "",
      fitnessGoal: accountForm.fitnessGoal?.trim() || "",
    });
    setIsAccountSaved(true);
  };

  const getAccountValue = (key) => currentUser?.[key] || "Not set";

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
      <div className="min-h-screen p-8 max-w-6xl mx-auto">
        <div className="flex justify-between items-start mb-12">
          <div>
            <p className="text-green-500 font-semibold mb-2">MY PROGRAMS</p>
            <h1 className="text-4xl font-bold mb-2 text-white">
              Your active fitness programs
            </h1>
            <p className="text-gray-400">
              Track the training plans you joined and stay consistent with your
              weekly routine.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setIsAddPopupOpen(true)}
              className="bg-green-500/10 border border-green-500/30 text-green-500 font-bold px-6 py-3 rounded-lg hover:bg-green-500/20 transition"
            >
              + Add Program
            </button>

            <button
              onClick={onClose}
              className="bg-green-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-green-600 transition"
            >
              Back to Home
            </button>
          </div>
        </div>

        {currentUser && (
          <div className="mb-10 rounded-2xl border border-gray-800 bg-gray-900 p-6 md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="mb-3 text-sm font-bold tracking-[0.3em] text-green-500">
                  ACCOUNT OVERVIEW
                </p>
                <h2 className="text-3xl font-bold text-white">
                  {getAccountValue("fullName")}
                </h2>
                <p className="mt-4 max-w-3xl text-gray-400">
                  Keep your membership details and training goals together with
                  your active programs.
                </p>
              </div>

              <button
                onClick={() => {
                  setAccountForm(createAccountForm(currentUser));
                  setIsAccountSaved(false);
                  setIsAccountPopupOpen(true);
                }}
                className="self-start rounded-lg bg-green-500 px-6 py-3 font-bold text-black transition hover:bg-green-600"
              >
                Edit Account
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-4">
              <div className="rounded-xl bg-green-500/10 p-5">
                <p className="mb-3 text-xs font-bold tracking-[0.3em] text-green-500">
                  EMAIL
                </p>
                <p className="break-words font-semibold text-white">
                  {getAccountValue("email")}
                </p>
              </div>

              <div className="rounded-xl bg-gray-800 p-5">
                <p className="mb-3 text-xs font-bold tracking-[0.3em] text-gray-400">
                  PHONE
                </p>
                <p className="break-words font-semibold text-white">
                  {getAccountValue("phoneNumber")}
                </p>
              </div>

              <div className="rounded-xl bg-gray-800 p-5">
                <p className="mb-3 text-xs font-bold tracking-[0.3em] text-gray-400">
                  CITY
                </p>
                <p className="break-words font-semibold text-white">
                  {getAccountValue("city")}
                </p>
              </div>

              <div className="rounded-xl bg-gray-800 p-5">
                <p className="mb-3 text-xs font-bold tracking-[0.3em] text-gray-400">
                  FITNESS GOAL
                </p>
                <p className="break-words font-semibold text-white">
                  {getAccountValue("fitnessGoal")}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mb-12">
          {activePrograms.length === 0 ? (
            <div className="rounded-2xl border border-gray-800 bg-gray-900 p-10 text-center">
              <h2 className="text-2xl font-bold text-white">
                No programs added yet
              </h2>
              <p className="mt-4 text-gray-400">
                Press the + Add Program button to build your active workout
                plan.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {activePrograms.map((program) => (
                <div
                  key={program.id}
                  className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
                >
                  <span className="text-green-500 text-sm font-semibold">
                    {program.status}
                  </span>

                  <h3 className="text-2xl font-bold text-white mt-3 mb-6">
                    {program.title}
                  </h3>

                  <div className="space-y-3 text-gray-400 mb-6">
                    <p>Coach: {program.coach}</p>
                    <p>Schedule: {program.schedule}</p>
                  </div>

                  <div className="bg-gray-800 rounded-xl p-4 mb-4">
                    <p className="text-gray-300">
                      Progress: {program.progress.completed} of{" "}
                      {program.progress.total} sessions completed
                    </p>
                  </div>

                  <button
                    onClick={() => onCancelProgram(program.id)}
                    className="w-full border border-red-500/30 text-red-300 font-bold py-3 rounded-xl hover:bg-red-500/10 transition"
                  >
                    Cancel
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-white">
            Available Programs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((program) => (
              <div
                key={program.id}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
              >
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {program.title}
                </h3>
                <p className="text-gray-400 text-sm">{program.description}</p>
              </div>
            ))}
          </div>
        </div>

        {isAddPopupOpen && (
          <div className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-6">
            <div className="bg-black border border-gray-800 rounded-2xl w-full max-w-6xl p-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-green-500 font-semibold mb-2 tracking-widest">
                    ADD PROGRAMS
                  </p>

                  <h1 className="text-4xl font-bold mb-4 text-white">
                    Choose from available programs
                  </h1>

                  <p className="text-gray-400">
                    Add one of the existing fitness programs to your active
                    plan.
                  </p>
                </div>

                <button
                  onClick={() => setIsAddPopupOpen(false)}
                  className="bg-gray-800 text-white font-bold px-5 py-2 rounded-full hover:bg-gray-700 transition"
                >
                  Close
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {programs.map((program) => {
                  const alreadyJoined = activePrograms.some(
                    (p) => p.title === program.title,
                  );

                  return (
                    <div
                      key={program.id}
                      className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
                    >
                      <div className="text-5xl mb-5">{program.icon}</div>

                      <p className="text-green-500 font-bold text-sm mb-3">
                        Fitness Program
                      </p>

                      <h3 className="text-2xl font-bold mb-4 text-white">
                        {program.title}
                      </h3>

                      <p className="text-gray-400 text-sm mb-6 leading-6">
                        {program.description}
                      </p>

                      <button
                        onClick={() => handleAddProgram(program)}
                        disabled={alreadyJoined}
                        className={`w-full font-bold py-3 rounded-xl transition ${
                          alreadyJoined
                            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                            : "bg-green-500 text-black hover:bg-green-600"
                        }`}
                      >
                        {alreadyJoined ? "Added" : "Add to My Programs"}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {isAccountPopupOpen && (
          <div className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center overflow-y-auto p-6">
            <div className="relative w-full max-w-4xl rounded-2xl border border-gray-800 bg-gray-900 p-8">
              <div className="mb-8 pr-28">
                <div>
                  <p className="mb-3 text-sm font-bold tracking-[0.3em] text-green-500">
                    ACCOUNT
                  </p>

                  <h1 className="text-4xl font-bold text-white">
                    Update your fitness profile
                  </h1>

                  <p className="mt-4 max-w-3xl text-gray-400">
                    Keep your membership details and training goals together
                    with your active programs.
                  </p>
                </div>

                <button
                  onClick={handleCloseAccountPopup}
                  className="absolute right-8 top-8 rounded-full bg-gray-800 px-5 py-2 font-bold text-white transition hover:bg-gray-700"
                >
                  Close
                </button>
              </div>

              <form onSubmit={handleSaveAccount}>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {accountFields.map((field) => (
                    <label
                      key={field.key}
                      className="block text-sm font-semibold text-slate-300"
                    >
                      {field.label}
                      <input
                        type={field.type}
                        value={accountForm[field.key] || ""}
                        onChange={(e) =>
                          handleAccountChange(field.key, e.target.value)
                        }
                        className="mt-2 w-full rounded-2xl border border-slate-700 bg-black px-4 py-3 text-white outline-none transition focus:border-lime-400"
                      />
                    </label>
                  ))}
                </div>

                <label className="mt-5 block text-sm font-semibold text-slate-300">
                  Fitness Goal
                  <textarea
                    value={accountForm.fitnessGoal || ""}
                    onChange={(e) =>
                      handleAccountChange("fitnessGoal", e.target.value)
                    }
                    rows={4}
                    className="mt-2 w-full resize-none rounded-2xl border border-slate-700 bg-black px-4 py-3 text-white outline-none transition focus:border-lime-400"
                  />
                </label>
                {isAccountSaved && (
                  <div className="mb-6 rounded-2xl border border-green-500/30 bg-green-500/10 px-5 py-4 font-semibold text-green-300">
                    Account details saved successfully.
                  </div>
                )}

                <button
                  type="submit"
                  className="mt-8 rounded-2xl bg-green-500 px-6 py-3 font-bold text-black transition hover:bg-green-600"
                >
                  Save Account Details
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AvailableProgramsModal;
