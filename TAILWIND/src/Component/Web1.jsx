import React, { useState } from "react";

import Topbar from "./ComponentGym/Topbar";
import Intro from "./ComponentGym/Intro";
import ProgramList from "./ComponentGym/ProgramList";
import TrainerSection from "./ComponentGym/TrainerSection";
import BottomFooter from "./ComponentGym/BottomFooter";

function Web1() {
  const [activePrograms, setActivePrograms] = useState([]);

  const handleJoinProgram = (program) => {
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

  const handleCancelProgram = (programId) => {
    setActivePrograms((prevPrograms) =>
      prevPrograms.filter((program) => program.id !== programId),
    );
  };

  return (
    <>
      <div>
        <Topbar
          activePrograms={activePrograms}
          onJoinProgram={handleJoinProgram}
          onCancelProgram={handleCancelProgram}
        ></Topbar>
        <Intro
          activePrograms={activePrograms}
          onJoinProgram={handleJoinProgram}
        ></Intro>
        <ProgramList></ProgramList>
        <TrainerSection></TrainerSection>
        <BottomFooter></BottomFooter>
      </div>
    </>
  );
}

export default Web1;
