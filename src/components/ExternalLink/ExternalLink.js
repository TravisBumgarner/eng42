import React, { Component } from 'react';

import {
  ExternalLinkWrapper
} from './ExternalLink.styles';

export default class ExternalLink extends Component {

  render() {
    const {
      children,
      primary,
      href,
      onClick,
    } = this.props;

    return (
      <ExternalLinkWrapper
        target="_blank"
        primary={ primary }
        href={ href }
        onClick={ onClick }
      >
        {children}
      </ExternalLinkWrapper>
    )
  }
}