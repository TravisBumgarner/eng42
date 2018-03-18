import React, { Component } from 'react';

import {
  PhotoThumbnailWrapper,
  Image,
} from './PhotoThumbnail.styles';

export default class PhotoThumbnail extends Component {

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
      <PhotoThumbnailWrapper>
        <Image
          onClick={ this.onClick }
          src={ src }
          alt={ alt }
        />
      </PhotoThumbnailWrapper>
    )
  }
}