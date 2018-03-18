import styled from 'styled-components';



import Divider from '../../components/Divider';

import {
  FONT_HEADER,
  FONT_SMALL,
  FONT_NORMAL,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  media,
} from '../../theme';

const ICON_PADDING = '10px';

const ProjectTileWrapper = styled.div`
  box-sizing: border-box;
  margin: 10px;
  padding: 10px;
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
  margin: 0 0 5px 0;
  font-size: ${FONT_NORMAL};
  font-family: ${FONT_HEADER};
`;

const SubSection = styled.div`
  font-size: ${FONT_NORMAL};
  font-weight: 100;
  margin: 5px 0;
  display: flex;
`;

const SmallDivider = styled(Divider)`
  margin: 10px 0;
`

export {
  ProjectTileWrapper,
  ProjectTitle,
  SubSection,
  SmallDivider,
}

