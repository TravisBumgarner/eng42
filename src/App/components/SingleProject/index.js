import React, { Component } from 'react'
import { connect } from 'react-redux'

import projectActions from '../../../store/project/actions'

import { RenameMe } from './components' //TODO Rename RenameMe

import { SingleProjectWrapper, ProjectCard } from './SingleProject.styles'

const SingleProject = ({ project }) => {
    return (
        <SingleProjectWrapper>
            <ProjectCard title={project.name}>
                <RenameMe />
            </ProjectCard>
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
