"use client"

import React from 'react'
import  { useState,useEffect } from 'react'

import { useQuery,gql } from '@apollo/client';

function Productcard() {

    const GET_NEWS =gql`{
        articles{
            id
            image
            description
            title
        }
      }`;

    // const GET_NEWS =gql`{
    //         newsarticles{
    //         id
    //         title
    //         content
    //         }
    // }`;

      const{data,loading,error}= useQuery(GET_NEWS);
   
      const [articleList, setArticle]=useState([]);
  
      useEffect(()=>{
     
          if(data){
            setArticle(data.newsarticles);
          }
      });

  return (
    <>
        <div class="grid grid-cols-2 gap-4">
            {
                    articleList.map((item)=>{
                        return <div className="card bg-base-100 w-96 shadow-xl">
                        <figure>
                            {
                                data.newsarticles.image.map((item)=>{
                                    return <img src={item.url} alt={item.alt} />
                                })
                            }
                          
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{item.title}</h2>
                          <p>{item.content}</p>
                          <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                          </div>
                        </div>
                      </div>
                    })
            }
            
            </div>
    </>

  )
}

export default Productcard
