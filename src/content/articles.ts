export type Article = {
  slug: string;
  title: string;
  summary: string;
  readTime: string;
  sections: {
    heading: string;
    body: string;
  }[];
};

export const articles: Article[] = [
  {
    slug: "what-is-xiao-liu-ren",
    title: "What Is Xiao Liu Ren?",
    summary: "A beginner-friendly introduction to a compact Chinese symbolic method.",
    readTime: "6 min read",
    sections: [
      {
        heading: "A small method for reflection",
        body: "Xiao Liu Ren is a classical Chinese symbolic method that uses lunar month, lunar day, and Chinese hour to form a six-palace pattern. This site presents it as cultural learning and reflective language, not as a deterministic prediction system.",
      },
      {
        heading: "What the palaces do",
        body: "Each palace names a symbolic condition such as stability, delay, movement, communication, modest support, or uncertainty. A result is best read as a prompt for careful attention.",
      },
    ],
  },
  {
    slug: "six-palaces-of-xiao-liu-ren",
    title: "The Six Palaces of Xiao Liu Ren",
    summary: "Learn the six palace names, pinyin, and symbolic meanings.",
    readTime: "8 min read",
    sections: [
      {
        heading: "Not lucky or unlucky labels",
        body: "The six palaces should not be reduced to simple good or bad outcomes. They are symbolic states that invite different kinds of reflection.",
      },
      {
        heading: "Chinese terms matter",
        body: "Chinese names are shown with pinyin to preserve the original system while making the tool accessible to English readers.",
      },
    ],
  },
  {
    slug: "how-to-use-the-tool",
    title: "How to Use the Xiao Liu Ren Tool",
    summary: "Choose a context, set time and time zone, then reflect on the result.",
    readTime: "5 min read",
    sections: [
      {
        heading: "Choose, cast, reflect",
        body: "Select a reflection context, optionally write a private topic, choose date, time, and time zone, then cast the pattern. The optional topic stays on the page and is not stored.",
      },
      {
        heading: "Read slowly",
        body: "Use the result to notice themes, questions, and cautions. Do not use it for medical, legal, financial, emergency, gambling, or pregnancy decisions.",
      },
    ],
  },
  {
    slug: "read-without-overreacting",
    title: "How to Read a Result Without Overreacting",
    summary: "A calmer way to interpret symbolic language.",
    readTime: "5 min read",
    sections: [
      {
        heading: "Avoid certainty",
        body: "A palace does not guarantee that something will happen. Treat it as a reflective focus and compare it with observable facts.",
      },
      {
        heading: "Use questions",
        body: "The reflection questions are often more useful than a fixed conclusion. They help you slow down before reacting.",
      },
    ],
  },
  {
    slug: "xiao-liu-ren-as-reflection-practice",
    title: "Xiao Liu Ren as a Reflection Practice",
    summary: "Using the method as a structured pause rather than a command.",
    readTime: "6 min read",
    sections: [
      {
        heading: "A structured pause",
        body: "Reflection tools are most useful when they create enough distance for clearer judgment. Xiao Liu Ren can be approached as a way to pause and name patterns.",
      },
      {
        heading: "The user decides",
        body: "This tool explains symbolic meanings. The user makes their own judgment.",
      },
    ],
  },
];

export function getArticle(slug: string): Article {
  const article = articles.find((item) => item.slug === slug);
  if (!article) throw new Error(`Unknown article: ${slug}`);
  return article;
}
