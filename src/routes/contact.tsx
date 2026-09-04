import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeading } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact & Confidential Briefing | Recon848insights" },
      {
        name: "description",
        content:
          "Request a confidential security briefing from Recon848insights. Nairobi and Mombasa based, responding within two working days.",
      },
      { property: "og:title", content: "Contact Recon848insights" },
      {
        property: "og:description",
        content:
          "Request a confidential security briefing. Nairobi and Mombasa based, responding within two working days.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHeading
        eyebrow="Start the Conversation"
        title="Request a confidential briefing."
        intro="Tell us what you are protecting and where. We respond with a clear, proportionate plan within two working days."
      />

      <section className="grid gap-5 pb-12 lg:grid-cols-12">
        <div className="glass rounded-2xl p-7 lg:col-span-7">
          <h2 className="font-display text-2xl font-medium tracking-tight">
            Direct channels
          </h2>
          <dl className="mt-5 space-y-5 text-sm">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Briefings
              </dt>
              <dd className="mt-1">
                <a
                  className="text-accent hover:underline"
                  href="mailto:briefings@recon848insights.co.ke"
                >
                  briefings@recon848insights.co.ke
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Operations desk
              </dt>
              <dd className="mt-1">
                <a className="text-accent hover:underline" href="tel:+254700848848">
                  +254 700 848 848
                </a>
                <span className="ml-2 text-muted-foreground">· 24/7</span>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Offices
              </dt>
              <dd className="mt-1 text-muted-foreground">
                Nairobi (HQ) · Mombasa · Regional deployment on request
              </dd>
            </div>
          </dl>
        </div>

        <div className="glass rounded-2xl p-7 lg:col-span-5">
          <h2 className="font-display text-2xl font-medium tracking-tight">
            What to include
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {[
              "Sites, routes, or people to be covered",
              "Any incidents in the last 12 months",
              "Existing guarding or security providers",
              "Timeline and decision-makers",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-safe" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="mailto:briefings@recon848insights.co.ke"
            className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition hover:bg-accent/90"
          >
            Email Recon848
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
