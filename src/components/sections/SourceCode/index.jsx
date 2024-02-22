import React from 'react'
import Section from '../../ui/section';
import Container from '../../ui/container';
import { Caption, Heading, Paragraph } from '../../ui/typography';
import Button from '../../ui/button';
import MatrixBackground from '../../MatrixBackground';
import siteConfig from '../../../config/site';

const SourceCode = () => {
    return (
        <Section
            id="source-code"
            aria-labelledby="sourcecode-heading"
            hasBorderTop
        >
            <MatrixBackground visible="true"/>
            <Container>
                <div className="flex h-full flex-col items-center justify-center text-center">
                    <Caption id="sourcecode-heading">Source code</Caption>
                    <Heading>Lorem Ispum Dolor</Heading>
                    <Paragraph>
                        Lorem Ispum <span className="text-neutrals-100">dolor sit amet</span> - consectetur adipiscing elit. Praesent egestas condimentum massa, id finibus quam porta nec. Cras et egestas leo. Suspendisse consectetur libero sed faucibus tincidunt
                    </Paragraph>
                    <Button
                        as="a"
                        href={siteConfig.links.sourcecode}
                        rel="noreferrer"
                        target="_blank"
                        foreground="error"
                        className="mt-8"
                    >
                        Show me
                    </Button>
                </div>
            </Container>
        </Section>
    );
}

export default SourceCode;
