import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { allCategories, Project } from 'Content'
import { Title, Text } from 'SharedComponents'
import { SECONDARY_COLOR, PRIMARY_COLOR, media } from 'Theme'

type TileWrapperProps = {
    src: string
}

const GridWrapper = styled.div`
    position: relative;
`

const GridImage = styled.img`
    width: 100%;
`

const GridImageWrapper = styled.div`
    line-height: 0;
`

const StyledArticle = styled.article`
    width: calc(33% - 6.5px);
    box-sizing: border-box;
    margin: 5px;
    border: 5px solid white;
    display: inline-block;
    position: relative;

    ${media.desktop} {
        width: calc(50% - 10px);
    }

    ${media.tablet} {
        width: calc(100% - 10px);
    }
    
    img {
        line-height: 0;
    }
`

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: ${PRIMARY_COLOR};
    // position: absolute;
    // top: 0;
    // left: 0;
`
const HoverContent = styled.div`
    &:hover {
        opacity: 0.9;
    }
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 25px;

    background-color: ${PRIMARY_COLOR};
    > * {
        color: ${SECONDARY_COLOR} !important;
    }
`

type TileProps = {
    project: Project
}

const Tile = ({ project: { id, preview_img, name, categories, start_date, end_date } }: TileProps) => {
    const CategoryList = categories.map(id => (
        <>
            <span>{allCategories[id].name}</span>
            <br />
        </>
    ))
    return (
        <StyledArticle>
            <GridImageWrapper>
                <GridImage src={preview_img && __API__ + preview_img.src} />
            </GridImageWrapper>
            <StyledLink to={`/project/${id}`}>
                <HoverContent>
                    <Title size="medium"> {name}</Title>
                    <Title size="small"> {`${start_date.slice(0, -3)} to ${
                        end_date === 'Ongoing' ? 'Ongoing' : end_date.slice(0, -3)
                        }`}
                    </Title>
                    <Text>{CategoryList}</Text>
                </HoverContent>
            </StyledLink>
        </StyledArticle>
    )
}

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
