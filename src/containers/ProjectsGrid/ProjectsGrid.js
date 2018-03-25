import React, { Component } from 'react';
import { connect } from 'react-redux';
import sizeMe from 'react-sizeme'

import ProjectTile from '../../containers/ProjectTile';

import {
  ProjectsGridWrapper,
} from './ProjectsGrid.styles';

export class ProjectsGrid extends Component {
  render() {
    const {
      projects,
      filteredProjectIds,
      openProject,
      size: { width }
    } = this.props;
    const projectIds = filteredProjectIds.length ? filteredProjectIds : Object.keys(projects);

    const Projects = projectIds.map(p => {
      return <ProjectTile
        key={ p }
        projectId={ p }
        openProject={ openProject }
        gridWidth={ width }
      />;
    });

    return (
      <ProjectsGridWrapper>
        {Projects}
      </ProjectsGridWrapper>
    )
  }
}

export default sizeMe()(connect((state, ownProps) => ({
  projects: state.project.all,
  filteredProjectIds: state.project.filtered,
}), {
})(ProjectsGrid));
