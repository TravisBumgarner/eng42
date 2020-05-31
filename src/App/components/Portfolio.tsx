import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { categories, Project } from 'Content'
import { Title, Text } from 'SharedComponents'
import { SECONDARY_COLOR, PRIMARY_COLOR, media } from 'Theme'

type TileWrapperProps = {
    src: string
}

const TileWrapper = styled.div`
    box-sizing: border-box;
    border: 5px solid transparent;
    background-image: url('${(props: TileWrapperProps) => props.src}');
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 400px;
    max-height: 400px;
    width: calc(100vw / 3);
    height: calc(100vw / 3);
    position: relative;

    ${media.desktop} {
        width: calc(100vw / 3 - 2.5vw);
        height: calc(100vw / 3 - 2.5vw);
    }

    ${media.tablet} {
        width: calc(100vw/2 - 2.5vw);
        height: calc(100vw/2 - 2.5vw);
    }
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
    background-color: ${PRIMARY_COLOR};
    > * {
        color: ${SECONDARY_COLOR} !important;
    }
`

type TileProps = {
    project: Project
}

const Tile = ({ project: { id, preview_img, name, category } }: TileProps) => {
    const CategoryList = category.map(c => (
        <>
            <span>{categories[c].name}</span>
            <br />
        </>
    ))
    return (
        <StyledLink to={`/project/${id}`}>
            <TileWrapper src={preview_img && __API__ + preview_img.src}>
                <HoverContent>
                    <Title size="medium"> {name}</Title>
                    <Text>{CategoryList}</Text>
                </HoverContent>
            </TileWrapper>
        </StyledLink>
    )
}

const GridWrapper = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

type PortfolioProps = {
    projects: Project[]
}

const Portfolio = ({ projects }: PortfolioProps) => {
    const Projects = Object.values(projects).map(project => {
        return <Tile key={project.id} project={project} />
    })

    return <GridWrapper>{Projects}</GridWrapper>
}

export default Portfolio
