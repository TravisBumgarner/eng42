import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import { media } from 'Theme'
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
                    <img src={__API__ + preview_img.src} />
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
                                {`${start_date.slice(0, -3)} - ${
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

    ${media.desktop} {
        margin: 20px 4vw;
    }
`

const SingleProject = ({
    projects
}: SingleProjectProps) => {
    if (!Object.keys(projects).length) {
        return null
    }
    const { id } = useParams()
    const project = projects.filter(project => project.id == id)[0]
    return (
        <SingleProjectWrapper>
            <Details project={project} />
        </SingleProjectWrapper>
    )
}

export default SingleProject
