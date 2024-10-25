"use client"


import React, { Component } from 'react'


type Props ={
    message:string,
    title:string

}

type State = {
    title:string;
}

export default class Button extends Component<Props,State> {
constructor(props:Props){
    super(props);

    this.state={
        title:"Fetch Api"
    }

}

  render() {
    return (
      <div>
        <button className='bg-blue-400 p-4 text-lg mb-10 text-white'>{this.state.title}</button>
      </div>
    )
  }
}
