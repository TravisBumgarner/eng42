import React from 'react'
import styled from 'styled-components'

import { skills, Project, Skills } from 'Content'
import { Text, ExternalLink, Title } from 'SharedComponents'
import { media } from 'Theme'

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
            <Text size="small">{children}</Text>
        </SectionWrapper>
    )
}

type DetailsProps = {
    project: Project
}

const Details = ({
    project: {
        description,
        location,
        organization,
        skill,
        link,
        preview_img,
        name,
        start_date,
        end_date,
        image
    }
}: DetailsProps) => {
    const Description = description.split('\n').map((d, idx) => <Text key={idx}>{d}</Text>)
    const Locations = location.map(l => l.name).join(', ')
    const Organizations = organization.map(o => o.name).join(', ')
    const Skills = skill
        .map(s => skills[s].name)
        .sort()
        .join(', ')
    const Links = link.map(l => {
        return (
            <li key={l.id}>
                <ExternalLink href={l.src}>
                    <Text>{l.name}</Text>
                </ExternalLink>
            </li>
        )
    })
    const Images = image.map(i => <Image src={__API__ + i.src} />)
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
                    {image.length ? <Section title="Photos">{Images}</Section> : null}
                </Content>
            </Row>
        </DetailsWrapper>
    )
}

export default Details
