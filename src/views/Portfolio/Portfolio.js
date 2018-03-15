import React, { Component } from 'react';
import { connect } from 'react-redux';

import projectActions from '../../store/project/actions';

import ProjectsFilter from '../../containers/ProjectsFilter';
import ProjectsGrid from '../../containers/ProjectsGrid';
import SingleProject from '../../containers/SingleProject';


import {
  PortfolioWrapper,
  ProjectCard,
  ProjectsCard,
} from './Portfolio.styles';

export class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      isProjectOpen: false,
    }
  }

  openProject = (id) => {
    const {
      setSelectedProject,
    } = this.props;

    window.scrollTo(0,0);

    setSelectedProject(id);
    this.setState({ isProjectOpen: true });
  };

  closeProject = () => {
    this.setState({ isProjectOpen: false });
  };

  render() {
    const {
      project,
    } = this.props;

    const {
      isProjectOpen,
    } = this.state;

    return (
      <PortfolioWrapper>
        <ProjectsCard title="Portfolio" isProjectOpen={ isProjectOpen }>
          <ProjectsFilter />
          <ProjectsGrid openProject={ this.openProject } />
        </ProjectsCard>

        <ProjectCard title={ project.name } isProjectOpen={ isProjectOpen }>
          <button onClick={ this.closeProject }>Close me</button>
          <SingleProject />
        </ProjectCard>
      </PortfolioWrapper>
    )
  }
}

export default connect((state) => ({
  project: state.project.all[state.project.selected],
}), {
  setSelectedProject: projectActions.setSelectedProject,


})(Portfolio);
