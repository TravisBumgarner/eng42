import React, { Component } from 'react'

import { ExternalLinkWrapper } from './ExternalLink.styles'

const ExternalLink = ({ children, primary, href, onClick }) => {
    return (
        <ExternalLinkWrapper target="_blank" primary={primary} href={href} onClick={onClick}>
            {children}
        </ExternalLinkWrapper>
    )
}

export default ExternalLink
