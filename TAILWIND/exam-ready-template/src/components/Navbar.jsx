import { useState } from "react";
import { HiLogin, HiLogout, HiMenu, HiTemplate, HiUserAdd, HiX } from "react-icons/hi";
import { navLinks, siteInfo } from "../data/siteData.js";

const Navbar = ({
  currentUser,
  onOpenAuth,
  onLogout,
  onOpenDashboard,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#home" className="text-xl font-black text-lime-300">
          {siteInfo.brand}
        </a>

        <nav className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {currentUser ? (
            <>
              <button
                onClick={onOpenDashboard}
                className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 px-4 py-2 text-sm font-bold text-cyan-200 hover:bg-cyan-300/10"
              >
                <HiTemplate />
                My Programs
              </button>
              <button
                onClick={onLogout}
                className="inline-flex items-center gap-2 rounded-lg border border-rose-300/30 px-4 py-2 text-sm font-bold text-rose-200 hover:bg-rose-300/10"
              >
                <HiLogout />
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => onOpenAuth("login")}
                className="inline-flex items-center gap-2 rounded-lg bg-lime-300 px-4 py-2 text-sm font-black text-black hover:bg-lime-200"
              >
                <HiLogin />
                Login
              </button>
              <button
                onClick={() => onOpenAuth("signup")}
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm font-bold hover:bg-white/10"
              >
                <HiUserAdd />
                Sign Up
              </button>
            </>
          )}
        </div>

        <button
          className="rounded-lg border border-white/20 p-2 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm text-neutral-300">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 flex flex-wrap gap-3">
            {currentUser ? (
              <>
                <button
                  onClick={onOpenDashboard}
                  className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 px-4 py-2 text-sm font-bold text-cyan-200"
                >
                  <HiTemplate />
                  My Programs
                </button>
                <button
                  onClick={onLogout}
                  className="inline-flex items-center gap-2 rounded-lg border border-rose-300/30 px-4 py-2 text-sm font-bold text-rose-200"
                >
                  <HiLogout />
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => onOpenAuth("login")}
                  className="inline-flex items-center gap-2 rounded-lg bg-lime-300 px-4 py-2 text-sm font-black text-black"
                >
                  <HiLogin />
                  Login
                </button>
                <button
                  onClick={() => onOpenAuth("signup")}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm font-bold"
                >
                  <HiUserAdd />
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
