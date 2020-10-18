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
        <li key={id}>{allCategories[id].name}</li>
    ))
    return (
        <StyledArticle>
            <GridImageWrapper>
                <GridImage src={preview_img && __MEDIA__ + preview_img.src} />
            </GridImageWrapper>
            <StyledLink to={`/project/${id}`}>
                <HoverContent>
                    <Title size="small"> {name}</Title>
                    <Text> {`${start_date.slice(0, -3)} to ${end_date === 'Ongoing' ? 'Ongoing' : end_date.slice(0, -3)
                        }`}
                    </Text>
                    <ul>{CategoryList}</ul>
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

const SectionWrapper = styled.div`
    margin-left: 5px;
    margin-bottom: 20px;
    margin-top: 20px;
`

const WhaleHelloText = styled.p`
    font-size: 2em;
    margin-bottom: 1em;
    
    ${media.desktop} {
        font-size: 1.5em;
        margin-bottom: 0.5em;
    }

    ${media.phone} {
        font-size: 1em;
        margin-bottom: 0.5em;
    }
`

const AboutButton = styled(({ className, onClick, children }) => {
    return <button onClick={onClick} className={className}>{children}</button>
})`
    cursor: pointer;
    color: ${SECONDARY_COLOR};
    font-weight: 700;
    background-color: ${PRIMARY_COLOR};
    padding: 0px 5px;
    border-radius: 5px;
    font-size: 2em;
    
    ${media.desktop} {
        font-size: 1.5em;
        margin-bottom: 0.5em;
    }

    ${media.phone} {
        font-size: 1em;
        margin-bottom: 0.5em;
    }
`

const AboutLink = styled(({ href, className, children }) => {
    return <a target="_blank" href={href} className={className}>{children}</a>
})`
    text-decoration: underline;
    font-weight: 700;
    cursor: pointer;
`


const About = () => {
    const [isMoreShown, setIsMoreShown] = React.useState(false)

    return <SectionWrapper>
        <div style={{ 'display': 'flex', 'flexDirection': 'row', justifyContent: 'space-between' }}>
            <div style={{ width: '25%' }}>
                <img style={{ boxSizing: 'border-box', width: '100%', border: `5px solid ${PRIMARY_COLOR}` }} src={__STATIC__ + 'me.jpg'} />
            </div>
            <div style={{ width: '70%' }}>
                <WhaleHelloText><strong>Hi!</strong> My name is Travis Bumgarner and I think I finally know what I want to be when I grow up. </WhaleHelloText>
                <WhaleHelloText>I want to be an engineer, a lifelong learner, an educator, a maker, and a consultant.</WhaleHelloText>
                <WhaleHelloText>Below you'll a collection of activities I am pursuing in hopes of achieving these goals.</WhaleHelloText>

                {isMoreShown ? null : (
                    < AboutButton
                        onClick={() => { setIsMoreShown(!isMoreShown) }}
                    >
                        How did you get there?
                    </AboutButton >
                )}
                {isMoreShown ? (
                    <>
                        <Text>For the last seven years, I spent my time trying, failing, and succeeding at various careers, passion projects, and hobbies. I did a mechanical engineering internship with in China and landed my first patent. I served in Panama with the Peace Corps, teaching water safety and engineering water systems. In my free time I learned photography and software engineering.</Text>
                        <Text>After Peace Corps ended, I continued my software engineering journey by building websites for non-profits. I joined a makerspace, taught Arduino classes and was elected to the board. Forever curious about startups, I launched one, Painless Prototyping, and ran a succesful Kickstarter campaign. With the experience from my startup, I found myself mentoring others with the MIT Sandbox. I also got to lead a student group from MIT to Colombia for three weeks to teach electronics and learn about makerspaces.</Text>
                        <Text>Two and a half years ago I joined the search engine team for an online education platform doing full stack development and relevance tuning. Outside of my primary role, I've worn the hats of machine learning intern, researcher, and prototyper. I've given many programming talks, organized a book club, beer club, and hosted several social outings.</Text>
                        <Text>
                            {!isMoreShown ? null : (
                                < AboutButton
                                    onClick={() => { setIsMoreShown(!isMoreShown) }}
                                >
                                    Good to know, thanks!
                                </AboutButton >
                            )}
                        </Text>
                    </>
                ) : null}
            </div>
        </div>
    </SectionWrapper >
}

const Portfolio = ({ projects }: PortfolioProps) => {
    const ActiveProjects = createTiles(Object.values(projects).filter(({ end_date }) => end_date === "Ongoing"))
    const InactiveProjects = createTiles(Object.values(projects).filter(({ end_date }) => end_date !== "Ongoing"))

    return (
        <>
            <About />
            <TitleWrapper><Title size="medium">Ongoing Projects</Title></TitleWrapper>
            <GridWrapper>{ActiveProjects}</GridWrapper>
            <TitleWrapper><Title size="medium">Finished Projects</Title></TitleWrapper>
            <GridWrapper>{InactiveProjects}</GridWrapper>
        </>
    )
}

export default Portfolio
