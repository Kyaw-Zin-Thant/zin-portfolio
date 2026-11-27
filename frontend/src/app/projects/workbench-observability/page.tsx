import Link from 'next/link';

export const metadata = { title: 'Migrating Workbench production monitoring | Kyaw Zin Thant' };

export default function CaseStudy() {
  return (
    <article className="section-pad">
      <Link href="/projects" className="btn-ghost">Back to projects</Link>
      <div className="mt-8 max-w-3xl">
        <h1 className="font-display text-4xl font-bold">Migrating Workbench production monitoring</h1>
        <div className="mt-8 space-y-8">
          <section>
            <h2 className="font-display text-2xl font-semibold">The project</h2>
            <p className="mt-2 leading-relaxed" style={{ color: 'var(--muted)' }}>At FPT Software, I worked on Workbench, a Cox Automotive platform for dealer operations.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold">What I changed</h2>
            <p className="mt-2 leading-relaxed" style={{ color: 'var(--muted)' }}>I migrated monitoring from Datadog to New Relic. I used Terraform to manage alert policies and workflows, and configured PagerDuty routing for on-call response.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold">What the monitoring covered</h2>
            <p className="mt-2 leading-relaxed" style={{ color: 'var(--muted)' }}>The migration covered application health and error rates, plus AWS infrastructure metrics for compute, databases, and load balancing.</p>
          </section>
        </div>
      </div>
    </article>
  );
}
