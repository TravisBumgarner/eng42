import styled from 'styled-components';

import {
  PRIMARY_COLOR,
  TERTIARY_COLOR
} from "../../theme";

const ProjectImageWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  vertical-align: middle;
  margin: 20px 0;
  height: 500px;
  flex-grow: 0;
`;

const Image = styled.img`
  max-height: 500px;
  align-self: center
`;

export {
  ProjectImageWrapper,
  Image,
};

