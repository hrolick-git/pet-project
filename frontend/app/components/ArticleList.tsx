"use client";

import styles from './ArticleList.module.scss';

export default function ArticleList({ articles }: { articles: any[] }) {
    console.log('Rendering ArticleList with articles:', articles);
  return (
    <ul className={styles.list}>
      {articles.length > 0 ? (
        articles.map(a => (
          <li key={a.id} className={styles.item}>
            {console.log('Rendering article:', a)}
            {a.title || 'No title'}
          </li>
        ))
      ) : (
        <p>No articles yet</p>
      )}
    </ul>
  );
}
