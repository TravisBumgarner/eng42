import styled from 'styled-components';

import { PRIMARY_COLOR, SECONDARY_COLOR, HEADER_HEIGHT } from "../../theme";

const HeaderWrapper = styled.div`
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  color: ${ PRIMARY_COLOR };
  background-color: ${ SECONDARY_COLOR };
  padding: 30px;
  text-align: center;
`;

export {
  HeaderWrapper,
}

