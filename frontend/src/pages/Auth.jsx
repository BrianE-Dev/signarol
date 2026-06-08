import { useState } from "react";

function Auth() {
  const [mode, setMode] = useState("signin");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    recruiter: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const action =
      mode === "signin"
        ? form.recruiter
          ? "Signing in as recruiter"
          : "Signing in"
        : form.recruiter
          ? "Signing up as recruiter"
          : "Signing up";

    console.log(action, form);
    alert(`${action} with ${form.email}`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-4 py-10">
      <div className="mx-auto max-w-md rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/40">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
            Access Control
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-white">
            {mode === "signin" ? "Sign In" : "Create Account"}
          </h1>
          <p className="mt-3 text-sm text-slate-400">
            {mode === "signin"
              ? "Sign in to your Signarol account to manage your profile and candidates."
              : "Create a recruiter or candidate account to access assessments and analytics."}
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {mode === "signup" && (
            <label className="block text-sm font-medium text-slate-200">
              Full Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-400"
                placeholder="Jane Doe"
                required
              />
            </label>
          )}

          <label className="block text-sm font-medium text-slate-200">
            Email address
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-400"
              placeholder="you@example.com"
              required
            />
          </label>

          <label className="block text-sm font-medium text-slate-200">
            Password
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-400"
              placeholder="Enter your password"
              required
            />
          </label>

          {mode === "signin" ? (
            <label className="mt-2 flex items-start gap-3 text-sm text-slate-200">
              <input
                type="checkbox"
                name="recruiter"
                checked={form.recruiter}
                onChange={handleChange}
                className="mt-2 h-5 w-5 rounded border-slate-700 bg-slate-950 text-amber-500 focus:ring-amber-400"
              />
              <span className="leading-6">Sign in as recruiter</span>
            </label>
          ) : (
            <label className="mt-2 flex items-start gap-3 text-sm text-slate-200">
              <input
                type="checkbox"
                name="recruiter"
                checked={form.recruiter}
                onChange={handleChange}
                className="mt-2 h-5 w-5 rounded border-slate-700 bg-slate-950 text-amber-500 focus:ring-amber-400"
              />
              <span className="leading-6">
                I am a recruiter creating a hiring account.
              </span>
            </label>
          )}

          <button
            type="submit"
            className="w-full rounded-2xl bg-amber-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            {mode === "signin" ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <div className="mt-6 flex items-center justify-between text-sm text-slate-400">
          <span>
            {mode === "signin"
              ? "New to Signarol?"
              : "Already have an account?"}
          </span>
          <button
            type="button"
            className="font-medium text-amber-400 hover:text-amber-300"
            onClick={() =>
              setMode((current) => (current === "signin" ? "signup" : "signin"))
            }
          >
            {mode === "signin" ? "Create an account" : "Sign in instead"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
