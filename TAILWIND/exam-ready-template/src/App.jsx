import { useState } from "react";
import AuthModal from "./components/AuthModal.jsx";
import DashboardModal from "./components/DashboardModal.jsx";
import DetailModal from "./components/DetailModal.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import PlanModal from "./components/PlanModal.jsx";
import PricingSection from "./components/PricingSection.jsx";
import ProgramSection from "./components/ProgramSection.jsx";
import CoachSection from "./components/CoachSection.jsx";
import { programs } from "./data/siteData.js";

const makeSavedProgram = (program) => ({
  id: program.id,
  title: program.title,
  coach: program.coach || "TBD",
  schedule: program.schedule || "TBD",
  status: "Active",
  progress: { completed: 0, total: 10 },
});

function App() {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [currentUser, setCurrentUser] = useState(null);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [planOpen, setPlanOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [savedPrograms, setSavedPrograms] = useState([
    makeSavedProgram(programs[0]),
  ]);

  const openAuth = (mode) => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  const handleAuthSubmit = (formValues) => {
    setCurrentUser({
      name: formValues["Full Name"] || formValues.Email || "Student",
    });
    setAuthOpen(false);
  };

  const handleSaveProgram = (program) => {
    setSavedPrograms((currentPrograms) => {
      const alreadySaved = currentPrograms.some((item) => item.id === program.id);

      if (alreadySaved) {
        return currentPrograms;
      }

      return [...currentPrograms, makeSavedProgram(program)];
    });
  };

  const handleRemoveProgram = (programId) => {
    setSavedPrograms((currentPrograms) =>
      currentPrograms.filter((program) => program.id !== programId),
    );
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar
        currentUser={currentUser}
        onOpenAuth={openAuth}
        onLogout={() => setCurrentUser(null)}
        onOpenDashboard={() => setDashboardOpen(true)}
      />

      <main>
        <Hero
          onStart={() => setDashboardOpen(true)}
          onViewPlans={() => setPlanOpen(true)}
        />
        <ProgramSection
          savedPrograms={savedPrograms}
          onCardClick={setSelectedItem}
          onSaveProgram={handleSaveProgram}
        />
        <CoachSection onCardClick={setSelectedItem} />
        <PricingSection onOpenPlans={() => setPlanOpen(true)} />
      </main>

      <Footer />

      <AuthModal
        open={authOpen}
        mode={authMode}
        onClose={() => setAuthOpen(false)}
        onSwitchMode={setAuthMode}
        onSubmit={handleAuthSubmit}
      />

      <DashboardModal
        open={dashboardOpen}
        savedPrograms={savedPrograms}
        onClose={() => setDashboardOpen(false)}
        onAddProgram={handleSaveProgram}
        onRemoveProgram={handleRemoveProgram}
      />

      <PlanModal open={planOpen} onClose={() => setPlanOpen(false)} />

      <DetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onSaveProgram={handleSaveProgram}
      />
    </div>
  );
}

export default App;
