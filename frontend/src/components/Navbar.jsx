function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/90 px-6 py-4 backdrop-blur-xl sm:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500 text-slate-950 font-bold">
            S
          </div>
          <span className="text-lg font-semibold text-white">Signarol</span>
        </div>
        <nav className="hidden gap-8 text-sm font-medium text-slate-300 md:flex">
          <a href="#" className="transition hover:text-white">
            Explore
          </a>
          <a href="#" className="transition hover:text-white">
            Leaderboard
          </a>
          <a href="#" className="transition hover:text-white">
            Challenges
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-100 hover:border-slate-500">
            Sign In
          </button>
          <button className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-amber-400">
            Create Account
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
