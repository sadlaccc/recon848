import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeading } from "@/components/SiteLayout";

export const Route = createFileRoute("/threat-intel")({
  component: ThreatIntelPage,
  head: () => ({
    meta: [
      { title: "Threat Intel & Regional Posture | Recon848insights" },
      {
        name: "description",
        content:
          "Current sector threat posture, regional advisories, and briefing cadence for organisations operating across Kenya and East Africa.",
      },
      { property: "og:title", content: "Threat Intel | Recon848insights" },
      {
        property: "og:description",
        content:
          "Sector threat posture and regional advisories for Kenya and East Africa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const sectors = [
  { label: "Financial services", state: "Elevated", bar: "w-3/4", tone: "accent" as const },
  { label: "Logistics & transport", state: "Guarded", bar: "w-1/2", tone: "safe" as const },
  { label: "Energy & utilities", state: "Watch", bar: "w-2/3", tone: "watch" as const },
  { label: "NGO & missions", state: "Guarded", bar: "w-2/5", tone: "safe" as const },
  { label: "Retail & hospitality", state: "Elevated", bar: "w-7/12", tone: "accent" as const },
];

const advisories = [
  {
    region: "Nairobi Metro",
    date: "03 Sep",
    note: "Increased opportunistic theft around CBD transit hubs during evening peak. Adjust staff egress timing.",
  },
  {
    region: "Coast Corridor",
    date: "01 Sep",
    note: "Cargo diversion attempts reported on the Mombasa–Mariakani stretch. Verify convoy check-in intervals.",
  },
  {
    region: "Northern Counties",
    date: "28 Aug",
    note: "Movement restrictions in effect for non-essential field travel. Pre-clear all routes 48 hours ahead.",
  },
];

const toneClass = {
  accent: { text: "text-accent", bg: "bg-accent" },
  safe: { text: "text-safe", bg: "bg-safe" },
  watch: { text: "text-watch", bg: "bg-watch" },
} as const;

function ThreatIntelPage() {
  return (
    <SiteLayout>
      <PageHeading
        eyebrow="Threat Intel"
        title="Regional posture, updated continuously."
        intro="Our analysts track incident patterns across East Africa and translate them into practical guidance for your operations team."
      />

      <section className="grid gap-5 pb-12 lg:grid-cols-12">
        <div className="glass rounded-2xl p-6 lg:col-span-5">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Sector Posture
            </p>
            <span className="font-mono text-[11px] text-safe">
              Updated 04:12 EAT
            </span>
          </div>
          <div className="mt-5 space-y-4">
            {sectors.map((s) => (
              <div key={s.label}>
                <div className="flex justify-between text-[12px]">
                  <span className="text-muted-foreground">{s.label}</span>
                  <span className={`font-mono ${toneClass[s.tone].text}`}>
                    {s.state}
                  </span>
                </div>
                <div className="mt-1.5 h-1.5 rounded-full bg-secondary">
                  <div
                    className={`h-full ${s.bar} rounded-full ${toneClass[s.tone].bg}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="space-y-4">
            {advisories.map((a) => (
              <article key={a.region} className="glass rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-xl font-medium">{a.region}</h2>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {a.date}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {a.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="glass flex flex-col gap-5 rounded-2xl p-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
              Briefing Cadence
            </p>
            <h2 className="mt-2 max-w-lg font-display text-2xl font-medium tracking-tight">
              Weekly written brief, immediate alerts on material change.
            </h2>
          </div>
          <Link
            to="/contact"
            className="shrink-0 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition hover:bg-accent/90"
          >
            Subscribe to Briefs
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
