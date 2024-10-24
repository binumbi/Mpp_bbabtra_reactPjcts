'use client'

import { useParams } from 'next/navigation';

export default function LocalNewsArticlePage() {
  const params = useParams();
  const { id } = params;

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">Local News Article {id}</h1>
      <p>This is the detailed view for local news article {id}.</p>
    </main>
  );
}
