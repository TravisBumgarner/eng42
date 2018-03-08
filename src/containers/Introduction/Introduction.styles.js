import styled from 'styled-components';

import { FONT_HEADER, FONT_LARGE, FONT_XLARGE } from '../../theme';

const IntroductionWrapper = styled.div`
  width: 80%;
`;

const IntroHeader = styled.h1`
  font-family: ${FONT_HEADER};
  font-size: ${FONT_XLARGE};
  margin: 20px 0;
`;

const IntroText = styled.p`
  margin: 20px 0;
  font-size: ${FONT_LARGE}
`;

const IntroList = styled.div`
  display: flex;
  justify-content: space-around;
`;

const IntroListItem = styled.div`

`;

export {
  IntroductionWrapper,
  IntroText,
  IntroHeader,
  IntroList,
  IntroListItem,
}

