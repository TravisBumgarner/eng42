import React, { Component } from 'react'

import { Tile } from './components'

import { GridWrapper } from './Grid.styles'

const Grid = ({ projects }) => {
    const Projects = Object.values(projects).map(project => {
        return <Tile key={project.id} project={project} />
    })

    return <GridWrapper>{Projects}</GridWrapper>
}

export default Grid
