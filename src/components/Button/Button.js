import React, { Component } from 'react';

import {
  ButtonWrapper
} from './Button.styles';

export default class Button extends Component {

  render() {
    const {
      primary,
      children,
    } = this.props;

    return (
      <ButtonWrapper primary={ primary }>
        {children}
      </ButtonWrapper>
    )
  }
}