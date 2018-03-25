import styled from 'styled-components';

import Card from '../Card';

import {
  FONT_SIZE_LARGE,
} from '../../theme';

const MeDescription = styled.div`
  font-size: ${FONT_SIZE_LARGE};
  margin: 20px 0;
`;

const MeCard = styled(Card)`
`;

const MeNoScrollWrapper = styled.div`
  width: 100%;
  max-height: 90vh;
  overflow-y: scroll;
  box-sizing: border-box;
`;

export {
  MeDescription,
  MeCard,
  MeNoScrollWrapper,
}

