import React, { Component } from 'react';

import Divider from '../../components/Divider';

import {
  CardTitle,
  CardContent,
  CardWrapper,
} from "./Card.styles";

export default class Card extends Component {

  render() {
    const {
      title,
      children,
      className,
    } = this.props;

    return (
      <CardWrapper className={className}>

        <CardTitle>
          { title }
        </CardTitle>

        <Divider primary/>

        <CardContent>
          { children }
        </CardContent>

        <Divider primary/>

      </CardWrapper>

    )

  }
}
