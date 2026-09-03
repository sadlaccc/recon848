import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeading } from "@/components/SiteLayout";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Security Services | Recon848insights Kenya" },
      {
        name: "description",
        content:
          "Executive protection, cyber and physical reconnaissance, risk advisory, and crisis response services for organisations operating in Kenya and East Africa.",
      },
      { property: "og:title", content: "Security Services | Recon848insights" },
      {
        property: "og:description",
        content:
          "Executive protection, reconnaissance, risk advisory, and crisis response across Kenya and East Africa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const services = [
  {
    n: "01",
    title: "Executive Protection",
    body: "Close-protection teams, secure transport, and route planning for leadership travelling through high-risk corridors.",
    points: ["Advance route recon", "Vetted protection officers", "Residence hardening"],
  },
  {
    n: "02",
    title: "Cyber & Physical Recon",
    body: "Penetration testing, surveillance hardening, and digital-threat mapping across sites and networks.",
    points: ["Site vulnerability audits", "Social-engineering tests", "CCTV & access review"],
  },
  {
    n: "03",
    title: "Risk Advisory",
    body: "Country risk briefs, contingency planning, and board-level guidance for regional expansion.",
    points: ["Market entry risk briefs", "Due diligence", "Policy & compliance"],
  },
  {
    n: "04",
    title: "Crisis Response",
    body: "24/7 incident coordination, evacuation planning, and post-incident review for organisations under pressure.",
    points: ["Incident command support", "Evacuation planning", "After-action reporting"],
  },
  {
    n: "05",
    title: "Guard Force Assurance",
    body: "Independent assessment and training of in-house and contracted guarding operations.",
    points: ["Post-order review", "Response drills", "Supervisor training"],
  },
  {
    n: "06",
    title: "Investigations",
    body: "Discreet corporate investigations covering fraud, asset loss, and internal misconduct.",
    points: ["Fraud & loss inquiry", "Background screening", "Evidence handling"],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHeading
        eyebrow="Capabilities"
        title="Full-stack security, from field recon to boardroom strategy."
        intro="Every engagement begins with an assessment and ends with a proportionate, documented plan your team can actually run."
      />

      <section className="grid gap-5 pb-12 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.n} className="glass rounded-2xl p-6 transition hover:bg-card">
            <div className="grid size-12 place-items-center rounded-xl bg-accent/10 outline-1 outline-accent/30">
              <span className="font-mono text-lg text-accent">{s.n}</span>
            </div>
            <h2 className="mt-5 font-display text-xl font-medium">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {s.body}
            </p>
            <ul className="mt-4 space-y-1.5">
              {s.points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2 text-[13px] text-muted-foreground"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-safe" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="pb-12">
        <div className="glass flex flex-col gap-5 rounded-2xl p-7 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-lg font-display text-2xl font-medium tracking-tight">
            Not sure which engagement fits? Start with a scoping call.
          </h2>
          <Link
            to="/contact"
            className="shrink-0 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition hover:bg-accent/90"
          >
            Request a Brief
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
