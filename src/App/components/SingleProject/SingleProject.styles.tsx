import styled from 'styled-components'
import { media } from 'Theme'

const SingleProjectWrapper = styled.div`
    justify-content: space-between;
    display: flex;

    ${media.desktop`
        margin: 20px 4vw;
    `}
`

export { SingleProjectWrapper }
