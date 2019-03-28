import styled, { css } from 'styled-components'

const PRIMARY_COLOR = '#000000'
const SECONDARY_COLOR = '#FFFFFF'
const TERTIARY_COLOR = '#4acfa0'

// Media Queries
const SCREEN_WIDTHS = {
    DESKTOP: 992,
    TABLET: 768,
    PHONE: 376
}

const media = Object.keys(SCREEN_WIDTHS).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${SCREEN_WIDTHS[label] / 16}em) {
            ${css(...args)}
        }
    `

    return acc
}, {})

export { PRIMARY_COLOR, SECONDARY_COLOR }
