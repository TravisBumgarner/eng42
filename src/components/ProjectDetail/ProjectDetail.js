import React, { Component } from 'react';

import {
  ProjectDetailWrapper,
  IconWrapper,
  TextWrapper,
} from "./ProjectDetail.styles";

export default class ProjectDetail extends Component {

  render() {
    const {
      icon,
      text,
    } = this.props;

    return (
      <ProjectDetailWrapper>
        <IconWrapper>
          { icon }
        </IconWrapper>
        <TextWrapper>
          { text }
        </TextWrapper>
      </ProjectDetailWrapper>
    )
  }
}