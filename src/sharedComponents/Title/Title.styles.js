import styled from 'styled-components'

import { FONT_FAMILY_HEADER } from 'Theme'

const PRIMARY_COLOR = '#000000'
const SECONDARY_COLOR = '#FFFFFF'
const TERTIARY_COLOR = '#4acfa0'
const FONT_WEIGHT_HEADER = 700
const FONT_SIZE_NORMAL = '0.9rem'
const FONT_SIZE_SMALL = '0.8rem'
const FONT_NORMAL_LINE_HEIGHT = '1.4'
const FONT_SIZE_LARGE = '1.5rem'
const FONT_SIZE_XLARGE = '2.5rem'

const TitleWrapper = styled.h1`
    font-size: ${FONT_SIZE_LARGE};
    margin: 10px;
    font-family: ${FONT_FAMILY_HEADER};
`

export { TitleWrapper }
