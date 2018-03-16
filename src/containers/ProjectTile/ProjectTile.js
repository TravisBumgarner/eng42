import React, { Component } from 'react';
import { connect } from 'react-redux';

import Divider from '../../components/Divider';
import ExternalLink from '../../components/ExternalLink';

import {
  ProjectTileWrapper,
  ProjectTitle,
  SubSection,
  CalendarIcon,
  LinkIcon,
  Headline,
  PencilIcon,
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

        <Divider />

        <SubSection>
          <Headline/>
          { project.headline }
        </SubSection>

        <SubSection>
          <CalendarIcon/>
          { project.start_date.slice(0, -3)} - {project.end_date.slice(0, -3) } { /* Remove Day of Mont */ }
        </SubSection>

        <SubSection>
          <PencilIcon/>
          { projectSkills.length < 100 ? projectSkills : `${projectSkills.slice(0,100)}...` }
        </SubSection>

        <Divider />

        <SubSection>
          <LinkIcon/>
          <ExternalLink onClick={ this.openProject }>View Project</ExternalLink>
        </SubSection>

      </ProjectTileWrapper>
    )
  }
}

export default connect((state, ownProps) => ({
  project: state.project.all[ownProps.projectId],
  skills: state.skill.all,
}), {
})(ProjectTile);
