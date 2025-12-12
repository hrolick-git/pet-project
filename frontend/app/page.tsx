"use client";

import { useEffect, useState } from "react";
import ArticleList from "./components/ArticleList";

export default function Page() {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`)
      .then(res => res.json())
      .then(data => setArticles(data.data || []))
      .catch(() => setArticles([]));
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      <ArticleList articles={articles} />
    </div>
  );
}
