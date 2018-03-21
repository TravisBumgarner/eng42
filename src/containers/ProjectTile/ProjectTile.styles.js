import styled from 'styled-components';

import Divider from '../../components/Divider';

import {
  FONT_HEADER,
  FONT_NORMAL,
  SECONDARY_COLOR,
  media,
} from '../../theme';

const SPACE_BETWEEN = 5;

const ProjectTileWrapper = styled.div`
float: left;
  box-sizing: border-box;
  margin: ${SPACE_BETWEEN}px;
  padding: 10px;
  color: ${SECONDARY_COLOR};
  background-image: ${props => props.previewImageSrc && `
    linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${props.previewImageSrc});
    `};
  border: 1px solid ${SECONDARY_COLOR};

  ${props => `width:${props.gridWidth/3 - SPACE_BETWEEN*2}px; height:${props.gridWidth/3 - SPACE_BETWEEN*2}px;`}
  
  &:before{
    content:'';
    float:left;
    padding-top:100%;
  }

  ${media.DESKTOP`
    ${props => `width:${props.gridWidth/2 - SPACE_BETWEEN*2}px; height:${props.gridWidth/2 - SPACE_BETWEEN*2}px;`}
  `}

  ${media.TABLET`
    ${props => `width:${props.gridWidth - SPACE_BETWEEN*2}px; height:${props.gridWidth - SPACE_BETWEEN*2}px;`}
  `}
  
`;

const ProjectTitle = styled.h2`
  margin: 0 0 5px 0;
  font-size: ${FONT_NORMAL};
  font-family: ${FONT_HEADER};
`;

const SmallDivider = styled(Divider)`
  margin: 10px 0;
`;

export {
  ProjectTileWrapper,
  ProjectTitle,
  SmallDivider,
}

