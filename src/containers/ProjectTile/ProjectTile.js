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
  ProjectTitle,
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
      skills,
    } = this.props;

    const projectSkills = project.skill.map(s => skills[s].name).join(", ");

    return (
      <ProjectTileWrapper
        previewImageSrc = { project.preview_img && project.preview_img.src }
      >
        <ProjectTitle>
          { project.name }
        </ProjectTitle>

        <SmallDivider />

        <ProjectDetail
          icon={ <FaHeader/> }
          content={ project.headline }
        />

        <ProjectDetail
          icon={ <FaCalendar/> }
          content={ `${project.start_date.slice(0, -3)} - ${project.end_date.slice(0, -3)}` /* Remove Day of Mont */ }
        />

        <ProjectDetail
          icon={ <FaPencil/> }
          content={ projectSkills.length < 100 ? projectSkills : `${projectSkills.slice(0,100)}...` }
        />

        <SmallDivider />

        <ProjectDetail
          icon={ <FaExternalLink/> }
          content={ <ExternalLink onClick={ this.openProject }>View Project</ExternalLink> }
        />

      </ProjectTileWrapper>
    )
  }
}

export default connect((state, ownProps) => ({
  project: state.project.all[ownProps.projectId],
  skills: state.skill.all,
}), {
})(ProjectTile);
