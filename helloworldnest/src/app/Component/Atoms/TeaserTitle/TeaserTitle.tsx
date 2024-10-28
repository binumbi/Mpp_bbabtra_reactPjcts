"use client"

import Link from 'next/link';
import React, { Component } from 'react';

type Props = {
    link: string;
    children: string;
}
type State = {
    children: string;
    link: string;
}

export default class TeaserTitle extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            children: props.children,
            link: props.link
        }
    }
  render() {
    return (
        <Link href={this.state.link}>{this.state.children}</Link>
    )
  }
}