import React, { Component } from 'react';

import {
  DividerWrapper
} from './Divider.styles';

export default class Divider extends Component {

  render() {
    const {
      primary,
      className,
    } = this.props;

    return <DividerWrapper
      primary={ primary }
      className={ className }
    />
  }
}