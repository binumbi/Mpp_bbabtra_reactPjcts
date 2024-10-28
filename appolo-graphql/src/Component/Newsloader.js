import React from 'react'
import { ApolloProvider,ApolloClient,InMemoryCache } from '@apollo/client'
import Article from './Article';

function Newsloader() {

    const client= new ApolloClient({
        uri:"http://localhost:5000/graphql",
        cache: new InMemoryCache()
    });



  return (
    <ApolloProvider client={client}>
        <div>
            <h1>This Is Newsloader</h1>
            <Article></Article>
         </div>
    </ApolloProvider>

  )
}

export default Newsloader
