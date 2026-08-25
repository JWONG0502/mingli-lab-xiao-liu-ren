import Link from "next/link";
import { copy } from "@/content/copy";
import { palaces } from "@/content/palaces";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xiao Liu Ren Lab | Online Xiao Liu Ren Tool and Guide",
  description: "Use Xiao Liu Ren as a simple reflection tool with six palaces, time-based calculation, and practical interpretation guides.",
};

export default function SixPalacesPage() {
  return (
    <main className="panel">
      <p className="eyebrow">Reference</p>
      <h1>{copy.sixPalaces.title}</h1>
      <p className="lead">{copy.sixPalaces.subtitle}</p>
      <div className="card-grid">
        {palaces.map((palace) => (
          <article className="card" key={palace.id}>
            <h2>{palace.english}</h2>
            <p className="palace-term">
              {palace.chinese} · {palace.pinyin}
            </p>
            <p>{palace.themes.short}</p>
            <ul className="keyword-list">
              {palace.keywords.slice(0, 4).map((keyword) => (
                <li key={keyword}>{keyword}</li>
              ))}
            </ul>
            <Link className="ghost-button" href={`/six-palaces/${palace.id}`}>
              Read palace detail
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
