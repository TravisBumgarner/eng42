import styled from 'styled-components';

import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../theme";

const ButtonWrapper = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  color: ${props => props.primary ? PRIMARY_COLOR : SECONDARY_COLOR};
  border: 2px solid ${props => props.primary ? PRIMARY_COLOR : SECONDARY_COLOR};
  background-color: ${props => props.primary ? SECONDARY_COLOR : PRIMARY_COLOR}

`

export {
  ButtonWrapper,
};

