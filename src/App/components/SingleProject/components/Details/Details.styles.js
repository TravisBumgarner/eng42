import styled from 'styled-components'

import { media } from 'Theme'

const DetailsWrapper = styled.div``

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const Content = styled.div`
    flex-grow: 1;
`

const SubContent = styled.div`
    display: flex;
    justify-content: space-between;

    & div {
        width: 48%;
    }
    ${media.tablet`
        flex-direction: column;
        & div {
            width: 100%;
        }
    `}
`

const Sidebar = styled.div`
    width: 38%;
    margin-right: 20px;
    /* border: 2px solid black; */

    ${media.desktop`
        display: none;
    `}
`

const Image = styled.img`
    /* border: 2px solid black; */
    display: block;
    margin: 20px 0;
    max-width: 100%;
    max-height: 100vh;
    box-sizing: border-box;
    align-self: center;
    /* border-left: 10px solid black; */
    /* padding-left: 10px; */
`

const ImagesWrapper = styled.div`
    /* display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left; */
`

export { DetailsWrapper, Content, Sidebar, Row, Image, ImagesWrapper, SubContent }
