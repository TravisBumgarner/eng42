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
  max-height: 90vh;
  overflow-y: scroll;
`;

export {
  MeDescription,
  MeCard,
}

