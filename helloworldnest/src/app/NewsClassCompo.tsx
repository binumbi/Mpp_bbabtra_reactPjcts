import React, { Component } from 'react'
import { useQuery,gql } from '@apollo/client'

type Props ={
    message:string,
    

}

type State = {
    title:string;
}



interface Articledata{
    id:number;
    title:string;
    decription:string;
    image:string;

}



export default class NewsClassCompo extends Component<Props,State> {
    constructor(props:Props){
            super(props);
           
        this.getnews.bind(this.context)

    }

getnews=async ()=>{
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
    return data;
}


  render() {
    return (
      <div>
        <h3>This is a News Class component</h3>
        <input type="button" value="GetNews" onClick={this.getnews}>Get NEws</input>
      </div>
    )
  }
}
