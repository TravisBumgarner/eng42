import styled from 'styled-components'

const PRIMARY_COLOR = '#000000'
const TERTIARY_COLOR = '#4acfa0'

const ExternalLinkWrapper = styled.a`
    color: ${PRIMARY_COLOR};
    text-decoration: none;
    &:hover {
        color: ${TERTIARY_COLOR};
        cursor: pointer;
    }
`

export { ExternalLinkWrapper }
