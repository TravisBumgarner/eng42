import styled from 'styled-components';

import FaClose from 'react-icons/lib/fa/close';

import Card from '../../containers/Card';

import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TERTIARY_COLOR,
  FONT_CONTENT,
} from "../../theme";

const ProjectsCard = styled(Card)`
`;

const ProjectCard = ProjectsCard.extend`
`;

const PortfolioWrapper = styled.div`
  position: relative;
  width: 75%;
  height: 100vh;
  max-width: 1024px;
  margin:0 auto;
  color: ${PRIMARY_COLOR};
  background-color: ${SECONDARY_COLOR};
  font-family: ${FONT_CONTENT};
  overflow: hidden;
`;

const ProjectsNoScrollWrapper = styled.div`
  position: absolute;
  transition: left 0.5s, opacity 0.5s;
  left: ${props => props.isProjectOpen ? '-100vw' : '0'};
  opacity: ${props => props.isProjectOpen ? '0' : '1'};
  width: 100%;
  max-height: 90vh;
  margin-top: 10vh;
  overflow-y: scroll;
  box-sizing: border-box;
`;

const ProjectNoScrollWrapper = ProjectsNoScrollWrapper.extend`
  left: ${props => props.isProjectOpen ? ' 0' : '100vw'};    
  opacity: ${props => props.isProjectOpen ? '1' : '0'};
`;


const CloseIcon = styled(FaClose)`
  position: absolute;
  top: 20px;
  right: 20px;
  fill: ${PRIMARY_COLOR};
  
  &:hover {
    fill: ${TERTIARY_COLOR};
    cursor: pointer;
  }
  }
`;

export {
  CloseIcon,
  PortfolioWrapper,
  ProjectsCard,
  ProjectCard,
  ProjectsNoScrollWrapper,
  ProjectNoScrollWrapper
}

