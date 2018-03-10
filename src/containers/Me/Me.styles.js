import styled from 'styled-components';

import { FONT_NORMAL_LINE_HEIGHT } from '../../theme';

const MeWrapper = styled.div`
  width: 80%;
`;

const MeDescription = styled.p`
  line-height: ${FONT_NORMAL_LINE_HEIGHT};
  margin: 20px 0px;
`


export {
  MeWrapper,
  MeDescription,
}

