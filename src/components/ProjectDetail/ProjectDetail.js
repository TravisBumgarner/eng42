import React, { Component } from 'react';

import {
  ProjectDetailWrapper,
  IconWrapper,
  ContentWrapper,
} from "./ProjectDetail.styles";

export default class ProjectDetail extends Component {

  render() {
    const {
      icon,
      content,
    } = this.props;

    return (
      <ProjectDetailWrapper>
        <IconWrapper>
          { icon }
        </IconWrapper>
        <ContentWrapper>
          { content }
        </ContentWrapper>
      </ProjectDetailWrapper>
    )
  }
}