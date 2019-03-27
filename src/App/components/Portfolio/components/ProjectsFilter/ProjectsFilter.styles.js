import styled from 'styled-components'

import DropDownMenu from 'material-ui/DropDownMenu'
import FaFilter from 'react-icons/lib/fa/filter'
import FaSortAmountDesc from 'react-icons/lib/fa/sort-amount-desc'

import { TERTIARY_COLOR, PRIMARY_COLOR, media } from 'Theme'

const ProjectsFilterWrapper = styled.div`
    color: ${PRIMARY_COLOR};
    margin: 20px 0;
`

const CategoryDropdownMenu = styled(DropDownMenu)`
    width: 275px;
`

const SkillDropdownMenu = styled(DropDownMenu)`
    width: 250px;
`

const SortDropdownMenu = styled(DropDownMenu)`
    width: 200px;
`

const Row = styled.div`
    display: inline-block;
    ${media.TABLET`
    width: 100%;
  `};
`

const FilterIcon = styled(FaFilter)`
    height: 56px;
    vertical-align: top !important;
    fill: ${TERTIARY_COLOR};
`

const SortIcon = styled(FaSortAmountDesc)`
    height: 56px;
    vertical-align: top !important;
    fill: ${TERTIARY_COLOR};
`

const AlignToDropdown = styled.div`
    display: inline-block;
    vertical-align: bottom;
    padding-bottom: 22px;
`

export {
    ProjectsFilterWrapper,
    AlignToDropdown,
    SkillDropdownMenu,
    CategoryDropdownMenu,
    FilterIcon,
    SortDropdownMenu,
    SortIcon,
    Row
}
