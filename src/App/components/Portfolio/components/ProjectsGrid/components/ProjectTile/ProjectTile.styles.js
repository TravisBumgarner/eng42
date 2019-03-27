import styled from 'styled-components';

import { transparentize } from 'polished';

import {
  FONT_FAMILY_HEADER,
  SECONDARY_COLOR,
  media,
  PRIMARY_COLOR,
} from '../../theme';

const SPACE_BETWEEN = 5;

const ProjectTileWrapper = styled.div`
  float: left;
  box-sizing: border-box;
  margin: ${SPACE_BETWEEN}px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: ${props => props.previewImageSrc && `url("${props.previewImageSrc}")`} no-repeat;
  background-size: cover;  
  
  border: 1px solid ${PRIMARY_COLOR};

  ${props => `width:${props.gridWidth/4 - SPACE_BETWEEN*2}px; height:${props.gridWidth/4 - SPACE_BETWEEN*2}px;`}

  ${media.DESKTOP`
    ${props => `width:${props.gridWidth/3 - SPACE_BETWEEN*2}px; height:${props.gridWidth/3 - SPACE_BETWEEN*2}px;`}
  `}

  ${media.TABLET`
    ${props => `width:${props.gridWidth/2 - SPACE_BETWEEN*2}px; height:${props.gridWidth/2 - SPACE_BETWEEN*2}px;`}
  `}
  
  &:hover {
    cursor: pointer;
  }
`;

const ProjectDescription = styled.div`
  background-color: ${transparentize(0.3, PRIMARY_COLOR)};
  font-family: ${FONT_FAMILY_HEADER};
  padding: 10px;
  width: 100%;
  color: ${SECONDARY_COLOR};
`;

export {
  ProjectTileWrapper,
  ProjectDescription,
}

