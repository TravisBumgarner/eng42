import React, { Component } from 'react';

import {
  ProjectImageWrapper,
  Image,
} from "./ProjectImage.styles";

export default class ProjectImage extends Component {

  render() {
    const {
      src,
      alt,
    } = this.props;

    return (
      <ProjectImageWrapper>
        <Image
          onClick={ this.onClick }
          src={ src }
          alt={ alt }
        />
      </ProjectImageWrapper>
    )
  }
}