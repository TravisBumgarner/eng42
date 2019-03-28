import styled from 'styled-components'
import { transparentize } from 'polished'

import FaAngleLeft from 'react-icons/lib/fa/angle-left'
import FaAngleRight from 'react-icons/lib/fa/angle-right'

import { PRIMARY_COLOR, TERTIARY_COLOR, SECONDARY_COLOR } from 'Theme'

const ICON_SIZE = 30

const CarouselWrapper = styled.div`
    display: flex;
    justify-content: center;
    vertical-align: middle;
    margin: 20px 0;
    height: 500px;
    flex-grow: 0;
    position: relative;
`

const PrevButton = styled(FaAngleLeft)`
    position: absolute;
    top: calc(50% - ${ICON_SIZE / 2}px);
    left: 0;
    z-index: 999;
    background-color: ${transparentize(0.8, SECONDARY_COLOR)};
    border-radius: 50%;
    padding: 0 2px 2px 0;

    &:hover {
        fill: ${TERTIARY_COLOR};
        cursor: pointer;
        background-color: ${transparentize(0.8, TERTIARY_COLOR)};
    }
`

const NextButton = styled(FaAngleRight)`
    position: absolute;
    top: calc(50% - ${ICON_SIZE / 2}px);
    right: 0;
    z-index: 999;
    background-color: ${transparentize(0.8, SECONDARY_COLOR)};
    border-radius: 50%;
    padding: 0 0 2px 2px;

    &:hover {
        fill: ${TERTIARY_COLOR};
        cursor: pointer;
        background-color: ${transparentize(0.8, TERTIARY_COLOR)};
    }
`

const ActiveImage = styled.img`
    max-height: 500px;
    align-self: center;
    max-width: 100%;
`

export { CarouselWrapper, ActiveImage, NextButton, PrevButton, ICON_SIZE }
