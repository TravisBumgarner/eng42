import styled from 'styled-components';

import {SECONDARY_COLOR} from "../../theme";

const PortfolioWrapper = styled.div`
  background-color: ${SECONDARY_COLOR};
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export {
  PortfolioWrapper,
  ProjectsWrapper,
}

