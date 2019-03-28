import styled from 'styled-components'

import { DEFAULT_PAGE_WRAPPER, media } from 'Theme'

const HomeWrapper = styled(DEFAULT_PAGE_WRAPPER)`
    margin: 30vh auto 0;
    height: 70vh;

    ${media.TABLET`
    margin-top: 15vh;
    height: 85vh;
  `};
`

export { HomeWrapper }
