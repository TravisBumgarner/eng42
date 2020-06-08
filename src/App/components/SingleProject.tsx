import React from 'react'
import styled from 'styled-components'
import { useParams, useHistory } from 'react-router-dom'

import { media, PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from 'Theme'
import { allSkills, Project, Skills } from 'Content'
import { Text, ExternalLink, Title } from 'SharedComponents'

const DetailsWrapper = styled.div``

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const Content = styled.div`
    flex-grow: 1;
`

const SubContent = styled.div`
    display: flex;
    justify-content: space-between;

    & div {
        width: 48%;
    }
    ${media.tablet} {
        flex-direction: column;
        & div {
            width: 100%;
        }
    }
`

const Sidebar = styled.div`
    width: 38%;
    min-width: 400px;
    margin-right: 20px;

    ${media.desktop} {
        display: none;
    }
`

const Image = styled.img`
    display: block;
    margin: 20px 0;
    max-width: 100%;
    max-height: 100vh;
    box-sizing: border-box;
    align-self: center;
`

const SidebarImage = styled.img`
    height: auto;
    width: 100%;
`

const SectionWrapper = styled.div`
    width: 100%;
    margin: 20px 0;
`

type SectionProps = {
    children: React.ReactNode
    title: string
}

const Section = ({ children, title }: SectionProps) => {
    return (
        <SectionWrapper>
            <Title size="small">{title}</Title>
            <Text>{children}</Text>
        </SectionWrapper>
    )
}

type DetailsProps = {
    project: Project
}

const Details = ({
    project: {
        description,
        locations,
        organizations,
        skills,
        links,
        preview_img,
        name,
        start_date,
        end_date,
        images
    }
}: DetailsProps) => {
    const Description = description.split('\n').map((d, idx) => <Text key={idx}>{d}</Text>)
    const Locations = locations.join(', ')
    const Organizations = organizations.join(', ')
    const Skills = skills
        .map(s => allSkills[s].name)
        .sort()
        .join(', ')
    const Links = links.map(l => {
        return (
            <li key={l.name + l.src}>
                <ExternalLink href={l.src}>
                    <Text>{l.name}</Text>
                </ExternalLink>
            </li>
        )
    })
    const Images = images.map(i => <Image src={__API__ + i.src} />)
    return (
        <DetailsWrapper>
            <Row>
                <Sidebar>
                    <SidebarImage src={__API__ + preview_img.src} />
                </Sidebar>

                <Content>
                    <Title size="medium">{name}</Title>
                    {!!Links.length && (
                        <Section title="Links">
                            <ul>{Links}</ul>
                        </Section>
                    )}
                    <Section title="Description">{Description}</Section>

                    <SubContent>
                        <Section title="Skills">
                            <Text>{Skills}</Text>
                        </Section>

                        <Section title="Meta">
                            <Text>
                                When:{' '}
                                {`${start_date.slice(0, -3)} to ${
                                    end_date === 'Ongoing' ? 'Ongoing' : end_date.slice(0, -3)
                                    }`}
                            </Text>
                            <Text>Where: {Locations}</Text>
                            <Text>Who: {Organizations}</Text>
                        </Section>
                    </SubContent>
                    {images.length ? <Section title="Photos">{Images}</Section> : null}
                </Content>
            </Row>
        </DetailsWrapper>
    )
}

type SingleProjectProps = {
    projects: Project[]
}

const SingleProjectWrapper = styled.div`
    justify-content: space-between;
    display: flex;
    align-items: top;

    ${media.desktop} {
        margin: 20px 4vw;
    }
`

const ChangeProjectButton = styled.button`
    margin: 2em;
    background-color: ${PRIMARY_COLOR};
    color: ${SECONDARY_COLOR};
    border: 0;
    padding: 1em;
    cursor: pointer;
    position: relative;
    top: 30vh;
    border-radius: 1em;
    font-weight: 700;
    font-size: 1em;

    &:hover {
        background-color: ${TERTIARY_COLOR};
    }
`

const ChangeProjectButtonWrapper = styled.div`
    ${media.desktop} {
        display: none;
    }
`

const SingleProject = ({
    projects
}: SingleProjectProps) => {
    if (!Object.keys(projects).length) {
        return null
    }
    const { id } = useParams()
    const history = useHistory();

    const projectId = projects.findIndex(project => project.id == id)
    const previousId = projectId > 0 ? projectId - 1 : projects.length - 1
    const nextId = projectId < projects.length - 1 ? projectId + 1 : 0

    return (
        <>
            <SingleProjectWrapper>
                <ChangeProjectButtonWrapper>
                    <ChangeProjectButton onClick={() => history.push(`/project/${projects[previousId]['id']}`)}>Prev</ChangeProjectButton>
                </ChangeProjectButtonWrapper>
                <Details project={projects[projectId]} />
                <ChangeProjectButtonWrapper>
                    <ChangeProjectButton onClick={() => history.push(`/project/${projects[nextId]['id']}`)}>Next</ChangeProjectButton>
                </ChangeProjectButtonWrapper>
            </SingleProjectWrapper>
        </>
    )
}

export default SingleProject
