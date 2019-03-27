import styled from 'styled-components'

import { PRIMARY_COLOR, TERTIARY_COLOR, SECONDARY_COLOR } from 'Theme'

const ExternalLinkWrapper = styled.a`
    color: ${PRIMARY_COLOR};
    text-decoration: none;
    &:hover {
        color: ${TERTIARY_COLOR};
        cursor: pointer;
    }
`

export { ExternalLinkWrapper }
