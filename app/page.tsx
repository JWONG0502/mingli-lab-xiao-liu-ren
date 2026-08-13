import Link from "next/link";
import { copy } from "@/content/copy";
import { palaces } from "@/content/palaces";

export default function HomePage() {
  return (
    <main className="page-grid">
      <section className="panel">
        <p className="eyebrow">Learning and reflection</p>
        <h1>{copy.home.headline}</h1>
        <p className="lead">{copy.home.supportingCopy}</p>
        <div className="actions">
          <Link className="button" href="/tool">
            {copy.home.primaryCta}
          </Link>
          <Link className="secondary-button" href="/start-here">
            {copy.home.secondaryCta}
          </Link>
        </div>
        <div className="notice" style={{ marginTop: 28 }}>
          {copy.home.boundary}
        </div>
        <div className="card-grid">
          <article className="card">
            <h3>What is Xiao Liu Ren?</h3>
            <p>A compact classical Chinese symbolic method using lunar month, lunar day, and Chinese hour.</p>
          </article>
          <article className="card">
            <h3>Choose · Cast · Reflect</h3>
            <p>Choose a context, cast the pattern, then read symbolic prompts without treating them as commands.</p>
          </article>
          <article className="card">
            <h3>{copy.home.guideTitle}</h3>
            <p>{copy.home.guideNote}</p>
          </article>
        </div>
      </section>
      <aside className="card">
        <p className="eyebrow">Six Palaces</p>
        <h2>Symbolic states</h2>
        <ul className="process-list">
          {palaces.map((palace) => (
            <li key={palace.id}>
              <span>{palace.english}</span>
              <span className="palace-term">
                {palace.chinese} · {palace.pinyin}
              </span>
            </li>
          ))}
        </ul>
        <Link className="ghost-button" href="/six-palaces" style={{ marginTop: 20, display: "inline-flex", alignItems: "center" }}>
          Read the Six Palaces
        </Link>
      </aside>
    </main>
  );
}
