
"use client"

import React, { Component } from 'react'

type Props ={
    message:string,
    title:string

}

type State = {
    title:string;
}


export default class Label extends Component<Props,State> {
    constructor(props:Props){
        super(props);

        this.state={
            title:"MyLabel"
        }
    }


  render() {
    return (
      <div>
        <label className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1'>{this.state.title}</label>
      </div>
    )
  }
}
