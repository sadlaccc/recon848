import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Recon848insights | Security & Risk Consultancy in Kenya" },
      {
        name: "description",
        content:
          "Reconnaissance, risk assessment, and protective strategy for corporates, missions, and critical infrastructure across Nairobi and East Africa.",
      },
      {
        property: "og:title",
        content: "Recon848insights | Security & Risk Consultancy in Kenya",
      },
      {
        property: "og:description",
        content:
          "Reconnaissance, risk assessment, and protective strategy across Nairobi and East Africa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <SiteLayout>
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
            <Link
              to="/contact"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition hover:bg-accent/90"
            >
              Book a Consultation
            </Link>
            <Link
              to="/services"
              className="glass rounded-lg px-6 py-3 text-sm font-medium text-ink transition hover:bg-white"
            >
              View Capabilities
            </Link>
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
              <div className="rounded-xl bg-secondary p-3 text-center">
                <p className="font-display text-2xl text-accent">142</p>
                <p className="mt-1 text-[10px] uppercase tracking-wide text-muted-foreground">
                  Sectors
                </p>
              </div>
              <div className="rounded-xl bg-secondary p-3 text-center">
                <p className="font-display text-2xl text-safe">96</p>
                <p className="mt-1 text-[10px] uppercase tracking-wide text-muted-foreground">
                  Clients
                </p>
              </div>
              <div className="rounded-xl bg-secondary p-3 text-center">
                <p className="font-display text-2xl text-ink">24/7</p>
                <p className="mt-1 text-[10px] uppercase tracking-wide text-muted-foreground">
                  Ops
                </p>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              {[
                { label: "Financial", state: "Elevated", text: "text-accent", bar: "bg-accent", w: "w-3/4" },
                { label: "Logistics", state: "Guarded", text: "text-safe", bar: "bg-safe", w: "w-1/2" },
                { label: "Energy", state: "Watch", text: "text-watch", bar: "bg-watch", w: "w-2/3" },
              ].map((row) => (
                <div key={row.label}>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-muted-foreground">{row.label}</span>
                    <span className={`font-mono ${row.text}`}>
                      {row.state}
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 rounded-full bg-secondary">
                    <div
                      className={`h-full ${row.w} rounded-full ${row.bar}`}
                    />
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/threat-intel"
              className="mt-5 block text-center font-mono text-[11px] uppercase tracking-[0.2em] text-accent hover:underline"
            >
              Full threat intel →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
              Capabilities
            </p>
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight">
              What we protect
            </h2>
          </div>
          <Link
            to="/services"
            className="hidden text-sm text-muted-foreground hover:text-accent md:block"
          >
            All services →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              n: "01",
              title: "Executive Protection",
              body: "Close-protection teams and route planning for leadership in high-risk corridors.",
              tag: "Operational",
              tint: "bg-accent/10 outline-accent/30", text: "text-accent",
            },
            {
              n: "02",
              title: "Cyber & Physical Recon",
              body: "Penetration, surveillance hardening, and digital-threat mapping for sites.",
              tag: "Technical",
              tint: "bg-safe/10 outline-safe/30", text: "text-safe",
            },
            {
              n: "03",
              title: "Risk Advisory",
              body: "Country risk briefs, crisis response, and contingency planning for expansion.",
              tag: "Strategic",
              tint: "bg-watch/10 outline-watch/30", text: "text-watch",
            },
          ].map((c) => (
            <div
              key={c.n}
              className="glass group rounded-2xl p-6 transition hover:bg-card"
            >
              <div
                className={`grid size-12 place-items-center rounded-xl outline-1 ${c.tint}`}
              >
                <span className={`font-mono text-lg ${c.text}`}>{c.n}</span>
              </div>
              <h3 className="mt-5 font-display text-xl font-medium">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.body}
              </p>
              <p
                className={`mt-4 font-mono text-[11px] uppercase tracking-[0.15em] ${c.text}`}
              >
                {c.tag}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="glass rounded-2xl p-7">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                Recent Deployment
              </p>
              <h3 className="mt-2 max-w-md font-display text-2xl font-medium tracking-tight">
                Nairobi Financial District perimeter audit — cleared in 72 hours.
              </h3>
            </div>
            <div className="flex shrink-0 items-center gap-6">
              <div className="text-right">
                <p className="font-display text-3xl text-safe">38</p>
                <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
                  Findings resolved
                </p>
              </div>
              <Link
                to="/about"
                className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-on-accent transition hover:bg-accent/90"
              >
                Read Case File
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
