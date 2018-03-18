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
  position: absolute;
  top: 10px;
  width: 100%;
  transition: left 0.5s, display 0.5s ease 0.5s;
  ${props => props.isProjectOpen ? 'left: 0' : 'left: 100vw'};    

  display: ${props => props.isProjectOpen ? 'hidden' : 'initial'};
`;

const ProjectCard = ProjectsCard.extend`
  left: 100vw;
  top: 10px;
  left: ${props => props.isProjectOpen ? '-100vw' : '0'};
  display: ${props => props.isProjectOpen ? 'initial' : 'hidden'};
`;

const PortfolioWrapper = styled.div`
  position: relative;
  width: 75%;
  max-width: 1024px;
  margin: 10vh auto 0;
  color: ${PRIMARY_COLOR};
  background-color: ${SECONDARY_COLOR};
  font-family: ${FONT_CONTENT};
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
}

