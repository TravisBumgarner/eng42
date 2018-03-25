import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProjectDetail from '../../components/ProjectDetail';
import ExternalLink from '../../components/ExternalLink';
import Thumbnail from '../../components/Thumbnail';
import ProjectImage from '../../components/ProjectImage';

import {
  SingleProjectWrapper,
  Content,
  Sidebar,
  Row,
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
    this.setState({ activeImage: image.length ? Object.values(image)[0].src : ''});
  }

  componentWillReceiveProps(nextProps){
    const {
      project: { image }
    } = nextProps;
    this.setState({ activeImage: image.length ? Object.values(image)[0].src : ''});
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

    const Thumbnails = (project.image.length > 1) && project.image.map(i => {
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
        <li key={ l.id }><ExternalLink primary href={ l.src }>
          { l.name }
        </ExternalLink></li>
      )
    });

    return (
      <SingleProjectWrapper previewImageSrc = { project.preview_img && project.preview_img.src } >
        <Row>
          <Content>
            <ProjectDetail title="Description">
              { Description }
            </ProjectDetail>
          </Content>

          <Sidebar>
            {!!Links.length &&
              <ProjectDetail title="Links">
                <ul>{Links}</ul>
              </ProjectDetail>
            }
           <ProjectDetail title="Duration">
             {`${project.start_date.slice(0, -3)} - ${project.end_date.slice(0, -3)}`}
           </ProjectDetail>

            <ProjectDetail title="Skills">
              { Skills }
            </ProjectDetail>

            <ProjectDetail title="Location">
              { Locations }
            </ProjectDetail>

            <ProjectDetail title="Organization">
              { Organizations }
            </ProjectDetail>
          </Sidebar>
        </Row>
        <Row>
          {!!activeImage &&
            <ProjectDetail title="Photos">
              {Thumbnails}
              <ProjectImage src={activeImage}/>
            </ProjectDetail>
          }
        </Row>





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