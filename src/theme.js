import styled, { css } from 'styled-components'

// Media Queries
export const SCREEN_WIDTHS = {
    DESKTOP: 992,
    TABLET: 768,
    PHONE: 376
}

export const media = Object.keys(SCREEN_WIDTHS).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${SCREEN_WIDTHS[label] / 16}em) {
            ${css(...args)}
        }
    `

    return acc
}, {})
