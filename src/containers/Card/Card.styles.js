import styled from 'styled-components';

import { FONT_HEADER, FONT_XLARGE, SCREEN_WIDTHS } from "../../theme";

const CardWrapper = styled.div`
  max-width: ${SCREEN_WIDTHS.TABLET}px;
`;

const CardTitle = styled.h2`
  font-family: ${FONT_HEADER};
  font-size: ${FONT_XLARGE};
  margin: 20px 0;
`

const CardContent = styled.div`

`

export {
  CardWrapper,
  CardTitle,
  CardContent,
}

