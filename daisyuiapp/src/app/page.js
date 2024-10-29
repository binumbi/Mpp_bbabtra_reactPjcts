
"use client"

import Image from "next/image";
import Sidebar from "@/Lib/Sidebar/Sidebar";
import { ApolloClient,ApolloProvider,InMemoryCache } from '@apollo/client';
import Footer from "@/Lib/Footer/Footer";
import Productcard from "@/Lib/Productcard/Productcard";


const client= new ApolloClient({
  uri:"http://localhost:5000/graphql",
  cache: new InMemoryCache()
});

export default function Home() {
  return (
      <ApolloProvider client={client}>
<div className="flex w-full flex-col border-opacity-50">
   <div className="card bg-blue-900 rounded-none grid h-20 place-items-center">
        <h1 className="text-white text-4xl">Mathrubhumi News Portal</h1>
    </div>
</div>
<div className="flex w-full">
  <div className=""><Sidebar></Sidebar></div>
    <div className="card flex-grow place-items-center"><Productcard></Productcard></div>
</div>

<Footer></Footer>
</ApolloProvider>
  );
}
