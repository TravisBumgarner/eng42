import React, { Component } from 'react';
import { connect } from 'react-redux';

import FaExternalLink from 'react-icons/lib/fa/external-link';
import FaCalendar from 'react-icons/lib/fa/calendar';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaMapSigns from 'react-icons/lib/fa/map-signs';
import FaBuilding from 'react-icons/lib/fa/building-o';
import FaInfo from 'react-icons/lib/fa/info';

import ProjectDetail from '../../components/ProjectDetail';
import ExternalLink from '../../components/ExternalLink';

import {
  SingleProjectWrapper,
} from './SingleProject.styles';

export class SingleProject extends Component {
  render() {
    const {
      project,
      skills,
    } = this.props;

    const Images = project.image.map(i => <img key={ i.id } style={{width:'100px', height:'100px'}} src={i.src} alt={i.name} />);
    const Locations = project.location.map(l => l.name).join(", ");
    const Organizations = project.organization.map(o => o.name).join(", ");
    const Skills = project.skill.map(s => skills[s].name).join(", ");
    const Links = project.link.map((l) => {
      return (
        <li key={l.id}><ExternalLink primary href={ l.src }>
          { l.name }
        </ExternalLink></li>
      )
    });

    return (
      <SingleProjectWrapper previewImageSrc = { project.preview_img && project.preview_img.src } >
        <ProjectDetail
          icon={ <FaCalendar/> }
          text={ `${project.start_date.slice(0, -3)} - ${project.end_date.slice(0, -3)}` /* Remove Day of Mont */ }
        />

        <ProjectDetail
          icon={ <FaPencil/> }
          text={ Skills }
        />

        {!!Links.length &&
          <ProjectDetail
            icon={ <FaExternalLink/> }
            text={ <ul>{ Links }</ul> }
          />
        }

        <ProjectDetail
          icon={ <FaMapSigns/> }
          text={ Locations }
        />

        <ProjectDetail
          icon={ <FaBuilding/> }
          text={ Organizations }
        />

        <ProjectDetail
          icon={ <FaInfo/> }
          text={ project.description }
        />

        <ProjectDetail
          icon={ <FaInfo/> }
          text={ Images }
        />

      </SingleProjectWrapper>
    )
  }
}

export default connect((state, ownProps) => ({
  project: state.project.all[state.project.selected],
  skills: state.skill.all,
  categories: state.category.all,
}), {
})(SingleProject);