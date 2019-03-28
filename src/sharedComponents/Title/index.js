import React from 'react'

import { LargeTitle, MediumTitle, SmallTitle } from './Title.styles'

const Title = ({ children, size }) => {
    switch (size) {
        case 'large':
            return <LargeTitle size={size}>{children}</LargeTitle>
        case 'medium':
            return <MediumTitle size={size}>{children}</MediumTitle>
        case 'small':
            return <SmallTitle size={size}>{children}</SmallTitle>
    }
}

export default Title
