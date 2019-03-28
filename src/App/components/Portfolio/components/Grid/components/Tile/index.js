import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { TileWrapper } from './Tile.styles'

const Tile = ({ project: { id, preview_img, name } }) => {
    return (
        <NavLink to={`/${id}`}>
            <TileWrapper>
                {preview_img && <img src={preview_img.src} />}
                {/* <h5>{name}</h5> */}
            </TileWrapper>
        </NavLink>
    )
}

export default connect(
    (state, ownProps) => ({
        project: state.project.all[ownProps.projectId]
    }),
    {}
)(Tile)
