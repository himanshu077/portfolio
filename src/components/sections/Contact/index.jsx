import React from 'react';
import Section from '../../ui/section';
import Container from '../../ui/container';
import { Caption, Heading, Paragraph } from '../../ui/typography';
import ContactForm from '../../ContactForm';

const Contact = () => {
  return (
    <Section
      id="contact"
      aria-labelledby="contact-heading"
      hasBorderTop
      hasGlowEffect
      className="lg:after:hidden"
    >
      <Container>
        <div className="flex h-full w-full flex-col lg:relative lg:flex-row">
          <div className="basis-full self-start lg:sticky lg:top-24">
            <Caption id="contact-heading">Contact</Caption>
            <Heading>Got a problem to solve?</Heading>
            <Paragraph>
            Lorem Ispum Dolor sit amet, consectetur adipiscing elit. Praesent egestas condimentum massa, <span
                className="text-neutrals-100">your dream website</span>
              .
            </Paragraph>
          </div>
          <div className="mt-10 basis-full lg:ms-10 lg:mt-0 xl:ms-20">
            <ContactForm visible={true} />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Contact;
