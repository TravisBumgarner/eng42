import styled from 'styled-components';

import {
  PRIMARY_COLOR,
  SECONDARY_COLOR
} from "../../theme";

const DividerWrapper = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${(props) => props.primary ? PRIMARY_COLOR : SECONDARY_COLOR};
  margin: 20px 0;
`;

export {
  DividerWrapper,
};

