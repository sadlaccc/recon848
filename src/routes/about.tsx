import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeading } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Recon848insights | Nairobi Security Consultancy" },
      {
        name: "description",
        content:
          "Recon848insights is a licensed Kenyan security consultancy combining field reconnaissance, analysis, and advisory experience across East Africa.",
      },
      { property: "og:title", content: "About Recon848insights" },
      {
        property: "og:description",
        content:
          "A licensed Kenyan security consultancy combining reconnaissance, analysis, and advisory experience.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const values = [
  {
    title: "Proportionate",
    body: "We recommend the smallest effective measure, not the largest invoice.",
  },
  {
    title: "Evidence-led",
    body: "Every finding is traceable to observation, not assumption.",
  },
  {
    title: "Discreet",
    body: "Client identity, sites, and findings stay confidential by default.",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeading
        eyebrow="About"
        title="Kenyan-based, regionally deployed, quietly effective."
        intro="Recon848 Insights was founded to give organisations in East Africa security advice that is grounded in local reality rather than imported templates."
      />

      <section className="grid gap-5 pb-12 lg:grid-cols-12">
        <div className="glass rounded-2xl p-7 lg:col-span-7">
          <h2 className="font-display text-2xl font-medium tracking-tight">
            How we work
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Our teams pair former field operators with analysts who understand
            regulatory, commercial, and community context. An engagement starts
            with observation on the ground, moves to a structured risk picture,
            and ends with controls your own staff can maintain after we leave.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            We operate from Nairobi with standing capability on the coast and
            deployable teams for upcountry and cross-border assignments.
          </p>
        </div>

        <div className="glass rounded-2xl p-7 lg:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
            Case File
          </p>
          <h2 className="mt-2 font-display text-2xl font-medium tracking-tight">
            Nairobi Financial District perimeter audit
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            A 72-hour audit across three connected properties: access control,
            guard force procedure, and camera coverage reviewed end to end.
          </p>
          <div className="mt-5 grid grid-cols-3 gap-3">
            <div className="rounded-xl bg-secondary p-3 text-center">
              <p className="font-display text-2xl text-safe">38</p>
              <p className="mt-1 text-[10px] uppercase tracking-wide text-muted-foreground">
                Findings
              </p>
            </div>
            <div className="rounded-xl bg-secondary p-3 text-center">
              <p className="font-display text-2xl text-accent">72h</p>
              <p className="mt-1 text-[10px] uppercase tracking-wide text-muted-foreground">
                Turnaround
              </p>
            </div>
            <div className="rounded-xl bg-secondary p-3 text-center">
              <p className="font-display text-2xl text-ink">3</p>
              <p className="mt-1 text-[10px] uppercase tracking-wide text-muted-foreground">
                Sites
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="grid gap-5 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="glass rounded-2xl p-6">
              <h3 className="font-display text-xl font-medium">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-12">
        <div className="glass flex flex-col gap-5 rounded-2xl p-7 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-lg font-display text-2xl font-medium tracking-tight">
            Want the full case file or references? Ask us directly.
          </h2>
          <Link
            to="/contact"
            className="shrink-0 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition hover:bg-accent/90"
          >
            Contact Recon848
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
