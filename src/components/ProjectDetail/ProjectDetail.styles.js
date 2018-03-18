import styled from 'styled-components';

import {
  FONT_NORMAL,
} from '../../theme';

const ProjectDetailWrapper = styled.div`
  margin: 5px 0;
`;

const IconWrapper = styled.span`
  padding-right: 10px;
`;

const ContentWrapper = styled.span`
  font-size: ${ FONT_NORMAL };
  font-weight: 100;
  margin: 10px 0;
`;

export {
  ProjectDetailWrapper,
  ContentWrapper,
  IconWrapper,
}

