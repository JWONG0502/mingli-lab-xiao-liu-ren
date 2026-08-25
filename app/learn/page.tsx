import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/content/articles";

export const metadata: Metadata = {
  title: "Learn Xiao Liu Ren | Beginner Articles and Reading Guide",
  description:
    "Read beginner-friendly Xiao Liu Ren articles about the method, six palaces, tool usage, and calm interpretation.",
};

export default function LearnPage() {
  return (
    <main className="panel">
      <p className="eyebrow">Learn</p>
      <h1>Learn Xiao Liu Ren</h1>
      <p className="lead">Short articles for reading the method calmly and carefully.</p>
      <div className="article-list" style={{ marginTop: 28 }}>
        {articles.map((article) => (
          <Link className="card" href={`/learn/${article.slug}`} key={article.slug}>
            <h2>{article.title}</h2>
            <p>{article.summary}</p>
            <span className="palace-term">{article.readTime}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
