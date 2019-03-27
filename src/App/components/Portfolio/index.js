import React, { Component } from 'react'
import { connect } from 'react-redux'
import projectActions from '../../../store/project/actions'

import { ProjectsFilter, ProjectsGrid, SingleProject } from './components'

import {
    PortfolioWrapper,
    ProjectCard,
    ProjectsCard,
    ProjectNoScrollWrapper,
    ProjectsNoScrollWrapper
} from './Portfolio.styles'

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
        const { project } = this.props

        const { isProjectOpen } = this.state

        return (
            <PortfolioWrapper>
                <ProjectsNoScrollWrapper isProjectOpen={isProjectOpen}>
                    <ProjectsCard title="Portfolio">
                        <ProjectsFilter />
                        <ProjectsGrid openProject={this.openProject} />
                    </ProjectsCard>
                </ProjectsNoScrollWrapper>

                <ProjectNoScrollWrapper isProjectOpen={isProjectOpen}>
                    <ProjectCard onClick={this.closeProject} shiftHeaderRight title={project.name}>
                        {isProjectOpen && <SingleProject />}
                    </ProjectCard>
                </ProjectNoScrollWrapper>
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
