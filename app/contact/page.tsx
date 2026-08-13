import { copy } from "@/content/copy";

export default function ContactPage() {
  return (
    <main className="panel">
      <p className="eyebrow">Contact</p>
      <h1>{copy.staticPages.contactTitle}</h1>
      <p className="lead">For product questions or content corrections, email hjianhua33@gmail.com.</p>
      <section className="notice" style={{ marginTop: 24 }}>
        {copy.staticPages.contactSafety}
      </section>
    </main>
  );
}
