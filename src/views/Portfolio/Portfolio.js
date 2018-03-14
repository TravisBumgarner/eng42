import React, { Component } from 'react';
import { connect } from 'react-redux';

import projectActions from '../../store/project/actions';

import ProjectsFilter from '../../containers/ProjectsFilter';
import ProjectTile from '../../containers/ProjectTile';
// import SingleProject from '../../containers/SingleProject';

import {
  AlignToDropdown,
  FilterIcon,
  ProjectsWrapper,
  FilterWrapper,
  SkillDropdownMenu,
  CategoryDropdownMenu,
  PortfolioWrapper,
  SingleProjectWrapper,
  ScrollingCardRight,
  ScrollingCardLeft,
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
      projects,
      project,
      loaded,
      skills,
      categories,
      filteredProjectIds,
    } = this.props;

    const {
      selectedCategory,
      selectedSkill,
      isProjectOpen,
    } = this.state;

    const projectIds = filteredProjectIds.length ? filteredProjectIds : Object.keys(projects); //TODO rewrite this last bit

    const Projects = projectIds.map(p => {
      console.log(projects[p])
      return <ProjectTile
        key={ p }
        projectId={ p }
        openProject={ this.openProject }
      />;
    });

    const SingleProjectDetails = Object.keys(project).map(d => {
      return (
        <p key={d.id}>
          <b>{d}</b> {String(project[d])}
        </p>
      );
    });

    return (
      <PortfolioWrapper>
        <ScrollingCardLeft title="Portfolio" isProjectOpen={ isProjectOpen }>
          <ProjectsFilter />
          <ProjectsWrapper>
            {Projects}
          </ProjectsWrapper>
        </ScrollingCardLeft>

        <ScrollingCardRight title={project.name} isProjectOpen={ isProjectOpen }>
          <button onClick={ this.closeProject }>Close me</button>
          { SingleProjectDetails }
        </ScrollingCardRight>
      </PortfolioWrapper>
    )
  }
}

export default connect((state) => ({
  projects: state.project.all,
  project: state.project.all[state.project.selected],
  categories: state.category.all,
  skills: state.skill.all,
  filteredProjectIds: state.project.filtered,
}), {
  setSelectedProject: projectActions.setSelectedProject,


})(Portfolio);
