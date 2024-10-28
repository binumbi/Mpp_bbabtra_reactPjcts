"use client"

import React, { Component } from 'react'

type Props ={
    message:string,
    title:string
    

}

type State = {
    paragragh:string;
    
}

export default class NewsContent extends Component<Props,State> {

    constructor(props:Props){
        super(props);

        this.state={
            paragragh:"This is the first para"
        }
    }

  render() {
    return (
      <div>
        <p className='bg-slate-300 text-white'>{this.state.paragragh}</p>
      </div>
    )
  }
}
