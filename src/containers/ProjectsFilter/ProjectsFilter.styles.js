import styled from 'styled-components';

import DropDownMenu from 'material-ui/DropDownMenu';
import FaFilter from 'react-icons/lib/fa/filter';
import FaSortAmountDesc from 'react-icons/lib/fa/sort-amount-desc';


import {
  PRIMARY_COLOR,
} from "../../theme";

const ProjectsFilterWrapper = styled.div`
  color: ${PRIMARY_COLOR};
  margin: 20px;
`;

const CategoryDropdownMenu = styled(DropDownMenu)`
  width: 300px;
`;

const SkillDropdownMenu = CategoryDropdownMenu.extend`
`;

const SortDropdownMenu = CategoryDropdownMenu.extend`
`;

const FilterIcon = styled(FaFilter)`
  height: 56px;
  vertical-align: top !important;
  fill: ${PRIMARY_COLOR};
`;

const SortIcon = styled(FaSortAmountDesc)`
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
  ProjectsFilterWrapper,
  AlignToDropdown,
  SkillDropdownMenu,
  CategoryDropdownMenu,
  FilterIcon,
  SortDropdownMenu,
  SortIcon,
}

