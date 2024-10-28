"use client"

import Image from 'next/image';
import React, { Component } from 'react';

type Props = {
    src: string;
    name: string;
}
type State = {
    name: string;
    src: string;
}

export default class TeaserImage extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            name: props.name,
            src: props.src
        }
    }
  render() {
    return (
        <Image src={this.state.src} alt={this.state.name} />
    )
  }
}