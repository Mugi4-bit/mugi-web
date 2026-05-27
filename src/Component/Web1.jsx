import React, { useState } from "react";

import Topbar from "./ComponentGym/Topbar";
import Intro from "./ComponentGym/Intro";
import ProgramList from "./ComponentGym/ProgramList";
import TrainerSection from "./ComponentGym/TrainerSection";
import BottomFooter from "./ComponentGym/BottomFooter";
import AuthModal from "./ComponentGym/AuthModal";

function Web1() {
  const [activePrograms, setActivePrograms] = useState([]);
  const [accountInfo, setAccountInfo] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [authMode, setAuthMode] = useState("login");
  const [authMessage, setAuthMessage] = useState("");
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [pendingProgram, setPendingProgram] = useState(null);

  const addProgram = (program) => {
    setActivePrograms((prevPrograms) => {
      const alreadyJoined = prevPrograms.some(
        (activeProgram) => activeProgram.title === program.title,
      );

      if (alreadyJoined) {
        return prevPrograms;
      }

      return [
        ...prevPrograms,
        {
          id: program.id,
          title: program.title,
          coach: program.coach || "FitZone Coach",
          schedule: program.schedule || program.duration || "TBD",
          progress: { completed: 0, total: program.lessons || 10 },
          status: "Active Program",
        },
      ];
    });
  };

  const handleJoinProgram = (program) => {
    if (!currentUser) {
      setPendingProgram(program);
      setAuthMode("login");
      setAuthMessage("Please log in to join a program.");
      setIsAuthModalOpen(true);
      return;
    }

    addProgram(program);
  };

  const handleCancelProgram = (programId) => {
    setActivePrograms((prevPrograms) =>
      prevPrograms.filter((program) => program.id !== programId),
    );
  };

  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setAuthMessage("");
    setPendingProgram(null);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
    setPendingProgram(null);
  };

  const handleAuthSubmit = (formValues) => {
    const email = formValues.Email?.trim();
    const password = formValues.Password?.trim();

    if (!email || !password) {
      setAuthMessage("Please enter your email and password.");
      return;
    }

    if (authMode === "signup") {
      const newAccount = {
        fullName: formValues["Full Name"]?.trim() || "FitZone Member",
        email,
        password,
        preferredProgram: formValues["Preferred Program"]?.trim() || "",
      };

      setAccountInfo(newAccount);
      setAuthMode("login");
      setAuthMessage("Please log in to join a program.");
      setIsAuthModalOpen(true);

      return;
    }

    if (!accountInfo) {
      setAuthMessage("No account found. Please register first.");
      return;
    }

    if (accountInfo.email !== email || accountInfo.password !== password) {
      setAuthMessage("Email or password is incorrect.");
      return;
    }

    setCurrentUser(accountInfo);
    setAuthMessage("");
    setIsAuthModalOpen(false);

    if (pendingProgram) {
      addProgram(pendingProgram);
      setPendingProgram(null);
    }
  };

  return (
    <>
      <div>
        <Topbar
          currentUser={currentUser}
          activePrograms={activePrograms}
          onJoinProgram={handleJoinProgram}
          onCancelProgram={handleCancelProgram}
          onOpenAuth={openAuthModal}
          onLogout={() => setCurrentUser(null)}
        ></Topbar>
        <Intro
          activePrograms={activePrograms}
          onJoinProgram={handleJoinProgram}
        ></Intro>
        <ProgramList></ProgramList>
        <TrainerSection></TrainerSection>
        <BottomFooter></BottomFooter>
        <AuthModal
          open={isAuthModalOpen}
          mode={authMode}
          message={authMessage}
          onClose={closeAuthModal}
          onSubmit={handleAuthSubmit}
          onSwitchMode={(mode) => {
            setAuthMode(mode);
            setAuthMessage("");
          }}
        />
      </div>
    </>
  );
}

export default Web1;
