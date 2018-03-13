import styled from 'styled-components';

import {
  FONT_HEADER,
  FONT_SMALL,
  FONT_NORMAL,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  media,
} from '../../theme';

const ProjectTileWrapper = styled.div`
  box-sizing: border-box;
  flex: 1 1 25%;
  margin: 20px;
  padding: 20px;
  color: ${PRIMARY_COLOR};
  background-image: ${props => props.previewImageSrc && `
    linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(${props.previewImageSrc});
    `};
  border: 1px solid ${PRIMARY_COLOR};
  
  ${media.TABLET`
  flex: 1 1 33%;
  `}
  
  ${media.PHONE`
  flex: 1 1 50%;
  `}
`;

const ProjectTitle = styled.h2`
  margin: 0 0 20px 0;
  font-size: ${FONT_NORMAL};
  font-weight: 700;
  font-family: ${FONT_HEADER};
`;

const ProjectSubheader = styled.h3`
  font-size: ${FONT_NORMAL};
  margin: 15px 0 5px 0;
  font-family: ${FONT_HEADER};
`;

const ProjectText = styled.span`
  font-size: ${FONT_SMALL};
`;

export {
  ProjectTileWrapper,
  ProjectTitle,
  ProjectSubheader,
  ProjectText,
}

