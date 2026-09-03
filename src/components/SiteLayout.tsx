import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/threat-intel", label: "Threat Intel" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-brand text-ink">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" />
      <div className="pointer-events-none absolute -top-40 -left-32 h-[560px] w-[560px] rounded-full bg-accent/15 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-safe/12 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <header className="flex flex-wrap items-center justify-between gap-4 py-7">
          <Link to="/" className="flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-lg bg-accent/10 outline-1 outline-accent/30">
              <span className="font-display text-lg font-semibold tracking-tight text-accent">
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
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-accent font-medium" }}
                className="transition hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition hover:bg-accent/90"
          >
            Request Brief
          </Link>
        </header>

        <nav className="flex flex-wrap gap-x-5 gap-y-2 pb-4 text-sm text-muted-foreground md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-accent font-medium" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <main>{children}</main>

        <footer className="mt-8 flex flex-col gap-4 border-t border-border py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p className="font-display tracking-[0.18em] text-ink">
            RECON848 INSIGHTS
          </p>
          <p className="font-mono text-[11px]">
            Nairobi · Mombasa · Regional · Licensed &amp; bonded
          </p>
          <p className="font-mono text-[11px]">
            Confidential operations — by appointment.
          </p>
        </footer>
      </div>
    </div>
  );
}

export function PageHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="py-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
        {eyebrow}
      </p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
        {intro}
      </p>
    </section>
  );
}
