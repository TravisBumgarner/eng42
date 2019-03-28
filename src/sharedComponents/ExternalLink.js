import React from 'react'
import styled from 'styled-components'

import { PRIMARY_COLOR, TERTIARY_COLOR } from 'Theme'

const ExternalLinkWrapper = styled.a`
    color: ${PRIMARY_COLOR};
    text-decoration: none;
    &:hover {
        color: ${TERTIARY_COLOR};
        cursor: pointer;
    }
`

const ExternalLink = ({ children, primary, href, onClick }) => {
    return (
        <ExternalLinkWrapper target="_blank" primary={primary} href={href} onClick={onClick}>
            {children}
        </ExternalLinkWrapper>
    )
}

export default ExternalLink
