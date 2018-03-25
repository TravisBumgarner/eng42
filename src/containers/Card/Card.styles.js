import styled from 'styled-components';

import {
  FONT_FAMILY_HEADER,
  FONT_SIZE_XLARGE,
  FONT_WEIGHT_HEADER,
} from "../../theme";

const CardWrapper = styled.div`
`;

const CardTitle = styled.h2`
  font-family: ${ FONT_FAMILY_HEADER };
  font-size: ${ FONT_SIZE_XLARGE };
  font-weight: ${ FONT_WEIGHT_HEADER };
  margin: 20px 0;
`;

const CardContent = styled.div`
  font-weight: 100;
`;

export {
  CardWrapper,
  CardTitle,
  CardContent,
}

