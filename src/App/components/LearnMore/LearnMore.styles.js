import styled from 'styled-components';

import {
  DEFAULT_PAGE_WRAPPER,
  FONT_FAMILY_HEADER,
  media
} from "../../theme";

const LearnMoreWrapper = DEFAULT_PAGE_WRAPPER.extend`
`;

const GroupLinksWrapper = styled.div`
  ${media.PHONE`
    margin-bottom: 15px;
  `};
`;

const AllLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 750px;
  margin: 0 auto;

  ${media.PHONE`
    flex-direction: column;
  `};	
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

