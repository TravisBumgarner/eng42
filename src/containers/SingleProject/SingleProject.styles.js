import styled from 'styled-components';

import FaExternalLink from 'react-icons/lib/fa/external-link';
import FaCalendar from 'react-icons/lib/fa/calendar';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaMapSigns from 'react-icons/lib/fa/map-signs';
import FaBuilding from 'react-icons/lib/fa/building-o';
import FaInfo from 'react-icons/lib/fa/info';

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

const OrganizationIcon = styled(FaBuilding)`
  padding-right: ${ICON_PADDING};
  flex-shrink: 0;
`;

const LocationIcon = styled(FaMapSigns)`
  padding-right: ${ICON_PADDING};
  flex-shrink: 0;
`;

const DescriptionIcon = styled(FaInfo)`
  padding-right: ${ICON_PADDING};
  flex-shrink: 0;
`;


const SingleProjectWrapper = styled.div`
`;

const ProjectTitle = styled.h2`
  margin: 0 0 20px 0;
  font-size: ${FONT_NORMAL};
  font-family: ${FONT_HEADER};
`;

const SubSection = styled.div`
  font-size: ${FONT_NORMAL};
  font-weight: 100;
  margin: 10px 0;
  display: flex;
`;

export {
  SingleProjectWrapper,
  DescriptionIcon,
  SubSection,
  CalendarIcon,
  LinkIcon,
  PencilIcon,
  LocationIcon,
  OrganizationIcon,
}

