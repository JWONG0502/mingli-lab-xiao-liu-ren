import { copy } from "@/content/copy";

export default function AboutPage() {
  return (
    <main className="panel">
      <p className="eyebrow">Project</p>
      <h1>{copy.staticPages.aboutTitle}</h1>
      <p className="lead">{copy.staticPages.aboutBody}</p>
      <section className="notice" style={{ marginTop: 24 }}>
        The tool explains symbolic meanings. The user makes their own judgment.
      </section>
    </main>
  );
}
