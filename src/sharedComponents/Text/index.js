import React, { Component } from 'react'

import { TextWrapper } from './Text.styles'

const Text = ({ children }) => {
    return <TextWrapper>{children}</TextWrapper>
}

export default Text
