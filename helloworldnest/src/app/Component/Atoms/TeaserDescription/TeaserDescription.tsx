"use client"

import React, { Component } from 'react'

type Props = {
    children: string;
}
type State = {
    children: string;
}

export default class TeaserDescription extends Component<Props,State> {
    constructor(props: Props) {
        super(props);
        this.state = {
          children: props.children
        };
    }   

  render() {
    return (
      <p>{this.state.children}</p>
    )
  }
}
