// 'use client'

// import { useParams } from 'next/navigation';

// export default function NewsArticlePage() {
//   const params = useParams();
//   const { id } = params;

//   return (
//     <main className="container mx-auto p-4">
//       <h1 className="text-4xl font-bold">News Article {id}</h1>
//       <p>This is the detailed view for article {id}.</p>
//     </main>
//   );
// }




// src/app/news/[id]/page.tsx

// const API_URL = 'http://localhost:5000/api/news';

// export async function getStaticPaths() {
//   // Fetch all news articles to determine available IDs
//   const res = await fetch(API_URL);
//   const articles = await res.json();

//   // Create paths for each article
//   const paths = articles.map((article) => ({
//     params: { id: article.id.toString() },
//   }));

//   return { paths, fallback: 'blocking' };
// }

// export async function getStaticProps({ params }) {
//   const res = await fetch(`${API_URL}/${params.id}`);
//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//     revalidate: 60, // Re-generate the page every 60 seconds
//   };
// }

// export default function NewsArticlePage({ article }) {
//   return (
//     <main className="container mx-auto p-4">
//       <h1 className="text-4xl font-bold">{article.title}</h1>
//       <p>{article.content}</p>
//     </main>
//   );
// }

// src/app/news/[id]/page.js

const API_URL = 'http://localhost:5000/api/news';

export default async function NewsArticlePage({ params }) {
  const { id } = await params;  // Fetch the dynamic id from the URL params

  // Fetch the specific article by ID
  const res = await fetch(`${API_URL}/${id}`);
  const article = await res.json();

  // Handle the case where the article isn't found
  if (!article) {
    return <h1>Article not found</h1>;
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">{article.title}</h1>
      <p className="mt-4">{article.content}</p>
    </main>
  );
}
