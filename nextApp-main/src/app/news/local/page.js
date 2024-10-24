import Link from "next/link";

// src/app/news/local/page.tsx
export default function LocalNewsPage() {
    return (
      <main>
        <h1>Local News</h1>
        <ul>
          <li><Link href="/news/local/1">Local News Article 1</Link></li>
          <li><Link href="/news/local/2">Local News Article 2</Link></li>
        </ul>
      </main>
    );
  }
  