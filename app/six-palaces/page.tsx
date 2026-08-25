import type { Metadata } from "next";
import Link from "next/link";
import { copy } from "@/content/copy";
import { palaces } from "@/content/palaces";

export const metadata: Metadata = {
  title: "Six Palaces of Xiao Liu Ren | Meanings and Guide",
  description:
    "Learn the six Xiao Liu Ren palaces, including Great Peace, Lingering, Swift Joy, Red Mouth, Small Fortune, and Emptiness.",
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
