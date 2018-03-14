import React, { Component } from 'react';
import { connect } from 'react-redux';

import FaExternalLink from 'react-icons/lib/fa/external-link';
import FaCalendar from 'react-icons/lib/fa/calendar';
import FaPencil from 'react-icons/lib/fa/pencil';

import Divider from '../../components/Divider';
import ExternalLink from '../../components/ExternalLink';

import {
  ProjectTileWrapper,
  ProjectTitle,
  SubSection,
  CalendarIcon,
  LinkIcon,
  PencilIcon,
} from './ProjectTile.styles';

export class ProjectTile extends Component {
  render() {
    const {
      project,
      skills,
      categories,
      openProject,
    } = this.props;

    const projectCategories = project.category.map(c => categories[c].name).join(", ");
    const projectSkills = project.skill.map(s => skills[s].name).join(", ");
    const projectLinks = project.link.map((l, idx) => {
      return (
        <li><ExternalLink href={ l.src }>
          { l.name }
        </ExternalLink></li>
      )
    });

    return (
      <ProjectTileWrapper previewImageSrc = { project.preview_img && project.preview_img.src } >

        <ProjectTitle>
          { project.name }
        </ProjectTitle>

        <Divider />

        <SubSection>
          <CalendarIcon/>
          {project.start_date.slice(0, -3)} - {project.end_date.slice(0, -3)} {/* Remove Day of Mont */}
          </SubSection>

        <SubSection>
          <PencilIcon/>
          { projectSkills.length < 100 ? projectSkills : `${projectSkills.slice(0,100)}...` }
        </SubSection>

        { !!projectLinks.length &&
          <SubSection>
            <LinkIcon/>
            <ul>
              <li><button onClick={ () => openProject(project.id) }>Click Me</button></li>
              { projectLinks }
            </ul>
          </SubSection>
        }

        <Divider />

      </ProjectTileWrapper>
    )
  }
}

export default connect((state, ownProps) => ({
  project: state.project.all[ownProps.projectId],
  skills: state.skill.all,
  categories: state.category.all,
}), {
})(ProjectTile);
