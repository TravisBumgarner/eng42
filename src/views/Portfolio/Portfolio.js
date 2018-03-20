import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import projectActions from '../../store/project/actions';

import ProjectsFilter from '../../containers/ProjectsFilter';
import ProjectsGrid from '../../containers/ProjectsGrid';
import SingleProject from '../../containers/SingleProject';

import {
  PortfolioWrapper,
  ProjectCard,
  ProjectsCard,
  CloseIcon,
  ProjectNoScrollWrapper,
  ProjectsNoScrollWrapper,
} from './Portfolio.styles';

export class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      isProjectOpen: false,
    }
  }

  componentWillMount(){
    const {
      location: { search }
    } = this.props;
    const parsed = queryString.parse(search);
    if (parsed.projectId){
      this.openProject(parsed.projectId);
    }
  }

  openProject = (id) => {
    const {
      setSelectedProject,
    } = this.props;

    setSelectedProject(id);
    this.setState({ isProjectOpen: true });
    window.scrollTo(0,0);

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
        <ProjectsNoScrollWrapper isProjectOpen={ isProjectOpen }>
          <ProjectsCard title="Portfolio" >
            <ProjectsFilter />
            <ProjectsGrid openProject={ this.openProject } />
          </ProjectsCard>
        </ProjectsNoScrollWrapper>

        <ProjectNoScrollWrapper isProjectOpen={ isProjectOpen }>
          <ProjectCard title={ project.name } >
            <CloseIcon size={50} onClick={ this.closeProject } />
            <SingleProject />
          </ProjectCard>
        </ProjectNoScrollWrapper>
      </PortfolioWrapper>
    )
  }
}

export default connect((state) => ({
  project: state.project.all[state.project.selected],
}), {
  setSelectedProject: projectActions.setSelectedProject,

})(Portfolio);
