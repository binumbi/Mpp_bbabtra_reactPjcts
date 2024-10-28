"use client"


import React, { Component } from 'react'

type Props ={
    message:string,
    title:string

}

type State = {
    title:string;
}


export default class Heading extends Component<Props,State> {

    constructor(props:Props){
        super(props);

        this.state={
            title:"News Heading"
        }
    }

  render() {
    return (
      <div>
        <h1 className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-green-600 bg-green-200 uppercase last:mr-0 mr-1'>{this.state.title}</h1>
      </div>
    )
  }
}
