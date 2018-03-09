import styled from 'styled-components';

import {
  FONT_HEADER,
  FONT_SMALL,
  FONT_NORMAL,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from '../../theme';

const ProjectTileWrapper = styled.div`
  width: 300px;
  height: 300px;
  margin: 20px;
  padding: 20px;
  //background-image: url('http://via.placeholder.com/300x300');
  color: ${PRIMARY_COLOR};
  background-image: ${props => props.previewImageSrc && `
    linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(${props.previewImageSrc});
    `};
  border: 1px solid ${PRIMARY_COLOR};
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

