import React, { Component } from 'react'

import { Title } from 'SharedComponents'
import { SectionWrapper, ContentWrapper } from './Section.styles'

const Section = ({ children, title }) => {
    return (
        <SectionWrapper>
            <Title size="small">{title}</Title>
            <ContentWrapper>{children}</ContentWrapper>
        </SectionWrapper>
    )
}

export default Section
