import type { Metadata } from "next";
import { copy } from "@/content/copy";

export const metadata: Metadata = {
  title: "About Xiao Liu Ren Lab",
  description:
    "Learn what Xiao Liu Ren Lab provides and how the site presents Xiao Liu Ren as cultural learning and reflection.",
};

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
