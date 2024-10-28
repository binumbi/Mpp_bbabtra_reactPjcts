import React, { useContext } from 'react'
import { useQuery,gql } from '@apollo/client'
import { useState,useEffect } from 'react';

function Article() {

    const [articledata,setarticle]=useState([]);

    const ARTICLE_QUERY = gql`{
        articles{
          id
          title
          image
          description
          author{
            name
          }
        }
    }` ;       

const {data,loading,error} = useQuery(ARTICLE_QUERY);
useEffect(()=>{
    //console.log(data.articles);
    if(data){
        setarticle(data.articles);
    }
   
},[data])

  return (
    <div>
      <p>Artile Loading. wait...</p>
      <ul>
        {
             articledata.map((item)=>{
                return <li key={item.id}>{item.title}</li>
             })
        }
      </ul>
    </div>
  )
}

export default Article
