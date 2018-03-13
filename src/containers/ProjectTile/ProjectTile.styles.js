import styled from 'styled-components';

import FaExternalLink from 'react-icons/lib/fa/external-link';
import FaCalendar from 'react-icons/lib/fa/calendar';
import FaPencil from 'react-icons/lib/fa/pencil';

import {
  FONT_HEADER,
  FONT_SMALL,
  FONT_NORMAL,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  media,
} from '../../theme';

const ICON_PADDING = '10px';

const CalendarIcon = styled(FaCalendar)`
  padding-right: ${ICON_PADDING};
  flex-shrink: 0;
`;

const PencilIcon = styled(FaPencil)`
  padding-right: ${ICON_PADDING};
  flex-shrink: 0;
`;

const LinkIcon = styled(FaExternalLink)`
  padding-right: ${ICON_PADDING};
  flex-shrink: 0;
`;


const ProjectTileWrapper = styled.div`
  box-sizing: border-box;
  margin: 20px;
  padding: 20px;
  color: ${SECONDARY_COLOR};
  background-image: ${props => props.previewImageSrc && `
    linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${props.previewImageSrc});
    `};
  border: 1px solid ${SECONDARY_COLOR};
  width: 300px;
  height: 300px;
  
  &:before{
    content:'';
    float:left;
    padding-top:100%;
  }
  
  ${media.TABLET`
  `}
  
  ${media.PHONE`
  `}
`;

const ProjectTitle = styled.h2`
  margin: 0 0 20px 0;
  font-size: ${FONT_NORMAL};
  font-family: ${FONT_HEADER};
`;

const SubSection = styled.p`
  font-size: ${FONT_NORMAL};
  font-weight: 100;
  margin: 10px 0;
  display: flex;
`;

const ProjectLink = styled.a`
  font-size: ${FONT_SMALL};
  color: 
`;

export {
  ProjectTileWrapper,
  ProjectTitle,
  SubSection,
  CalendarIcon,
  LinkIcon,
  PencilIcon,
}

