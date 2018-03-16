import React, { Component } from 'react';
import { connect } from 'react-redux';

import ExternalLink from '../../components/ExternalLink';

import {
  SingleProjectWrapper,
  SubSection,
  CalendarIcon,
  LinkIcon,
  PencilIcon,
  LocationIcon,
  OrganizationIcon,
  DescriptionIcon,
} from './SingleProject.styles';

export class ProjectTile extends Component {
  render() {
    const {
      project,
      skills,
      categories,
    } = this.props;

    console.log(project);

    const Images = project.image.map(i => <img style={{width:'100px', height:'100px'}} src={i.src} alt={i.name} />);
    const Locations = project.location.map(l => l.name).join(", ");
    const Organizations = project.organization.map(o => o.name).join(", ");
    const Categories = project.category.map(c => categories[c].name).join(", ");
    const Skills = project.skill.map(s => skills[s].name).join(", ");
    const Links = project.link.map((l, idx) => {
      return (
        <li><ExternalLink primary href={ l.src }>
          { l.name }
        </ExternalLink></li>
      )
    });

    return (
      <SingleProjectWrapper previewImageSrc = { project.preview_img && project.preview_img.src } >

        <SubSection>
          <CalendarIcon/>
          {project.start_date.slice(0, -3)} - {project.end_date.slice(0, -3)} {/* Remove Day of Mont */}
          </SubSection>

        <SubSection>
          <PencilIcon/>
          { Skills }
        </SubSection>

        { !!Links.length &&
          <SubSection>
            <LinkIcon/>
            <ul>
              { Links }
            </ul>
          </SubSection>
        }

        <SubSection>
          <LocationIcon/>
          { Locations }
        </SubSection>

        <SubSection>
          <OrganizationIcon/>
          { Organizations }
        </SubSection>

        <SubSection>
          <DescriptionIcon/>
          { project.description }
        </SubSection>

        <SubSection>
          { Images }
        </SubSection>

      </SingleProjectWrapper>
    )
  }
}

export default connect((state, ownProps) => ({
  project: state.project.all[state.project.selected],
  skills: state.skill.all,
  categories: state.category.all,
}), {
})(ProjectTile);



/* (3) [1, 2, 3]
description
:
null
end_date
:
"2013-05-01"
headline
:
""
id
:
1
link
:
(2) [{…}, {…}]
location
:
(2) [3, 4]
name
:
"Water System"
organization
:
[1]

"2012-06-01" */