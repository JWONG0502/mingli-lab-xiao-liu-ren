import Link from "next/link";
import { articles } from "@/content/articles";

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
