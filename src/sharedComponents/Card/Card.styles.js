import styled from 'styled-components'

import FaArrowLeft from 'react-icons/lib/fa/arrow-left'

import {
    FONT_FAMILY_HEADER,
    TERTIARY_COLOR,
    PRIMARY_COLOR,
    FONT_SIZE_XLARGE,
    FONT_WEIGHT_HEADER
} from 'Theme'

const CardWrapper = styled.div`
    max-width: 1400px;
    width: 75%;
    margin: 0px auto;
`

const Divider = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${PRIMARY_COLOR};
    margin: 20px 0;
`

const CardTitle = styled.h2`
    font-family: ${FONT_FAMILY_HEADER};
    font-size: ${FONT_SIZE_XLARGE};
    font-weight: ${FONT_WEIGHT_HEADER};
    margin: 20px 0;

    ${props =>
        props.shiftHeaderRight &&
        `
    position: relative;
    left: 50px;
  `}
`

const CardContent = styled.div`
    font-weight: 100;
`

export { Divider, CardWrapper, CardTitle, CardContent }
