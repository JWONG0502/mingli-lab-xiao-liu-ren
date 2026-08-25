import type { Metadata } from "next";
import Link from "next/link";
import { articles, getArticle } from "@/content/articles";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  return {
    title: `${article.title} | Xiao Liu Ren Lab`,
    description: article.summary,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);

  return (
    <main className="panel">
      <p className="eyebrow">Learn</p>
      <h1>{article.title}</h1>
      <p className="lead">{article.summary}</p>
      <div className="article-body" style={{ marginTop: 28 }}>
        {article.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </div>
      <div className="actions">
        <Link className="secondary-button" href="/learn">
          Back to Learn
        </Link>
        <Link className="button" href="/tool">
          Try the Tool
        </Link>
      </div>
    </main>
  );
}
