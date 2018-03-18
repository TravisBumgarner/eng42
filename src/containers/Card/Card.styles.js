import styled from 'styled-components';

import {
  FONT_HEADER,
  FONT_XLARGE,
  FONT_NORMAL,
  FONT_NORMAL_LINE_HEIGHT
} from "../../theme";

const CardWrapper = styled.div`
`;

const CardTitle = styled.h2`
  font-family: ${FONT_HEADER};
  font-size: ${FONT_XLARGE};
  margin: 20px 0;
`;

const CardContent = styled.div`
  line-height: ${FONT_NORMAL_LINE_HEIGHT};
  font-size: ${ FONT_NORMAL };
  font-weight: 100;
`;

export {
  CardWrapper,
  CardTitle,
  CardContent,
}

