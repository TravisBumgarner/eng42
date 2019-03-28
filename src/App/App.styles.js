import styled from 'styled-components'

import { FONT_FAMILY_HEADER } from 'Theme'

const AppWrapper = styled.div``

const ErrorMsg = styled.h2`
    margin: 0 0 5px 0;
    font-family: ${FONT_FAMILY_HEADER};
`

const LoadingWrapper = styled.div`
    width: 40vw;
    margin: 0px auto;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export { AppWrapper, LoadingWrapper, ErrorMsg }
