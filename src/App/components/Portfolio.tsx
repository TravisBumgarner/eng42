import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { allCategories, Project } from 'Content'
import { Title, Text } from 'SharedComponents'
import { SECONDARY_COLOR, PRIMARY_COLOR, media } from 'Theme'

const TitleWrapper = styled.div`
    margin-left: 5px;
    margin-bottom: 20px;
    margin-top: 20px;
`

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
    const CategoryList = categories.sort((a, b) => allCategories[a].name > allCategories[b].name ? 1 : -1).map(id => (
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
                    <Title size="small"> {name}</Title>
                    <Text> {`${start_date.slice(0, -3)} to ${end_date === 'Ongoing' ? 'Ongoing' : end_date.slice(0, -3)
                        }`}
                    </Text>
                    <Text>{CategoryList}</Text>
                </HoverContent>
            </StyledLink>
        </StyledArticle>
    )
}

type PortfolioProps = {
    projects: Project[]
}

const createTiles = (projects: Project[]) => {
    return projects.map(project => {
        return <Tile key={project.id} project={project} />
    })
}

const AboutWrapper = styled.p`
    margin-left: 5px;
    margin-bottom: 20px;
    margin-top: 20px;
`

const About = () => {
    return <AboutWrapper>
        <Text>My name is Travis Bumgarner and I think I finally know what I want to be when I grow up. </Text>

        <Text>For the last seven years, I didn't. I spent my time trying, failing, and succeeding at various careers, passion projects, and hobbies.  I interned with Siemens as a mechanical engineer in China and landed my first patent. I joined the Peace Corps where I served in Panama for two years teaching water safety and engineering water systems. With the downtime I had - I tried gardening, harmonica, guitar, painting, drawing, writing fiction and many other hobbies. Writing software and taking pictures were the only explorations that stuck.  </Text>

        <Text>I found myself lost after the Peace Corps and decided to thoroughly teach myself software engineering and build websites for non-profits. I also joined a makerspace, taught classes there and was elected to the board. I struggled for 3 years to find a job in software - facing several hundred rejections. At one point I was so fed up I decided to create a job for myself and launch a startup, Painless Prototyping, ran a succesful Kickstarter campaign, and failed after that. </Text>

        <Text>I've done a lot at MIT including attending a summit in Colombia, leading a student group back to Colombia, and mentoring startups with the Sandbox program. </Text>

        <Text>So what do I want to be when I grow up? I want to be an engineer. I want to learn new subjects (currently machine learning, C++, ...). I want to share what I have learned with others (via writing, conference talks, video tutorials, live streams, and consulting). I want to bring new products into this world. </Text>

        <Text>Below you'll find a collection of the more long term things I have done or am doing. For more day to day adventures, you can connect with me via Instagram, Twitter, LinkedIn, GitHub, and email. </Text>
    </AboutWrapper>
}


const Portfolio = ({ projects }: PortfolioProps) => {
    const ActiveProjects = createTiles(Object.values(projects).filter(({ end_date }) => end_date === "Ongoing"))
    const InactiveProjects = createTiles(Object.values(projects).filter(({ end_date }) => end_date !== "Ongoing"))

    return (
        <>
            <TitleWrapper><Title size="medium">Hi - Thanks for stopping by!</Title></TitleWrapper>
            <About />
            <TitleWrapper><Title size="medium">Ongoing Projects</Title></TitleWrapper>
            <GridWrapper>{ActiveProjects}</GridWrapper>
            <TitleWrapper><Title size="medium">Finished Projects</Title></TitleWrapper>
            <GridWrapper>{InactiveProjects}</GridWrapper>
        </>
    )
}

export default Portfolio
