import styled from 'styled-components';

import FaArrowLeft from 'react-icons/lib/fa/arrow-left';

import Card from '../../containers/Card';

import {
  PRIMARY_COLOR,
  TERTIARY_COLOR,
  DEFAULT_PAGE_WRAPPER,
} from "../../theme";

const ProjectsCard = styled(Card)`
`;

const ProjectCard = ProjectsCard.extend`
`;

const PortfolioWrapper = DEFAULT_PAGE_WRAPPER.extend`

`;

const ProjectsNoScrollWrapper = styled.div`
  position: absolute;
  transition: left 0.5s, opacity 0.5s;
  left: ${props => props.isProjectOpen ? '-100vw' : '0'};
  opacity: ${props => props.isProjectOpen ? '  float: left;0' : '1'};
  width: 100%;
  max-height: 90vh;
  overflow-y: scroll;
  box-sizing: border-box;
`;

const ProjectNoScrollWrapper = ProjectsNoScrollWrapper.extend`
  left: ${props => props.isProjectOpen ? ' 0' : '100vw'};    
  opacity: ${props => props.isProjectOpen ? '1' : '0'};
`;


const BackIcon = styled(FaArrowLeft)`
  position: absolute;
  top: 0;
  left: 0;
  margin: 20px 0;
  padding: 5px 0;
  fill: ${TERTIARY_COLOR};
  
  &:hover {
    fill: ${PRIMARY_COLOR};
    cursor: pointer;
  }
  }
`;

export {
  BackIcon,
  PortfolioWrapper,
  ProjectsCard,
  ProjectCard,
  ProjectsNoScrollWrapper,
  ProjectNoScrollWrapper
}

