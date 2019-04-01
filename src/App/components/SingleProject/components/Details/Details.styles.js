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
    /* border: 2px solid black; */
    padding: 10px;
    margin: 10px;

    ${media.desktop`
        margin: 10px 0;
        padding: 10px 0;
    `}
`

const SubContent = styled.div`
    display: flex;
    & div {
        width: 50%;
    }
`

const Sidebar = styled.div`
    width: 38%;
    /* border: 2px solid black; */
    padding: 10px;
    margin: 10px;

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
