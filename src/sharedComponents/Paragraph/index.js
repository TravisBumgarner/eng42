import React, { Component } from 'react'

import { ParagraphWrapper } from './Paragraph.styles'

const Paragraph = ({ children }) => {
    return <ParagraphWrapper>{children}</ParagraphWrapper>
}

export default Paragraph
