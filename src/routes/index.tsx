import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Recon848insights | Security & Risk Consultancy in Kenya",
      },
      {
        name: "description",
        content:
          "Recon848insights delivers reconnaissance, risk assessment, and protective strategy for corporates, diplomatic missions, and critical infrastructure across Nairobi and East Africa.",
      },
      {
        property: "og:title",
        content: "Recon848insights | Security & Risk Consultancy in Kenya",
      },
      {
        property: "og:description",
        content:
          "Recon848insights delivers reconnaissance, risk assessment, and protective strategy for corporates, diplomatic missions, and critical infrastructure across Nairobi and East Africa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-brand text-ink">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />
      <div className="pointer-events-none absolute -top-40 -left-32 h-[560px] w-[560px] rounded-full bg-accent/25 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-safe/15 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <header className="flex items-center justify-between py-7">
          <div className="flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-lg bg-accent/15 outline-1 outline-accent/40">
              <span className="font-display text-lg font-semibold tracking-tight">
                R848
              </span>
            </div>
            <div className="leading-none">
              <p className="font-display text-lg font-medium tracking-[0.18em]">
                RECON848
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Insights · Kenya
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#services" className="transition hover:text-ink">
              Services
            </a>
            <a href="#threat-intel" className="transition hover:text-ink">
              Threat Intel
            </a>
            <a href="#about" className="transition hover:text-ink">
              About
            </a>
            <a href="#contact" className="transition hover:text-ink">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-brand transition hover:bg-accent/90"
          >
            Request Brief
          </a>
        </header>

        <section className="grid items-center gap-10 py-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-safe/10 px-3 py-1.5 outline-1 outline-safe/30">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-safe opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-safe" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-safe">
                Threat Advisory · Live
              </span>
            </div>
            <h1 className="font-display text-5xl font-medium leading-[0.95] tracking-tight md:text-6xl">
              Security intelligence
              <br />
              for a fast-moving
              <br />
              <span className="text-accent">East Africa.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Recon848 Insights delivers reconnaissance, risk assessment, and
              protective strategy for corporates, diplomatic missions, and
              critical infrastructure across Nairobi and the region.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-brand transition hover:bg-accent/90"
              >
                Book a Consultation
              </a>
              <a
                href="#services"
                className="glass rounded-lg px-6 py-3 text-sm font-medium text-ink transition hover:bg-white/10"
              >
                View Capabilities
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Live Threat Posture
                </p>
                <span className="font-mono text-[11px] text-safe">
                  Updated 04:12 EAT
                </span>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-xl bg-white/5 p-3 text-center">
                  <p className="font-display text-2xl text-accent">142</p>
                  <p className="mt-1 text-[10px] uppercase tracking-wide text-muted-foreground">
                    Sectors
                  </p>
                </div>
                <div className="rounded-xl bg-white/5 p-3 text-center">
                  <p className="font-display text-2xl text-safe">96</p>
                  <p className="mt-1 text-[10px] uppercase tracking-wide text-muted-foreground">
                    Clients
                  </p>
                </div>
                <div className="rounded-xl bg-white/5 p-3 text-center">
                  <p className="font-display text-2xl text-ink">24/7</p>
                  <p className="mt-1 text-[10px] uppercase tracking-wide text-muted-foreground">
                    Ops
                  </p>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                <div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-muted-foreground">Financial</span>
                    <span className="font-mono text-accent">Elevated</span>
                  </div>
                  <div className="mt-1.5 h-1.5 rounded-full bg-white/10">
                    <div className="h-full w-3/4 rounded-full bg-accent" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-muted-foreground">Logistics</span>
                    <span className="font-mono text-safe">Guarded</span>
                  </div>
                  <div className="mt-1.5 h-1.5 rounded-full bg-white/10">
                    <div className="h-full w-1/2 rounded-full bg-safe" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-muted-foreground">Energy</span>
                    <span className="font-mono text-amber-400">Watch</span>
                  </div>
                  <div className="mt-1.5 h-1.5 rounded-full bg-white/10">
                    <div className="h-full w-2/3 rounded-full bg-amber-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-12">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                Capabilities
              </p>
              <h2 className="mt-2 font-display text-3xl font-medium tracking-tight">
                What we protect
              </h2>
            </div>
            <p className="hidden text-sm text-muted-foreground md:block">
              Full-stack security, from field recon to boardroom strategy.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="glass group rounded-2xl p-6 transition hover:bg-white/[0.08]">
              <div className="grid size-12 place-items-center rounded-xl bg-accent/15 outline-1 outline-accent/30">
                <span className="font-mono text-lg text-accent">01</span>
              </div>
              <h3 className="mt-5 font-display text-xl font-medium">
                Executive Protection
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Close-protection teams and route planning for leadership in
                high-risk corridors.
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
                Operational
              </p>
            </div>

            <div className="glass group rounded-2xl p-6 transition hover:bg-white/[0.08]">
              <div className="grid size-12 place-items-center rounded-xl bg-safe/15 outline-1 outline-safe/30">
                <span className="font-mono text-lg text-safe">02</span>
              </div>
              <h3 className="mt-5 font-display text-xl font-medium">
                Cyber & Physical Recon
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Penetration, surveillance hardening, and digital-threat mapping
                for sites.
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-safe">
                Technical
              </p>
            </div>

            <div className="glass group rounded-2xl p-6 transition hover:bg-white/[0.08]">
              <div className="grid size-12 place-items-center rounded-xl bg-indigo-400/15 outline-1 outline-indigo-400/30">
                <span className="font-mono text-lg text-indigo-300">03</span>
              </div>
              <h3 className="mt-5 font-display text-xl font-medium">
                Risk Advisory
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Country risk briefs, crisis response, and contingency planning
                for expansion.
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-indigo-300">
                Strategic
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="py-12">
          <div className="glass rounded-2xl p-7">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                  Recent Deployment
                </p>
                <h3 className="mt-2 max-w-md font-display text-2xl font-medium tracking-tight">
                  Nairobi Financial District perimeter audit — cleared in 72
                  hours.
                </h3>
              </div>
              <div className="flex shrink-0 items-center gap-6">
                <div className="text-right">
                  <p className="font-display text-3xl text-safe">38</p>
                  <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
                    Findings resolved
                  </p>
                </div>
                <a
                  href="#contact"
                  className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-brand transition hover:bg-accent/90"
                >
                  Read Case File
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12">
          <div className="glass rounded-2xl p-8">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                  Start the Conversation
                </p>
                <h2 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">
                  Request a confidential briefing.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Tell us what you are protecting and where. We will respond with a
                  clear, proportionate plan within two working days.
                </p>
              </div>
              <div className="lg:col-span-4 lg:justify-self-end">
                <a
                  href="mailto:briefings@recon848insights.co.ke"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-brand transition hover:bg-accent/90"
                >
                  Email Recon848
                </a>
                <p className="mt-3 text-center font-mono text-[11px] text-muted-foreground">
                  briefings@recon848insights.co.ke
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p className="font-display tracking-[0.18em]">RECON848 INSIGHTS</p>
          <p className="font-mono text-[11px]">
            Nairobi · Mombasa · Regional · Licensed & bonded
          </p>
          <p className="font-mono text-[11px] text-ink/60">
            Confidential operations — by appointment.
          </p>
        </footer>
      </div>
    </div>
  );
}
