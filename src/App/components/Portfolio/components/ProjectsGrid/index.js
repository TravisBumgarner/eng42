import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ProjectTile } from './components'

import { ProjectsGridWrapper } from './ProjectsGrid.styles'

const ProjectsGrid = ({ projects, filteredProjectIds }) => {
    const projectIds = filteredProjectIds.length ? filteredProjectIds : Object.keys(projects)

    const Projects = projectIds.map(p => {
        return <ProjectTile key={p} projectId={p} />
    })

    return <ProjectsGridWrapper>{Projects}</ProjectsGridWrapper>
}

export default connect(
    state => ({
        projects: state.project.all,
        filteredProjectIds: state.project.filtered
    }),
    {}
)(ProjectsGrid)
