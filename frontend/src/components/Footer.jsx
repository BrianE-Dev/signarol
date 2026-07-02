function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/95 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-sm font-semibold text-white">Signarol</p>
          <p className="mt-1 text-sm text-slate-400">
            AI-powered interview practice for engineers and hiring teams.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm">
          <a href="#" className="transition hover:text-white">
            Terms
          </a>
          <a href="#" className="transition hover:text-white">
            Privacy
          </a>
          <a href="#" className="transition hover:text-white">
            Support
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-6 text-sm text-slate-500 sm:px-8">
        © {new Date().getFullYear()} Signarol. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
