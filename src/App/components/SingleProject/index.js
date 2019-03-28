import React, { Component } from 'react'
import { connect } from 'react-redux'

import projectActions from '../../../store/project/actions'

import { SingleProject } from './components'

import { PortfolioWrapper, ProjectCard } from './SingleProject.styles'

export class Portfolio extends Component {
    render() {
        const { project } = this.props

        return (
            <PortfolioWrapper>
                <ProjectCard title={project.name}>
                    <SingleProject />
                </ProjectCard>
            </PortfolioWrapper>
        )
    }
}

export default connect(
    state => ({
        project: state.project.all[state.project.selected]
    }),
    {
        setSelectedProject: projectActions.setSelectedProject
    }
)(Portfolio)
