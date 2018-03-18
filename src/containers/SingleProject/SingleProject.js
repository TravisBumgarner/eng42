import React, { Component } from 'react';
import { connect } from 'react-redux';

import FaExternalLink from 'react-icons/lib/fa/external-link';
import FaCalendar from 'react-icons/lib/fa/calendar';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaMapSigns from 'react-icons/lib/fa/map-signs';
import FaBuilding from 'react-icons/lib/fa/building-o';

import ProjectDetail from '../../components/ProjectDetail';
import ExternalLink from '../../components/ExternalLink';
import Thumbnail from '../../components/Thumbnail';
import ProjectImage from '../../components/ProjectImage';

import {
  SingleProjectWrapper,
  Column,
  ProjectDetailsWrapper,
} from './SingleProject.styles';

export class SingleProject extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeImage: ''
    }
  }

  componentDidMount(){
    const {
      project: { image }
    } = this.props;
    image[0] && this.setState({ activeImage: image[0].src });
  }

  setActiveImage = (imageSrc) => {
    this.setState({ activeImage: imageSrc })
  };

  render() {
    const {
      project,
      skills,
    } = this.props;

    const {
      activeImage,
    } = this.state;

    const Thumbnails = project.image.map(i => {
      return (
        <Thumbnail
          key={ i.id }
          src={ i.src }
          alt={ i.name }
          onClick={ this.setActiveImage }
        />
      )
    });
    const Description = project.description.split('\n').map((d, idx) => <p key={idx}>{d}</p>);
    const Locations = project.location.map(l => l.name).join(", ");
    const Organizations = project.organization.map(o => o.name).join(", ");
    const Skills = project.skill.map(s => skills[s].name).join(", ");
    const Links = project.link.map((l) => {
      return (
        <li><ExternalLink key={ l.id }primary href={ l.src }>
          { l.name }
        </ExternalLink></li>
      )
    });

    return (
      <SingleProjectWrapper previewImageSrc = { project.preview_img && project.preview_img.src } >
        <ProjectDetailsWrapper>
          <Column>
            <ProjectDetail
              icon={ <FaCalendar/> }
              content={ `${project.start_date.slice(0, -3)} - ${project.end_date.slice(0, -3)}` /* Remove Day of Mont */ }
            />

            <ProjectDetail
              icon={ <FaPencil/> }
              content={ Skills }
            />

            {!!Links.length &&
              <ProjectDetail
                icon={ <FaExternalLink/> }
                content={ <ul>{ Links }</ul> }
              />
            }
          </Column>

          <Column>
            <ProjectDetail
              icon={ <FaMapSigns/> }
              content={ Locations }
            />

            <ProjectDetail
              icon={ <FaBuilding/> }
              content={ Organizations }
            />
          </Column>
        </ProjectDetailsWrapper>

        { Description }

        { !!activeImage && <ProjectImage src={activeImage}/> }
        {Thumbnails}

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