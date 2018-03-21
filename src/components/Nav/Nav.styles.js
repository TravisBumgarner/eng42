import styled from 'styled-components';

import {
  PRIMARY_COLOR,
  FONT_HEADER,
  TERTIARY_COLOR
} from "../../theme";

import { NavLink } from 'react-router-dom'

const SiteLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  color: ${PRIMARY_COLOR};
  font-family: ${FONT_HEADER};
  padding: 10px 0;
  border-bottom: 2px solid ${ PRIMARY_COLOR };
  border-top: 2px solid ${ PRIMARY_COLOR };
    
  &:hover {
    color: ${TERTIARY_COLOR};
    border-bottom: 2px solid ${ TERTIARY_COLOR };
    border-top: 2px solid ${ TERTIARY_COLOR };
  }
`;

const activeSiteLink = {
  color: `${TERTIARY_COLOR}`,
  borderBottom: `2px solid ${ TERTIARY_COLOR }`,
  borderTop: `2px solid ${ TERTIARY_COLOR }`,
};

const SiteLinkList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const SiteLinkItem = styled.li`
  display: inline;
  margin: 5px;
`;

export {
  activeSiteLink,
  SiteLink,
  SiteLinkItem,
  SiteLinkList,
}
