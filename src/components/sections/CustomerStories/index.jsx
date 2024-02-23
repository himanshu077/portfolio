import React from "react"
import Section from "../../ui/section"
import Container from "../../ui/container"
import { Caption, Heading, Paragraph } from "../../ui/typography"
import TestimonialCards from "../../TestimonialCards"
import StarsBackground from "../../StarsBackground"
import { CustomerStoriesData } from "./Data"

const CustomerStories = () => {
    return (
        <Section
            id="stories"
            aria-labelledby="stories-heading"
            hasBorderTop
            hasGlowEffect
        >
            <StarsBackground visible="client" />
            <Container>
                <div className="!mb-16 !flex !flex-col !items-center !text-center">
                    <Caption id="stories-heading">Customer Stories</Caption>
                    <Heading> Lorem Ispum Dolor sit amet </Heading>
                    <Paragraph>
                        Here&apos;s Lorem Ispum dolor sit amet, consectetur adipiscing elit. Praesent egestas.<br />
                        condimentum massa, id finibus quam
                    </Paragraph>
                </div>
            </Container>
            <div className="mask-inline-faded group !flex !w-full overflow-x-hidden">
                <ul className="group-hover:play-state-paused motion-reduce:play-state-paused !flex animate-marquee">
                    {CustomerStoriesData.map((testimonial) => <TestimonialCards testimonial={testimonial} />)}
                </ul>
                <ul
                    aria-hidden="true"
                    className="group-hover:play-state-paused motion-reduce:play-state-paused !flex animate-marquee"
                >
                    {CustomerStoriesData.map((testimonial) => <TestimonialCards testimonial={testimonial} />)}
                </ul>
            </div>

        </Section>
    )
}

export default CustomerStories