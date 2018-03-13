import styled from 'styled-components';

import DropDownMenu from 'material-ui/DropDownMenu';
import Filter from 'react-icons/lib/fa/filter';

import {PRIMARY_COLOR, SECONDARY_COLOR, SCREEN_WIDTHS, FONT_XLARGE, FONT_HEADER} from "../../theme";

const PortfolioWrapper = styled.div`
  background-color: ${SECONDARY_COLOR};
  top: 50px;
  max-width: ${SCREEN_WIDTHS.DESKTOP}px;
  position: relative;
  margin: 0px auto;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
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
}

