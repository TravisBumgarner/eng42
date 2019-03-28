import React, { Component } from 'react'

import { Title, Text } from 'SharedComponents'
import { SectionWrapper } from './Section.styles'

const Section = ({ children, title }) => {
    return (
        <SectionWrapper>
            <Title size="small">{title}</Title>
            <Text>{children}</Text>
        </SectionWrapper>
    )
}

export default Section
