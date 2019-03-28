import React from 'react'
import styled from 'styled-components'

const TextWrapper = styled.p`
    margin: 5px 0;
    font-family: Montserrat, sans-serif;
    line-height: 1.5;
`

const Text = ({ children }) => {
    return <TextWrapper>{children}</TextWrapper>
}

export default Text
