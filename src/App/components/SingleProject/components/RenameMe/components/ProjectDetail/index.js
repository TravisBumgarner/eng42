import React, { Component } from 'react'

import { ProjectDetailWrapper, Divider, ContentWrapper, Title } from './ProjectDetail.styles'

const ProjectDetail = ({ children, title }) => {
    return (
        <ProjectDetailWrapper>
            <Title>{title}</Title>
            <Divider primary height={1} />
            <ContentWrapper>{children}</ContentWrapper>
        </ProjectDetailWrapper>
    )
}

export default ProjectDetail
