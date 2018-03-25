import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  ProjectTileWrapper,
  ProjectDescription,
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
      project: { preview_img, name},
      gridWidth,
    } = this.props;

    return (
      <ProjectTileWrapper
        previewImageSrc = { preview_img && preview_img.src }
        gridWidth = { gridWidth }
        onClick = { this.openProject }
      >
        <ProjectDescription>
          { name }
        </ProjectDescription>
      </ProjectTileWrapper>
    )
  }
}

export default connect((state, ownProps) => ({
  project: state.project.all[ownProps.projectId],
}), {
})(ProjectTile);
