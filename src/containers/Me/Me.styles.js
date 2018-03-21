import styled from 'styled-components';

import Card from '../Card';

import {
  FONT_NORMAL_LINE_HEIGHT,
  FONT_LARGE,
} from '../../theme';

const MeDescription = styled.div`
  line-height: ${FONT_NORMAL_LINE_HEIGHT};
  font-size: ${FONT_LARGE};
  margin: 20px 0;
`;

const MeCard = styled(Card)`
  max-height: 80vh;
  overflow-y: scroll;
`;

export {
  MeDescription,
  MeCard,
}

