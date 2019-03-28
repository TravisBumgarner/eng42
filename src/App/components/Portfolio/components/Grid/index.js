import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Tile } from './components'

import { GridWrapper } from './Grid.styles'

const Grid = ({ projects, filteredProjectIds }) => {
    const projectIds = filteredProjectIds.length ? filteredProjectIds : Object.keys(projects)

    const Projects = projectIds.map(p => {
        return <Tile key={p} projectId={p} />
    })

    return <GridWrapper>{Projects}</GridWrapper>
}

export default connect(
    state => ({
        projects: state.project.all,
        filteredProjectIds: state.project.filtered
    }),
    {}
)(Grid)
