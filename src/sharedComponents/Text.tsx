import React from 'react'
import styled from 'styled-components'

import { PRIMARY_COLOR } from 'Theme'

const TextWrapper = styled.p`
    margin: 5px 0;
    font-family: Montserrat, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    font-size: 1rem;
    color: ${PRIMARY_COLOR};
`

type TextProps = {
    children: React.ReactNode
}

const Text = ({ children }: TextProps) => {
    return <TextWrapper>{children}</TextWrapper>
}

export default Text
