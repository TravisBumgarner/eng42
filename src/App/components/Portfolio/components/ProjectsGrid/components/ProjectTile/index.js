import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ProjectTileWrapper, SiteLink } from './ProjectTile.styles'

const ProjectTile = ({ project: { id, preview_img, name } }) => {
    return (
        <SiteLink to={`/portfolio/${id}`}>
            <ProjectTileWrapper>
                {preview_img && <img src={preview_img.src} />}
                <h5>{name}</h5>
            </ProjectTileWrapper>
        </SiteLink>
    )
}

export default connect(
    (state, ownProps) => ({
        project: state.project.all[ownProps.projectId]
    }),
    {}
)(ProjectTile)
