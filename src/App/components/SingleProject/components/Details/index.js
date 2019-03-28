import React from 'react'
import { connect } from 'react-redux'

import { Text, ExternalLink, Title } from 'SharedComponents'
import { Carousel, Section } from './components'

import { DetailsWrapper, Content, Sidebar, Row } from './Details.styles'

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
    },
    skills
}) => {
    const Description = description.split('\n').map((d, idx) => <Text key={idx}>{d}</Text>)
    const Locations = location.map(l => l.name).join(', ')
    const Organizations = organization.map(o => o.name).join(', ')
    const Skills = skill.map(s => skills[s].name).join(', ')
    const Links = link.map(l => {
        return (
            <li key={l.id}>
                <ExternalLink primary href={l.src}>
                    <Text>{l.name}</Text>
                </ExternalLink>
            </li>
        )
    })
    return (
        <DetailsWrapper previewImageSrc={preview_img && preview_img.src}>
            <Row>
                <Content>
                    <Title size="medium">{name}</Title>
                </Content>
            </Row>
            <Row>
                <Content>
                    {!!Links.length && (
                        <Section title="Links">
                            <ul>{Links}</ul>
                        </Section>
                    )}
                    <Section title="Description">{Description}</Section>
                </Content>

                <Sidebar>
                    <Section title="Duration">
                        <Text>{`${start_date.slice(0, -3)} - ${end_date.slice(0, -3)}`}</Text>
                    </Section>

                    <Section title="Skills">
                        <Text>{Skills}</Text>
                    </Section>

                    <Section title="Location">
                        <Text>{Locations}</Text>
                    </Section>

                    <Section title="Organization">
                        <Text>{Organizations}</Text>
                    </Section>
                </Sidebar>
            </Row>
            <Row>
                <Content>
                    {!!image.length && (
                        <Section title="Photos">
                            <Carousel images={image} />
                        </Section>
                    )}
                </Content>
            </Row>
        </DetailsWrapper>
    )
}

export default connect(
    (state, ownProps) => ({
        project: state.project.all[state.project.selected],
        skills: state.skill.all,
        categories: state.category.all
    }),
    {}
)(Details)