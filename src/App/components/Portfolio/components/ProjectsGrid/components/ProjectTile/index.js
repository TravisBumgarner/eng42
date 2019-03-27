import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ProjectTileWrapper, ProjectDescription } from './ProjectTile.styles'

export class ProjectTile extends Component {
    openProject = () => {
        const {
            openProject,
            project: { id }
        } = this.props

        openProject(id)
    }

    render() {
        const {
            project: { preview_img, name },
            gridWidth
        } = this.props
        // TODO: Move onClick to anchor tag
        return (
            <ProjectTileWrapper onClick={this.openProject}>
                {preview_img && <img src={preview_img.src} />}
            </ProjectTileWrapper>
        )
    }
}

export default connect(
    (state, ownProps) => ({
        project: state.project.all[ownProps.projectId]
    }),
    {}
)(ProjectTile)
