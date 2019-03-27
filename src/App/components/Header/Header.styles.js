import styled from 'styled-components'

import { PRIMARY_COLOR, SECONDARY_COLOR } from 'Theme'

const HeaderWrapper = styled.div`
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    color: ${PRIMARY_COLOR};
    background-color: ${SECONDARY_COLOR};
    padding: 30px 0;
    text-align: center;
    box-sizing: border-box;
    z-index: 999;
`

export { HeaderWrapper }
