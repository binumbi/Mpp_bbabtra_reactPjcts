// // src/app/news/page.tsx
// import { useState, useEffect } from 'react';

// const API_URL = 'http://localhost:5000/api/news';

// export async function getStaticProps() {
//   const res = await fetch(API_URL);
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//     revalidate: 60, // Re-generate the page every 60 seconds (ISR)
//   };
// }

// export default function NewsPage({ articles }) {
//   return (
//     <main className="container mx-auto p-4">
//       <h1 className="text-4xl font-bold">Latest News (SSG with ISR)</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
//         {articles.map((article) => (
//           <div key={article.id} className="bg-white rounded-lg shadow-md p-4">
//             <h2 className="text-xl font-semibold">{article.title}</h2>
//             <p className="text-gray-700 mt-2">{article.description}</p>
//             <a
//               href={`/news/${article.id}`}
//               className="text-blue-500 hover:underline mt-4 block"
//             >
//               Read more
//             </a>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }



// src/app/news/page.tsx
// const API_URL = 'http://localhost:5000/api/news';

// export default async function NewsPage() {
//   const res = await fetch(API_URL, {
//     // Revalidate the page every 60 seconds
//     next: { revalidate: 60 },
//   });
//   const articles = await res.json();

//   return (
//     <main className="container mx-auto p-4">
//       <h1 className="text-4xl font-bold">Latest News</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
//         {articles.map((article) => (
//           <div key={article.id} className="bg-white rounded-lg shadow-md p-4">
//             <h2 className="text-xl font-semibold">{article.title}</h2>
//             <p className="text-gray-700 mt-2">{article.description}</p>
//             <a
//               href={`/news/${article.id}`}
//               className="text-blue-500 hover:underline mt-4 block"
//             >
//               Read more
//             </a>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }



// src/app/news/client-side.tsx
// 'use client'; // This tells Next.js it's a Client Component
// import { useEffect, useState } from 'react';

// const API_URL = 'http://localhost:5000/api/news';

// export default function NewsPage() {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(API_URL);
//         const data = await response.json();
//         setArticles(data);
//       } catch (err) {
//         setError('Failed to fetch news articles');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   if (loading) {
//     return <p>Loading news articles...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <main className="container mx-auto p-4">
//       <h1 className="text-4xl font-bold">Latest News (Client-Side Fetching)</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
//         {articles.map((article) => (
//           <div key={article.id} className="bg-white rounded-lg shadow-md p-4">
//             <h2 className="text-xl font-semibold">{article.title}</h2>
//             <p className="text-gray-700 mt-2">{article.description}</p>
//             <a
//               href={`/news/${article.id}`}
//               className="text-blue-500 hover:underline mt-4 block"
//             >
//               Read more
//             </a>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }




const API_URL = 'http://localhost:5000/api/news';

// This is a server component
export default async function NewsPage() {
  // Fetch the data directly in the server component
  const res = await fetch(API_URL);
  const articles = await res.json();

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p className="text-gray-700 mt-2">{article.description}</p>
            <a
              href={`/news/${article.id}`}
              className="text-blue-500 hover:underline mt-4 block"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
