import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Text, ExternalLink } from 'SharedComponents'
import { Carousel, Section } from './components'

import { DetailsWrapper, Content, Sidebar, Row } from './Details.styles'

const Details = ({ project, skills }) => {
    const Description = project.description.split('\n').map((d, idx) => <Text key={idx}>{d}</Text>)
    const Locations = project.location.map(l => l.name).join(', ')
    const Organizations = project.organization.map(o => o.name).join(', ')
    const Skills = project.skill.map(s => skills[s].name).join(', ')
    const Links = project.link.map(l => {
        return (
            <li key={l.id}>
                <ExternalLink primary href={l.src}>
                    {l.name}
                </ExternalLink>
            </li>
        )
    })

    return (
        <DetailsWrapper previewImageSrc={project.preview_img && project.preview_img.src}>
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
                        {`${project.start_date.slice(0, -3)} - ${project.end_date.slice(0, -3)}`}
                    </Section>

                    <Section title="Skills">{Skills}</Section>

                    <Section title="Location">{Locations}</Section>

                    <Section title="Organization">{Organizations}</Section>
                </Sidebar>
            </Row>
            <Row>
                <Content>
                    {!!project.image.length && (
                        <Section title="Photos">
                            <Carousel images={project.image} />
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
