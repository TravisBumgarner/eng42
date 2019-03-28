import React, { Component } from 'react';

import {
  ProjectDetailWrapper,
  Divider,
  ContentWrapper,
  Title,
} from "./ProjectDetail.styles";

export default class ProjectDetail extends Component {

  render() {
    const {
      icon,
      children,
      title,
    } = this.props;

    return (
      <ProjectDetailWrapper>
        <Title>
          { title }
        </Title>
        <Divider primary height={ 1 } />
        <ContentWrapper>
          { children }
        </ContentWrapper>
      </ProjectDetailWrapper>
    )
  }
}