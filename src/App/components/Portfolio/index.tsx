import React from 'react'
import styled from 'styled-components'
import { Tile } from './components'
import { Project } from '../../../content'

const GridWrapper = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

type PortfolioProps = {
    projects: Project[]
}

const Portfolio = ({ projects }: PortfolioProps) => {
    const Projects = Object.values(projects).map(project => {
        return <Tile key={project.id} project={project} />
    })

    return <GridWrapper>{Projects}</GridWrapper>
}

export default Portfolio
