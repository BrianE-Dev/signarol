const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/mo",
    description: "For small teams starting with signal intelligence.",
    features: [
      "Up to 3 users",
      "Core analytics dashboard",
      "Email support",
      "Basic API access",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$79",
    period: "/mo",
    description: "Best for growing teams that need real-time insights.",
    features: [
      "Up to 10 users",
      "Advanced reporting",
      "Priority support",
      "Full API access",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for complex signal operations.",
    features: [
      "Unlimited users",
      "Dedicated success manager",
      "Custom SLAs",
      "Enterprise integrations",
    ],
    highlight: false,
  },
];

function Pricing() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
        <section className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
            Pricing
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Transparent plans for every stage of your signal journey.
          </h1>
          <p className="mx-auto max-w-2xl text-base text-slate-300 sm:text-lg">
            Choose the right package for your team, from early-stage pilots to
            enterprise-grade operations backed by mission-ready analytics.
          </p>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-3xl border p-8 shadow-xl shadow-slate-950/20 transition duration-200 ${
                plan.highlight
                  ? "border-amber-500 bg-slate-900/95"
                  : "border-slate-800 bg-slate-900/80"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-semibold text-white">
                  {plan.name}
                </h2>
                {plan.highlight && (
                  <span className="rounded-full bg-amber-500 px-3 py-1 text-sm font-semibold text-slate-950">
                    Most Popular
                  </span>
                )}
              </div>
              <p className="mt-4 text-sm text-slate-400">{plan.description}</p>

              <div className="mt-8 flex items-end gap-1 text-white">
                <span className="text-5xl font-semibold">{plan.price}</span>
                <span className="text-sm text-slate-400">{plan.period}</span>
              </div>

              <ul className="mt-8 space-y-3 text-sm text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-xs font-semibold text-slate-950">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`mt-10 w-full rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  plan.highlight
                    ? "bg-white text-slate-950 hover:bg-slate-100"
                    : "bg-amber-500 text-slate-950 hover:bg-amber-400"
                }`}
              >
                {plan.highlight ? "Start Growth" : "Choose Plan"}
              </button>
            </article>
          ))}
        </section>

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 text-center text-slate-200 shadow-xl shadow-slate-950/30">
          <h2 className="text-2xl font-semibold text-white">
            Need a custom solution?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-300">
            Our team can design a plan that matches the scale and security
            demands of your organization.
          </p>
          <button className="mt-6 rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-400">
            Contact Sales
          </button>
        </section>
      </main>
    </div>
  );
}

export default Pricing;
