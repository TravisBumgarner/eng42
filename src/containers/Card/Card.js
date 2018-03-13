import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    } = this.props;

    return (
      <CardWrapper>

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
