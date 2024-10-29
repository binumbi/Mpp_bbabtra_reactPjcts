"use client"

import React from 'react'
import { ApolloProvider,ApolloClient,InMemoryCache } from '@apollo/client'
import Article from './Article';


function GraphqlNewsContent() {


    const client= new ApolloClient({
        uri:"http://localhost:5000/graphql",
        cache: new InMemoryCache()
    });

  return (

    <ApolloProvider client={client}>
        <div>
      <Article>
        
      </Article>
      
        </div>
    </ApolloProvider>
 
  )
}

export default GraphqlNewsContent
