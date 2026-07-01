import { useEffect, useState } from "react";

const STORAGE_KEY = "signarol-users";
const CURRENT_USER_KEY = "signarol-current-user";

const readUsers = () => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
};

const persistUsers = (users) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};

function Auth({ onAuthSuccess }) {
  const [mode, setMode] = useState("signin");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    recruiter: false,
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      const savedUser = localStorage.getItem(CURRENT_USER_KEY);
      setCurrentUser(savedUser ? JSON.parse(savedUser) : null);
    } catch {
      setCurrentUser(null);
    }
  }, []);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    const email = form.email.trim().toLowerCase();
    const users = readUsers();

    if (mode === "signup") {
      const duplicate = users.some((user) => user.email === email);

      if (duplicate) {
        setStatus({
          type: "error",
          message: "An account with that email already exists.",
        });
        setIsSubmitting(false);
        return;
      }

      const newUser = {
        id: globalThis.crypto?.randomUUID?.() || `${Date.now()}`,
        name: form.name.trim(),
        email,
        password: form.password,
        recruiter: form.recruiter,
      };

      const nextUsers = [...users, newUser];
      persistUsers(nextUsers);
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));
      setCurrentUser(newUser);
      onAuthSuccess?.(newUser);
      setStatus({
        type: "success",
        message: `Account created for ${newUser.email}. You can sign in now.`,
      });
      setForm({ name: "", email: "", password: "", recruiter: false });
      setMode("signin");
      setIsSubmitting(false);
      return;
    }

    const existingUser = users.find(
      (user) => user.email === email && user.password === form.password,
    );

    if (!existingUser) {
      setStatus({
        type: "error",
        message: "No matching account was found. Please sign up first.",
      });
      setIsSubmitting(false);
      return;
    }

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(existingUser));
    setCurrentUser(existingUser);
    onAuthSuccess?.(existingUser);
    setStatus({
      type: "success",
      message: `Welcome back, ${existingUser.name || existingUser.email}.`,
    });
    setForm((current) => ({ ...current, password: "" }));
    setIsSubmitting(false);
  };

  const handleSignOut = () => {
    localStorage.removeItem(CURRENT_USER_KEY);
    setCurrentUser(null);
    setStatus({ type: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100">
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

        {currentUser && (
          <div className="mb-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
            <p className="font-medium">
              Signed in as {currentUser.name || currentUser.email}
            </p>
            <button
              type="button"
              onClick={handleSignOut}
              className="mt-2 text-xs font-semibold text-amber-400 hover:text-amber-300"
            >
              Sign out
            </button>
          </div>
        )}

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

          {status.message && (
            <div
              className={`rounded-2xl border px-4 py-3 text-sm ${
                status.type === "success"
                  ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                  : "border-rose-500/40 bg-rose-500/10 text-rose-300"
              }`}
            >
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-2xl bg-amber-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting
              ? "Please wait..."
              : mode === "signin"
                ? "Sign In"
                : "Sign Up"}
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
            onClick={() => {
              setMode((current) =>
                current === "signin" ? "signup" : "signin",
              );
              setStatus({ type: "", message: "" });
            }}
          >
            {mode === "signin" ? "Create an account" : "Sign in instead"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
