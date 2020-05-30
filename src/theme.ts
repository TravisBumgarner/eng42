import { css, createGlobalStyle } from 'styled-components'

const PRIMARY_COLOR = '#FFFFFF'
const SECONDARY_COLOR = '#32394c'
const TERTIARY_COLOR = '#b9ccff'

// Media Queries
const SCREEN_WIDTHS = {
    desktop: 1200,
    tablet: 768,
    phone: 376
}

const media = Object.keys(SCREEN_WIDTHS).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${SCREEN_WIDTHS[label] / 16}em) {
            ${css(...args)}
        }
    `

    return acc
}, {})

const GlobalStyle = createGlobalStyle`
    html {
        background-color: ${SECONDARY_COLOR};
        font-size: 16px;
        ${media.tablet`font-size: 14px;`}
    }
`

export { media, PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR, GlobalStyle }
