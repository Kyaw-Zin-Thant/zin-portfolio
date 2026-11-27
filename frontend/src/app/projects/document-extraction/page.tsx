import Link from 'next/link';

export const metadata = { title: 'Rebuilding the OCR-to-form mapper | Kyaw Zin Thant' };

export default function CaseStudy() {
  return (
    <article className="section-pad">
      <Link href="/projects" className="btn-ghost">Back to projects</Link>
      <div className="mt-8 max-w-3xl">
        <h1 className="font-display text-4xl font-bold">Rebuilding the OCR-to-form mapper</h1>
        <div className="mt-8 space-y-8">
          <section>
            <h2 className="font-display text-2xl font-semibold">The problem</h2>
            <p className="mt-2 leading-relaxed" style={{ color: 'var(--muted)' }}>After a schema migration, some extracted document keys could no longer be routed to their form fields. The form could appear incomplete even when extraction returned data.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold">What I changed</h2>
            <p className="mt-2 leading-relaxed" style={{ color: 'var(--muted)' }}>I built a repeatable comparison for the old and new mappers, then updated the mapping rules for the new schema vocabulary.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold">How I verified it</h2>
            <p className="mt-2 leading-relaxed" style={{ color: 'var(--muted)' }}>I used scrambled keys as a negative control to confirm the test could detect a mapping failure. I tracked key resolution separately from extraction repeatability, since these measure different parts of the workflow.</p>
          </section>
        </div>
      </div>
    </article>
  );
}
