import React from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import AuthModal from "./AuthModal";
import AvailableProgramsModal from "./AvailableProgramsModal";

// Logo
// Sign Up Login
// Home Products Solutions Pricing Contact
const Topbar = ({
  activePrograms = [],
  onJoinProgram = () => {},
  onCancelProgram = () => {},
}) => {
  const [activeLink, setActiveLink] = useState("true");
  const [authMode, setAuthMode] = useState("login");
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isProgramOpen, setIsProgramOpen] = useState(false);

  return (
    <div>
      <div className="bg-black shadow-sm p-2 flex justify-between items-center">
        <div className="flex items-center">
          <div className="font-extrabold text-green-500 text-xl md:ml-20">
            FitZone
          </div>
        </div>
        <div className="flex sm:hidden md:block text-white">
          <div className="flex gap-3">
            <a href="#">Home</a>
            <a href="#programs">Programs</a>
            <a href="#trainers">Trainers</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="flex gap-4 mr-60 md:block sm:hidden">
          <button
            className="text-green-300 w-28 h-10 rounded-xl bg-black border-2 border-gray-700 font-bold hover:bg-slate-900"
            onClick={() => setIsProgramOpen(true)}
          >
            My Programs
          </button>
          <button
            onClick={() => {
              setAuthMode("login");
              setIsAuthModalOpen(true);
            }}
            className="bg-green-500 w-25 h-10 rounded-xl hover:bg-green-600 transition font-bold"
          >
            Login
          </button>
          <button
            onClick={() => {
              setAuthMode("signup");
              setIsAuthModalOpen(true);
            }}
            className="bg-black text-white w-28 h-10 rounded-xl hover:bg-slate-900 transition ml-3 border-gray-700 border-2 font-bold"
          >
            Sign Up
          </button>
        </div>
        {activeLink ? (
          <HiX
            onClick={() => setActiveLink(false)}
            className="w-8 h-8 md:hidden text-white"
          />
        ) : (
          <HiMenu
            onClick={() => setActiveLink(true)}
            className="w-8 h-8 md:hidden text-white"
          />
        )}
      </div>
      {activeLink && (
        <div className="flex flex-col md:hidden md:block bg-black shadow-sm p-4 text-white">
          <a href="#">Home</a>
          <a href="#programs">Programs</a>
          <a href="#trainers">Trainers</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
          <div className="flex flex-row">
            <button
              onClick={() => setIsProgramOpen(true)}
              className="text-green-300 w-28 h-10 rounded-xl bg-black border-2 border-gray-700 font-bold hover:bg-slate-900"
            >
              My Programs
            </button>
            <button
              onClick={() => {
                setAuthMode("login");
                setIsAuthModalOpen(true);
              }}
              className="bg-green-500 w-25 h-10 rounded-xl hover:bg-green-600 transition font-bold text-black"
            >
              Login
            </button>
            <button
              onClick={() => {
                setAuthMode("signup");
                setIsAuthModalOpen(true);
              }}
              className="bg-black text-white w-28 h-10 rounded-xl hover:bg-slate-900 transition ml-3 border-2 border-gray-700 font-bold"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}

      <AuthModal
        open={isAuthModalOpen}
        mode={authMode}
        onClose={() => setIsAuthModalOpen(false)}
        onSwitchMode={(mode) => setAuthMode(mode)}
      />
      <AvailableProgramsModal
        isOpen={isProgramOpen}
        onClose={() => setIsProgramOpen(false)}
        activePrograms={activePrograms}
        onJoinProgram={onJoinProgram}
        onCancelProgram={onCancelProgram}
      />
    </div>
  );
};

export default Topbar;
