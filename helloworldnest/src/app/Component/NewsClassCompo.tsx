import React, { Component } from 'react'


type Props ={
    message:string,
    title:string

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
           
    }

const getnews=async ()=>{

}


  render() {
    return (
      <div>
        <h3>This is a News Class component</h3>
      </div>
    )
  }
}
