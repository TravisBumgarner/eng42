import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { TERTIARY_COLOR, PRIMARY_COLOR, media } from 'Theme'

const TileWrapper = styled.div`
    background-image: url('${props => props.src}');
    background-repeat: no-repeat;
    background-size: cover;
    &:hover{
        background: #fff;
        color: ${TERTIARY_COLOR};
    }
    max-width: 400px;
    max-height: 400px;
    width: calc(100vw / 3);
    height: calc(100vw / 3);
    position: relative;

    ${media.tablet`
        width: calc(100vw/2);
        height: calc(100vw/2);
    `} /* padding: 10px; */
    /* border: 2px solid black; */
`

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: ${PRIMARY_COLOR};
`

const HoverContent = styled.div`
    &:hover {
        opacity: 1;
    }
    padding: 25px;
    box-sizing: border-box;
    z-index: 999;
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
`

export { TileWrapper, HoverContent, Image, StyledLink }
