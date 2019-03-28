import React, { Component } from 'react'
import { connect } from 'react-redux'

import projectActions from '../../../store/project/actions'

import { Details } from './components'

import { SingleProjectWrapper } from './SingleProject.styles'

const SingleProject = ({
    project,
    match: {
        params: { id }
    },
    setSelectedProject
}) => {
    setSelectedProject(id)
    return (
        <SingleProjectWrapper>
            <Details />
        </SingleProjectWrapper>
    )
}

export default connect(
    state => ({
        project: state.project.all[state.project.selected]
    }),
    {
        setSelectedProject: projectActions.setSelectedProject
    }
)(SingleProject)
