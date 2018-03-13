import styled from 'styled-components';

import { SCREEN_WIDTHS, FONT_HEADER, FONT_XLARGE } from '../../theme';

const ContactFormWrapper = styled.div`
  max-width: ${SCREEN_WIDTHS.TABLET}px;
`;

const ContactHeader = styled.h1`
  font-family: ${FONT_HEADER};
  font-size: ${FONT_XLARGE};
  margin: 20px 0;
`;

export {
  ContactFormWrapper,
  ContactHeader,
}
