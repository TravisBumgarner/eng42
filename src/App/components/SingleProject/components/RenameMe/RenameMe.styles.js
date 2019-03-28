import styled from 'styled-components'

const RenameMeWrapper = styled.div``

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const Content = styled.div`
    flex-grow: 1;
    border: 2px solid black;
    padding: 10px;
    margin: 10px;
`

const Sidebar = styled.div`
    width: 38%;
    border: 2px solid black;
    padding: 10px;
    margin: 10px;
`

export { RenameMeWrapper, Content, Sidebar, Row }
