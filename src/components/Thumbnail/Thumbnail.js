import React, { Component } from 'react';

import {
  ThumbnailWrapper,
  Image,
} from './Thumbnail.styles';

export default class Thumbnail extends Component {

  onClick = () => {
    const {
      onClick,
      src,
    } = this.props;

    onClick(src);
  }

  render() {
    const {
      src,
      alt,
    } = this.props;

    return (
      <ThumbnailWrapper>
        <Image
          onClick={ this.onClick }
          src={ src }
          alt={ alt }
        />
      </ThumbnailWrapper>
    )
  }
}