import styled from 'styled-components';

import Card from '../../containers/Card';
import DropDownMenu from 'material-ui/DropDownMenu';
import Filter from 'react-icons/lib/fa/filter';

import {
  PRIMARY_COLOR,
  DEFAULT_PAGE_WRAPPER,
  SECONDARY_COLOR,
  FONT_CONTENT,
} from "../../theme";

const ScrollingCardLeft = styled(Card)`
  position: absolute;
  top: 10px;
  width: 100%;
  transition: left 0.5s, display 2s;
  left: ${props => props.isProjectOpen ? '-100vw' : '0'};  
`;

const ScrollingCardRight = ScrollingCardLeft.extend`
  left: 100vw;
  ${props => props.isProjectOpen ? 'left: 0' : 'left: 100vw'};    
`;

const PortfolioWrapper = styled.div`
  position: relative;
  width: 75%;
  max-width: 1024px;
  margin: 20vh auto 0;
  color: ${PRIMARY_COLOR};
  background-color: ${SECONDARY_COLOR};
  font-family: ${FONT_CONTENT};
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const SingleProjectWrapper = styled.div`
  
`;

const FilterWrapper = styled.div`
  color: ${PRIMARY_COLOR};
  margin: 20px;
`;

const CategoryDropdownMenu = styled(DropDownMenu)`
  width: 300px;
`;

const SkillDropdownMenu = CategoryDropdownMenu.extend`
`;

const FilterIcon = styled(Filter)`
  height: 56px;
  vertical-align: top !important;
  fill: ${PRIMARY_COLOR};
`;

const AlignToDropdown = styled.div`
  display: inline-block;
  vertical-align: bottom;
  padding-bottom: 22px;
`;

export {
  AlignToDropdown,
  FilterWrapper,
  ProjectsWrapper,
  SkillDropdownMenu,
  CategoryDropdownMenu,
  FilterIcon,
  PortfolioWrapper,
  SingleProjectWrapper,
  ScrollingCardLeft,
  ScrollingCardRight,
}

