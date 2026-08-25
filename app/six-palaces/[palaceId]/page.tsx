import type { Metadata } from "next";
import Link from "next/link";
import { getPalace, palaces } from "@/content/palaces";
import type { PalaceId } from "@/lib/xiao-liu-ren/types";

export function generateStaticParams() {
  return palaces.map((palace) => ({ palaceId: palace.id }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ palaceId: PalaceId }>;
}): Promise<Metadata> {
  const { palaceId } = await params;
  const palace = getPalace(palaceId);

  return {
    title: `${palace.english} (${palace.pinyin}) | Xiao Liu Ren Palace Meaning`,
    description: `${palace.english}, ${palace.chinese} ${palace.pinyin}, represents ${palace.themes.short} in Xiao Liu Ren reflection.`,
  };
}

export default async function PalaceDetailPage({ params }: { params: Promise<{ palaceId: PalaceId }> }) {
  const { palaceId } = await params;
  const palace = getPalace(palaceId);

  return (
    <main className="panel">
      <p className="eyebrow">Six Palaces</p>
      <h1>{palace.english}</h1>
      <p className="palace-term">
        {palace.chinese} · {palace.pinyin}
      </p>
      <ul className="keyword-list">
        {palace.keywords.map((keyword) => (
          <li key={keyword}>{keyword}</li>
        ))}
      </ul>
      <div className="result-sections" style={{ marginTop: 26 }}>
        <section>
          <h2>Basic Meaning</h2>
          <p>{palace.basicMeaning}</p>
        </section>
        <section>
          <h2>Useful Reading</h2>
          <p>{palace.positiveReading}</p>
        </section>
        <section>
          <h2>Caution</h2>
          <p>{palace.caution}</p>
        </section>
        <section>
          <h2>Reflection Questions</h2>
          <ul>
            {palace.reflectionQuestions.slice(0, 4).map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
        </section>
      </div>
      <div className="actions">
        <Link className="secondary-button" href="/six-palaces">
          Back to Six Palaces
        </Link>
        <Link className="button" href="/tool">
          Try the Tool
        </Link>
      </div>
    </main>
  );
}
