import styled from 'styled-components';

import {
  DEFAULT_PAGE_WRAPPER,
  FONT_NORMAL,
  FONT_HEADER,
} from "../../theme";

const LearnMoreWrapper = DEFAULT_PAGE_WRAPPER.extend`
`;

const GroupLinksWrapper = styled.div`
  margin: 0px 30px;
`;

const AllLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LinksListTitle = styled.h2`
  margin: 0 0 5px 0;
  font-weight: 500;
  font-size: ${FONT_NORMAL};
  font-family: ${FONT_HEADER};
`;

export {
  LearnMoreWrapper,
  GroupLinksWrapper,
  AllLinksWrapper,
  LinksListTitle,
}

