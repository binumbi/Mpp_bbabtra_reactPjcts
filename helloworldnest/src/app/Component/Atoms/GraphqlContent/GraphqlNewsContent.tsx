import React from 'react'
import { ApolloProvider,ApolloClient,InMemoryCache } from '@apollo/client'




function GraphqlNewsContent() {


    const client= new ApolloClient({
        uri:"http://localhost:5000/graphql",
        cache: new InMemoryCache()
    });

  return (

    <ApolloProvider client={client}>
        <div>
      
        </div>
    </ApolloProvider>
 
  )
}

export default GraphqlNewsContent
