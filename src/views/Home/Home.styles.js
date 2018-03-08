import styled from 'styled-components';

import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../theme";


const HomeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  color: ${PRIMARY_COLOR};
  background-color: ${SECONDARY_COLOR};
`;



export {
  HomeWrapper,
}

