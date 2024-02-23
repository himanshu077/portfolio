import React from 'react'
import Container from '../../ui/container'
import { Caption, Heading } from "../../ui/typography"
import ProjectCarousel from '../../ProjectCarousle'
import Section from '../../ui/section'
import { projects } from './Data'

const Work = () => {
    return (
        <Section
            id="work"
            aria-labelledby="work-heading"
            hasBorderTop
            hasGlowEffect
            className="lg:border-t-0.5 lg:border-neutrals-600 lg:before:hidden lg:after:hidden"
        >
            <Container>
                <div className="flex flex-col items-center text-center">
                    <Caption id="work-heading">Work</Caption>
                    <Heading>Dig into my universe</Heading>
                </div>
            </Container>
            <ProjectCarousel
                idle="client"
                projects={projects}
            />
        </Section>
    )
}

export default Work
