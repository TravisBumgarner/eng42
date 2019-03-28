import React, { Component } from 'react'
import { connect } from 'react-redux'
import projectActions from '../../../store/project/actions'

import { ProjectsGrid } from './components'

import { PortfolioWrapper, ProjectsCard } from './Portfolio.styles'

export class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isProjectOpen: false
        }
    }

    openProject = id => {
        const { setSelectedProject } = this.props

        setSelectedProject(id)
        this.setState({ isProjectOpen: true })
        window.scrollTo(0, 0)
    }

    closeProject = () => {
        this.setState({ isProjectOpen: false })
    }

    render() {
        return (
            <PortfolioWrapper>
                <ProjectsCard title="Portfolio">
                    <ProjectsGrid openProject={this.openProject} />
                </ProjectsCard>
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
