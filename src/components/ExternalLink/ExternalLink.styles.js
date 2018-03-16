import styled from 'styled-components';

import {
  PRIMARY_COLOR,
  TERTIARY_COLOR,
  SECONDARY_COLOR,
} from "../../theme";

const ExternalLinkWrapper = styled.a`
  color: ${props => props.primary ? PRIMARY_COLOR : SECONDARY_COLOR};
  text-decoration: none;
  &:hover{
    color: ${TERTIARY_COLOR};
    cursor: pointer;
  }
`;

export {
  ExternalLinkWrapper,
};

