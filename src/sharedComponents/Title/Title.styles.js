import styled from 'styled-components'

import { PRIMARY_COLOR } from 'Theme'

const LargeTitle = styled.h1`
    display: inline-block;
    font-size: 1.5rem;
    margin: 10px 0;
    font-weight: 700;
    font-family: Raleway, sans-serif;
    text-transform: uppercase;
    color: ${PRIMARY_COLOR};
`

const MediumTitle = styled.h2`
    display: inline-block;
    font-size: 1.2rem;
    margin: 0 0 10px 0;
    font-weight: 700;
    font-family: Raleway, sans-serif;
    color: ${PRIMARY_COLOR};
`

const SmallTitle = styled.h3`
    display: inline-block;
    font-size: 1rem;
    margin: 5px 0;
    font-weight: 700;
    font-family: Raleway, sans-serif;
    color: ${PRIMARY_COLOR};
`

export { LargeTitle, MediumTitle, SmallTitle }
