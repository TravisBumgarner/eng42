import React, { Component } from 'react';
import { connect } from 'react-redux';

import ExternalLink from '../../components/ExternalLink';
import ProjectDetail from '../../components/ProjectDetail';

import FaCalendar from 'react-icons/lib/fa/calendar';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaHeader from 'react-icons/lib/fa/header';
import FaExternalLink from 'react-icons/lib/fa/external-link';

import {
  ProjectTileWrapper,
  ProjectDescription,
  SmallDivider,
} from './ProjectTile.styles';

export class ProjectTile extends Component {

  openProject = () => {
    const {
      openProject,
      project: {id}
    } = this.props;

    openProject(id);
  };

  render() {
    const {
      project,
      gridWidth,
    } = this.props;

    return (
      <ProjectTileWrapper
        previewImageSrc = { project.preview_img && project.preview_img.src }
        gridWidth = { gridWidth }
        onClick = { this.openProject }
      >
        <ProjectDescription>
          { project.name }
        </ProjectDescription>
      </ProjectTileWrapper>
    )
  }
}

export default connect((state, ownProps) => ({
  project: state.project.all[ownProps.projectId],
  skills: state.skill.all,
}), {
})(ProjectTile);
