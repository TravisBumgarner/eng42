import styled from 'styled-components';

import DropDownMenu from 'material-ui/DropDownMenu';
import FaFilter from 'react-icons/lib/fa/filter';
import FaSortAmountDesc from 'react-icons/lib/fa/sort-amount-desc';

import {
  PRIMARY_COLOR,
} from "../../theme";

const ProjectsFilterWrapper = styled.div`
  color: ${PRIMARY_COLOR};
  margin: 20px 0;
`;

const CategoryDropdownMenu = styled(DropDownMenu)`
  width: 275px;
`;

const SkillDropdownMenu = styled(DropDownMenu)`
  width: 250px;
`;

const SortDropdownMenu = styled(DropDownMenu)`
  width: 200px;
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

