import styled from 'styled-components';

import { FONT_NORMAL_LINE_HEIGHT, SCREEN_WIDTHS, FONT_HEADER, FONT_XLARGE } from '../../theme';

const MeHeader = styled.h1`
  font-family: ${FONT_HEADER};
  font-size: ${FONT_XLARGE};
  margin: 20px 0;
`;

const MeWrapper = styled.div`
  max-width: ${SCREEN_WIDTHS.TABLET}px;
`;

const MeDescription = styled.p`
  line-height: ${FONT_NORMAL_LINE_HEIGHT};
  margin: 20px 0px;
`


export {
  MeHeader,
  MeWrapper,
  MeDescription,
}

