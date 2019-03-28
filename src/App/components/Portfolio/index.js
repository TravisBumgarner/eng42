import React, { Component } from 'react'
import styled from 'styled-components'

import { Card } from 'SharedComponents'
import { DEFAULT_PAGE_WRAPPER } from 'Theme'

import { ProjectsGrid } from './components'

const Portfolio = () => {
    return (
        <Card>
            <DEFAULT_PAGE_WRAPPER>
                <ProjectsGrid />
            </DEFAULT_PAGE_WRAPPER>
        </Card>
    )
}

export default Portfolio
