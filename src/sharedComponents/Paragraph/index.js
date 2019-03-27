import React, { Component } from 'react'

import { ParagraphWrapper } from './Paragraph.styles'

export default class Paragraph extends Component {
    render() {
        const { children } = this.props

        return <ParagraphWrapper>{children}</ParagraphWrapper>
    }
}
