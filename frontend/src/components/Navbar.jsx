import logo from "../assets/logo.svg";

function Navbar({ currentPage, onNavigate, currentUser, onSignOut }) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "pricing", label: "Pricing" },
    { id: "interview", label: "Interview" },
    ...(currentUser
      ? currentUser.recruiter
        ? [{ id: "recruiter", label: "Recruiter" }]
        : [{ id: "dashboard", label: "Dashboard" }]
      : []),
    { id: "profile", label: "Profile" },
  ];

  return (
    <header className="border-b border-slate-800 bg-slate-950/90 px-6 py-4 backdrop-blur-xl sm:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onNavigate("home")}
            className="flex items-center rounded-2xl border border-slate-700 bg-slate-950 p-1 shadow-glow transition hover:border-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <img
              src={logo}
              alt="Signarol logo"
              className="h-11 w-11 rounded-2xl"
            />
          </button>
          <span className="text-lg font-semibold text-white">Signarol</span>
        </div>

        <nav className="hidden gap-8 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`transition ${
                currentPage === item.id
                  ? "text-white font-semibold"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {currentUser ? (
            <>
              <div className="hidden sm:block text-sm text-slate-200">
                {currentUser.name || currentUser.email}
              </div>
              <button
                type="button"
                onClick={() => {
                  onSignOut?.();
                }}
                className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-100 hover:border-slate-500"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => onNavigate("auth")}
                className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-100 hover:border-slate-500"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => onNavigate("auth")}
                className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-amber-400"
              >
                Create Account
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
