import styled from 'styled-components';

import {
  DEFAULT_PAGE_WRAPPER,
  FONT_FAMILY_HEADER,
} from "../../theme";

const LearnMoreWrapper = DEFAULT_PAGE_WRAPPER.extend`
`;

const GroupLinksWrapper = styled.div`
`;

const AllLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 750px;
  margin: 0 auto;
`;

const LinksListTitle = styled.h2`
  margin: 0 0 5px 0;
  font-weight: 500;
  font-family: ${FONT_FAMILY_HEADER};
`;

export {
  LearnMoreWrapper,
  GroupLinksWrapper,
  AllLinksWrapper,
  LinksListTitle,
}

