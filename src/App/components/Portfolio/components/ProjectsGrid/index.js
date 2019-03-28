import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ProjectTile } from './components'

import { ProjectsGridWrapper } from './ProjectsGrid.styles'

export class ProjectsGrid extends Component {
    render() {
        const { projects, filteredProjectIds, openProject } = this.props
        const projectIds = filteredProjectIds.length ? filteredProjectIds : Object.keys(projects)

        const Projects = projectIds.map(p => {
            return <ProjectTile key={p} projectId={p} openProject={openProject} />
        })

        return <ProjectsGridWrapper>{Projects}</ProjectsGridWrapper>
    }
}

export default connect(
    (state, ownProps) => ({
        projects: state.project.all,
        filteredProjectIds: state.project.filtered
    }),
    {}
)(ProjectsGrid)
