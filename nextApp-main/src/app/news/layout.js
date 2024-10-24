import { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function NewsLayout({ children }) {
  return (
    <div>
      <Head>
        <title>NewsApp - Stay Updated with the Latest News</title>
      </Head>
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex justify-between">
          <Link legacyBehavior href="/">
            <a className="font-bold text-xl">News Home</a>
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link legacyBehavior href="/news">
                <a>All News</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/news/local">
                <a>Local News</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-6">{children}</main>

      <footer className="bg-gray-900 text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} NewsApp. All rights reserved.</p>
      </footer>
    </div>
  );
}
