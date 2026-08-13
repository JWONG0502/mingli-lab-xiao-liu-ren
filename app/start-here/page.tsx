import Link from "next/link";
import { copy } from "@/content/copy";

export default function StartHerePage() {
  return (
    <main className="panel">
      <p className="eyebrow">Before using the tool</p>
      <h1>{copy.startHere.title}</h1>
      <p className="lead">{copy.startHere.boundary}</p>
      <div className="two-grid" style={{ marginTop: 28 }}>
        <section className="card">
          <h2>Reflection, not prediction</h2>
          <p>The final palace is a reflective focus. It does not decide what you should do.</p>
        </section>
        <section className="card">
          <h2>Safety boundary</h2>
          <p>{copy.startHere.notFor}</p>
        </section>
      </div>
      <div className="actions">
        <Link className="button" href="/tool">
          {copy.startHere.cta}
        </Link>
        <Link className="secondary-button" href="/method">
          See the Method
        </Link>
      </div>
    </main>
  );
}
